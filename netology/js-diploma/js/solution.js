'use strict'

// ~~~~~~~~~~ global variables  ~~~~~~~~~~  //
const app = document.querySelector('.app');
const menu = document.querySelector('.menu');
const inputImage = document.querySelector('.menu__item.new');
const background = document.querySelector('.current-image');
const shareMenu = document.querySelector('.share');
const burgerMenu = document.querySelector('.burger');
const commentsMenu = document.querySelector('.comments');
const commentsToggle = document.querySelectorAll('.menu__toggle');
const drawMenu = document.querySelector('.draw');
const drawArea = document.createElement('canvas');
const ctx = drawArea.getContext("2d");
const mask = new Image;
let wsConnection;
let dragMenu = null;
const comments = [];
const drawData = {};
const mainPath = 'denver411.github.io/netology/js-diploma/index.html';


// ~~~~~~~~~~ functions ~~~~~~~~~~ //
function toWindowCenter(block) {
  let windowHeight = document.documentElement.clientHeight;
  let windowWidth = document.documentElement.clientWidth;
  let blockHeight = block.offsetHeight;
  let blockWidth = block.offsetWidth;
  let height = windowHeight / 2 - blockHeight / 2;
  let width = (windowWidth - blockWidth) / 2;
  block.style.setProperty('--menu-top', height + "px");
  block.style.setProperty('--menu-left', width + "px");
  if (width > (windowWidth - block.offsetWidth) / 2) {
    toWindowCenter(menu);
  }
}

function createElement(node) {

  if ((typeof node === 'string')) {
    return document.createTextNode(node.toString());
  }

  if (Array.isArray(node)) {
    return node.reduce((f, elem) => {
      f.appendChild(createElement(elem));
      return f;
    }, document.createDocumentFragment());
  }

  const element = document.createElement(node.name);
  if (node.props) {
    Object.keys(node.props).forEach(
      key => element.setAttribute(key, node.props[key])
    );
  }

  if (node.childs) {
    element.appendChild(createElement(node.childs))
  };

  return element;
}

function showError(text) {
  menu.style.display = 'none';
  document.querySelector('.image-loader').style.display = 'none';

  document.querySelector('.error__message').innerText = text;
  document.querySelector('.error').style.display = '';
  setTimeout(() => {
    window.location.reload();
    // menu.style.display = '';
   // document.querySelector('.error').style.display = 'none';
  }, 2500)
}

function loadBackground(file) {

  const {
    type
  } = file;
  if (type !== 'image/png' && type !== 'image/jpeg' && type !== 'image/pƒjpeg') {
    showError('Неверный формат файла. Пожалуйста, выберите изображение в формате .jpg или .png.');
    return;
  }
  background.removeAttribute('src');
  burgerMenu.style.display = '';
  createBackground(file);
}

function createBackground(img) {
  const imageForSend = new FormData;
  imageForSend.append('title', 'This is just background');
  imageForSend.append('image', img);

  menu.style.display = 'none';
  document.querySelector('.image-loader').style.display = '';

  fetch('https://neto-api.herokuapp.com/pic', {
      body: imageForSend,
      method: 'POST'
    })
    .then(data => {
      return data.json();
    })
    .then(data => {
      wsEvents(data.id);
      shareImage(data);
    })
    .catch(showError);
}

function shareImage(data) {
  menu.dataset.state = 'selected';
  shareMenu.dataset.state = 'selected';
  if (data) {
    document.querySelector('.menu__url').setAttribute('value', `${mainPath}?${data.id}`);
    window.location.href = `${mainPath}?${data.id}`;
    toWindowCenter(menu);
  }
}

