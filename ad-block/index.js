
const
  // Английский
  myefe_ru = ['#msui-sticky-ad', '#ogdac-block-id-8406-64f6942b058bc', '#ogdac-block-id-8400-64f6942b052fa'],
  russkiiyazyk = ['#block-2', '.vads-positioner', '#RUS_ATA_336', '#via_102417_3320', '.google-auto-placed', '#RUS_SBL_300c', '#via_102417_3320', '.adsbygoogle'],
  unkn = ['.glory'],
  dzen = ['.article-right-ad-block__sticky'],
  xvideos = ['#video-ad', '#ad-footer', '.remove-ads'],
  gitar = ['.ab', '#wrap_6334'],
  errInGoogleSheet = ['.docs-butterbar-wrap', '.modal-dialog'],
  online_films = ['#vid_vpaut_div', '#movie_video', '#gaeud042717469866987656', '#Spgbt09128344878918826', '#RkAcV0259283142768975'];


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
  if (!allA) return;

  for (const a of allA) {
    if (a.href.includes('ukraine')) a.remove();
  }
};

/***************************************************
 * Remove all selectors dublicates
 ***************************************************/
const rasd = (selector) => {
  const all = document.querySelectorAll(selector)

  if (all) {
    for (const item of all) {
      console.log('item: ', item);
      item.remove()
    }
  }
};

/****************************************************
 * Remove all selectors & ukr
 ***************************************************/
const ras = () => {
  rasd(myefe_ru);
  rasd(unkn);
  rasd(xvideos);
  rasd(dzen);
  rasd(russkiiyazyk);
  rasd(gitar);
  rasd(errInGoogleSheet);
  rasd(online_films);
  rui();
};

ras();



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
  if (!selector) return

  return selector.textContent.includes(text);
};

/**
 * Check is selector contains this className
 * @param {Element} selector
 * @param {string} className
 */
const isClassNameContains = (selector, className) => {
  if (!selector) return

  return selector.classList.contains(className);
};




/***************************************************
 * Пробы... убрать рекламу из видео
 ***************************************************/
// const selectors = document.querySelectorAll('video');

// if (selectors) {
//   for (const item of selectors) {
//     console.log(item);
//   }
// }

// GOOGLE SHEETS
['.docs-butterbar-wrap', '.modal-dialog', '.modal-dialog-bg'].forEach(selector => {
  const elem = document.querySelector(selector);
  if (elem) elem.remove();
});

// KONTUR
['.c-kontur__unpayment'].forEach(selector => {
  const elem = document.querySelector(selector);
  if (elem) elem.remove();
});

// HTML
['#block-werbe-horizontal-120', '#block-werbe-vertikal-240'].forEach(selector => {
  const elem = document.querySelector(selector);
  if (elem) elem.remove();
});


// HABR
['.tm-layout-sidebar__ads', '.tm-layout-sidebar', '.tm-page__sidebar', '.tm-adfox-banner__container'].forEach(selector => {
  const elem = document.querySelector(selector);
  if (elem) elem.remove();
});

// ONLINE
['#qwerty_wrap', '.adv_block_top', '.lblock', '.undervideoadv'].forEach(selector => {
  const elem = document.querySelector(selector);
  if (elem) elem.remove();
});

// In Yandex video player
const $viewerContent = document.querySelector('.Viewer-Content');
$viewerContent.style.display = 'flex';
$viewerContent.style.flexDirection = 'column';
