

/**
 * Test, don`t work
 * Open link in new window & execute script
 * @param {string} url
 */
function openAndPush(url) {
  const win = window.open(url, '_blank');
  win.func = function () {
    console.log('ЗАПУСКАЕМ ФУНКЦИЮ');
    autoClickTorrentHref();
  };
  setTimeout(function () {
    console.log('ФУНКЦИЯ В СЕТТАЙМАУТЕ');
    win.func();
  }, 1000);
}

// -------------------------------------------------------


/***************************************************
 * HELPERS
 ***************************************************/

/**
 * Check is selector includes this text
 * @param {Element} selector
 * @param {string} text
 */
const isTextContent = (selector, text) => {
  if (! selector) return
  
  return selector.textContent.includes(text);
};

/**
 * Check is selector contains this className
 * @param {Element} selector
 * @param {string} className
 */
const isClassNameContains = (selector, className) => {
  if (! selector) return
  
  return selector.classList.contains(className);
};


/***************************************************
 * Автоматически нажать на ссылку для скачивания 
 ***************************************************/

/** Запустить функцию для каждого попавшегося селектора */
const execFuncInAllLinksBySelector = (func, selector) => {
  const a = document.querySelectorAll(selector);
  if (!a) return
  
  for (const item of a) {
    func(item);
  }
};

/** Click link if includes 'Скачать' */
const autoClickTorrentHref = () => {
  const clickIfTorrentHref = (link) => {
    if (isTextContent(link, 'Скачать')) {
      link.click();
    }
  };

  execFuncInAllLinksBySelector(clickIfTorrentHref, '.btn--download');
};

// -------------------------------------------------------

/**
 * Если а содержит класс .btn--download => кликаем
 * Иначе открываем в новом окне
 */
const clickTorrentDownloadLink = () => {
  const func = (link) => {
    if (isClassNameContains(link, 'btn')) {
      if (isTextContent(link, 'Скачать')) {
        // link.click();
        if (isClassNameContains(link, '.btn--download')) link.click()
        else window.open(link.href, '_blank');
      }
    }
  };
  
  execFuncInAllLinksBySelector(func, 'a');
};

clickTorrentDownloadLink();
