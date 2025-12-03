

const DEFAULT_IMG_URL = 'https://proza.ru/pics/2021/06/20/847.jpg';
// 'https://i.pinimg.com/originals/ac/6a/e7/ac6ae7bcb93cc0de3fdcc167db69ba55.jpg';



function applyCustomDesign(settings) {
  // console.log('Применяем кастомный дизайн...', settings);

  // Сразу добавляем стиль, который скрывает ::after
  const style = document.createElement('style');
  style.innerHTML = `
    .tasks-kanban-item-title.no-after::after {
      display: none !important;
      content: none !important;
    }
  `;
  document.head.appendChild(style);


  const elements = document.querySelectorAll('.tasks-kanban-item-title');
  // if (! elements) return;

  elements.forEach(elem => {
    elem.style.maxHeight = '100%';

    // Добавляем класс, который скрывает ::after
    elem.classList.add('no-after');
  });
  
  
  // Удаляем лишние элементы
  ['.b24-app-block', '.intranet-release-ear', '.menu-license-all-wrapper']
    .forEach(selector => {
      const elem = document.querySelector(selector);
      if (elem) elem.remove();
    });


  // Добавляем картинку
  if (settings && settings.backgroundImage) {
    document.body.style.backgroundImage = `url(${settings.backgroundImage})`;
  }
  else {
    document.body.style.backgroundImage = `url(${DEFAULT_IMG_URL})`;
  }

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  // Изменение переменной для всего документа
  document.documentElement.style.setProperty(
    '--air-theme-bg-image-blurred',
    'none'
  );

  // Устанавливаем новый фон барам
  ['header', '#menu-items-block', '#right-bar'].forEach(selector => {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.style.background = '#00000067';
    }
  });

  ['.page__toolbar'].forEach(selector => {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.style.background = '#0000003d';
    }
  });

  // Кнопка Добавить задачу проект
  document.documentElement.style.setProperty(
    '--ui-color-accent-main-success',
    '#883122'
  );

  ['#tasks-buttonAdd', '#projectAddButton'].forEach(selector => {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.style.background = '#883122';
    }
  });

  // Кнопка Видеозвонок
  document.documentElement.style.setProperty(
    '--ui-color-accent-main-primary',
    '#8aa0b7'
  );
  // ['.ui-btn-main'].forEach(selector => {
  //   const elem = document.querySelector(selector);
  //   if (elem) {
  //     elem.style.background = '#8aa0b7';
  //   }
  // });
}


// Функция для получения настроек из storage
function getSettings() {
  return new Promise((resolve) => {
    // Пытаемся получить настройки из localStorage как fallback
    const savedSettings = localStorage.getItem('customDesignSettings');
    if (savedSettings) {
      resolve(JSON.parse(savedSettings));
      return;
    }

    // Если в localStorage нет, используем настройки по умолчанию
    const defaultSettings = {
      backgroundImage: DEFAULT_IMG_URL,
      backgroundSize: 'cover'
    };
    resolve(defaultSettings);
  });
}


// Функция для сохранения настроек в localStorage
function saveSettings(settings) {
  localStorage.setItem('customDesignSettings', JSON.stringify(settings));
}


// Слушатель сообщений от popup
if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updateBackground") {
      const settings = {
        backgroundImage: request.backgroundImage,
        backgroundSize: request.backgroundSize
      };
      saveSettings(settings);
      applyCustomDesign(settings);
      sendResponse({ success: true });
    }
  });
}


async function init() {
  try {
    const settings = await getSettings();
    applyCustomDesign(settings);

    // Слушатель для динамических изменений (SPA)
    const observer = new MutationObserver(async () => {
      const settings = await getSettings();
      applyCustomDesign(settings);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  catch (error) {
    console.log('Custom Design Extension Error:', error);
  }
}


// Запуск
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
}
else {
  init();
}