function drawingMask() {
  let drawColor = drawMenu.nextElementSibling.querySelector('[checked]').getAttribute('value');
  let drawing = false;
  drawArea.style.cssText = 'position: absolute; \
    top: 50%; \
    left: 50%; \
    transform: translate(-50%, -50%); \
    z-index: 2;'

  drawArea.width = background.offsetWidth;
  drawArea.height = background.offsetHeight;

  Array.from(drawMenu.nextElementSibling.children).forEach(item => {

    item.addEventListener('change', () => {
      Array.from(drawMenu.nextElementSibling.children).forEach(item => {
        item.removeAttribute('checked');
      })
      item.setAttribute('checked', '');
      drawColor = item.getAttribute('value');
    })
  })

  function drawCreate(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = drawColor;
    ctx.fillStyle = drawColor;
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  drawArea.addEventListener("mousedown", (event) => {
    event.preventDefault();
    drawing = true;
    drawCreate(event.offsetX, event.offsetY);
  });

  drawArea.addEventListener("mouseup", () => {
    drawing = false;
    sendMask();
  });

  drawArea.addEventListener("mouseleave", () => {
    drawing = false;
  });

  drawArea.addEventListener("mousemove", (event) => {
    event.preventDefault();
    if (drawing) {
      drawCreate(event.offsetX, event.offsetY);
    }
  });

}

function wsEvents(id) {
  wsConnection = new WebSocket(`wss://neto-api.herokuapp.com/pic/${id}`);
  wsConnection.addEventListener('message', event => {
    let wsData = JSON.parse(event.data);
    console.log(wsData);
    if (wsData.event === 'mask') {
      updateMask(wsData.url);
    }
    if (wsData.event === 'error') {
      console.log(wsData);
    }
    if (wsData.event === 'pic') {
      background.src = wsData.pic.url;
      background.addEventListener('load', () => {
        document.querySelector('.image-loader').style.display = 'none';
        menu.style.display = '';
        app.insertBefore(drawArea, background);
      })
      if (wsData.pic.mask){
        updateMask(wsData.pic.mask);
      }
    }
  })
}

function sendMask() {
  //костыль для объединения слоев
  if (mask.src) {
    ctx.drawImage(mask, 0, 0);
  }
  //костыль для объединения слоев
  drawArea.toBlob(blob => {
    console.log(blob);
    wsConnection.send(blob);
  })
}

function updateMask(url) {
  //костыль для объединения слоев
  mask.crossOrigin = "anonymous";
  //костыль для объединения слоев
  if (mask.src) {
    mask.src = url;
    mask.addEventListener('load', () => {
      ctx.clearRect(0, 0, drawArea.width, drawArea.height);
    })
  } else {
    mask.src = url;
    mask.style.cssText = 'position: absolute; \
    top: 50%; \
    left: 50%; \
    transform: translate(-50%, -50%); \
    z-index: 1;';
    mask.addEventListener('load', () => {
      ctx.clearRect(0, 0, drawArea.width, drawArea.height);
      app.insertBefore(mask, background);
    })
  }
}

function getUrlId() {
  let startId = window.location.href.indexOf('?');
  let backgroundUrl = {};
  backgroundUrl.id = window.location.href.substring(startId + 1);

  if (startId >= 0 && backgroundUrl.id.length > 1) {
    return backgroundUrl;
  } else {
    return false
  };
}

// ~~~~~~~~~~ events ~~~~~~~~~~ //
//загрузка страницы
document.addEventListener('DOMContentLoaded', () => {

  background.removeAttribute('src');
  comments.push(document.querySelector('.comments__form'));
  comments.forEach(item => {
    item.style.display = 'none';
  })
  //вставка инпута в меню
  const newInputImage = {
    name: 'label',
    props: {
      'class': "menu__item"
    },
    childs: [{
        name: 'i',
        props: {
          'class': "menu__icon new-icon"
        }
      },
      {
        name: 'span',
        props: {
          'class': "menu__item-title"
        },
        childs: ['Загрузить',
          {
            name: 'br'
          },
          'новое'
        ]
      },
      {
        name: 'input',
        props: {
          'type': "file",
          'style': "display: none;",
          'accept': "image/jpeg, image/pjpeg, image/png"
        }
      }
    ]
  }

  inputImage.innerText = '';
  inputImage.style.padding = 0;
  inputImage.appendChild(createElement(newInputImage));

  //загрузка нового фона по нажатию "Загрузить"
  const inputNewImage = document.querySelector('.menu__item.new input');

  inputNewImage.addEventListener('change', event => {
    event.preventDefault();
    const [file] = event.currentTarget.files;
    loadBackground(file);
  });
  let shareUrl = getUrlId();
  if (shareUrl) {
    wsEvents(shareUrl.id);
    //shareImage(shareUrl);
  } else {
    menu.dataset.state = 'initial';
    burgerMenu.style.display = 'none';
    toWindowCenter(menu);
  }
})

//загрузка файла переносом
app.addEventListener('dragover', event => event.preventDefault());

app.addEventListener('drop', event => {
  event.preventDefault();
  if (background.src) {
    showError('Чтобы загрузить новое изображение, пожалуйста воспользуйтесь пунктом "Загрузить новое" в меню')
    return;
  }
  const [file] = event.dataTransfer.files;
  console.log(file);
  loadBackground(file);
})

//перетаскивание меню
menu.firstElementChild.addEventListener('mousedown', (event) => {
  dragMenu = event.currentTarget;
})

document.addEventListener('mousemove', event => {
  if (dragMenu) {
    event.preventDefault();

    if (event.pageX - dragMenu.offsetWidth / 2 < 0) {
      menu.style.setProperty('--menu-left', 0 + 'px')
    } else if (event.pageX + menu.offsetWidth > document.documentElement.clientWidth - dragMenu.offsetWidth / 2) {
      menu.style.setProperty('--menu-left', document.documentElement.clientWidth - menu.offsetWidth - 1 + 'px')
    } else {
      menu.style.setProperty('--menu-left', event.pageX - dragMenu.offsetWidth / 2 + 'px');
    }

    if (event.pageY - dragMenu.offsetHeight / 2 < 0) {
      menu.style.setProperty('--menu-top', 0 + 'px')
    } else if (event.pageY + menu.offsetHeight > document.documentElement.clientHeight - dragMenu.offsetWidth / 2) {
      menu.style.setProperty('--menu-top', document.documentElement.clientHeight - menu.offsetHeight + 'px')
    } else {
      menu.style.setProperty('--menu-top', event.pageY - dragMenu.offsetHeight / 2 + 'px');
    }

  }
})

menu.firstElementChild.addEventListener('mouseup', event => {
  if (dragMenu) {
    dragMenu = null;
  }
});
//клики
menu.addEventListener('click', event => {
  if (event.target === burgerMenu) {
    Array.from(menu.children).forEach(item => {
      item.dataset.state = '';
    })
    menu.dataset.state = 'default';
  }

  if (event.target === shareMenu) {
    Array.from(menu.children).forEach(item => {
      item.dataset.state = '';
    })
    shareImage();
  }

  if (event.target === drawMenu) {
    Array.from(menu.children).forEach(item => {
      item.dataset.state = '';
    })
    menu.dataset.state = 'selected';
    drawMenu.dataset.state = 'selected';
    drawingMask();
  }

  if (event.target === commentsMenu) {
    Array.from(menu.children).forEach(item => {
      item.dataset.state = '';
    })
    menu.dataset.state = 'selected';
    commentsMenu.dataset.state = 'selected';

    if (commentsToggle[0].hasAttribute('checked')) {
      comments.forEach(item => {
        item.style.display = '';
      })
    }
  }
})



// ~~~~~~~~~~ code ~~~~~~~~~~ //

//скрыть / показать комментарии
Array.from(commentsToggle).forEach(item => {
  item.addEventListener('change', event => {
    if (item.getAttribute('value') === 'on') {
      commentsToggle[1].removeAttribute('checked');
      commentsToggle[0].setAttribute('checked', '');
      comments.forEach(item => {
        item.style.display = '';
      })
    } else {
      commentsToggle[0].removeAttribute('checked');
      commentsToggle[1].setAttribute('checked', '');
      comments.forEach(item => {
        item.style.display = 'none';
      })
    }
  })
})

console.log('ok');
