
const
  // Английский
  myefe_ru = ['#msui-sticky-ad', '#ogdac-block-id-8406-64f6942b058bc', '#ogdac-block-id-8400-64f6942b052fa'],
  unkn = ['.glory'],
  xvideos = ['#video-ad'];

/****************************************************
 * Remove all selected selectors
 ***************************************************/
const rass = (selectors) => {

  selectors.forEach(selector => {
    const elem = document.querySelector(selector);
    if (elem) elem.remove();
  });
}

// Launch removeAllAds
// rass(myefe_ru); // Английский

/****************************************************
 * Remove link a with href contains 'ukraine'
 ***************************************************/
const rui = () => {
  const allA = document.querySelectorAll('a');
  if (! allA) return;
  
  for (const a of allA) {
    if (a.href.includes('ukraine')) a.remove();
  }
};

/****************************************************
 * Remove all selectors & ukr
 ***************************************************/
const ras = () => {
  rass(myefe_ru);
  rass(unkn);
  rass(xvideos);
  rui();
};

// ras();

/***************************************************
 * Remove all iframes
 ***************************************************/
const raf = () => {
  const ifr = document.querySelectorAll('iframe')

  if (ifr) {
    for (const item of ifr) {
      // console.log('item: ', item);
      item.remove()
    }
  }
};

// Launch raf
// raf();



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

/***************************************************
 * Автоматически нажать на ссылку для скачивания 
 ***************************************************/
const execFuncInAllLinksBySelector = (func, selector) => {
  const a = document.querySelectorAll(selector);
  if (!a) return
  
  for (const item of a) {
    func(item);
  }
};

// Click link if includes 'Скачать'
const autoClickTorrentHref = () => {
  const clickIfTorrentHref = (link) => {
    if (isTextContent(link, 'Скачать')) {
      link.click();
    }
  };

  execFuncInAllLinksBySelector(clickIfTorrentHref, '.btn--download');
};

// -------------------------------------------------------

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

// -------------------------------------------------------



/***************************************************
 * Пробы... убрать рекламу из видео
 ***************************************************/
// const selectors = document.querySelectorAll('video');

// if (selectors) {
//   for (const item of selectors) {
//     console.log(item);
//   }
// }

// 
