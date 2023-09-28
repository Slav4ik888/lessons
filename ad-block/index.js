
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


/***************************************************
 * Пробы...
 ***************************************************/
const selectors = document.querySelectorAll('video');

if (selectors) {
  for (const item of selectors) {
    console.log(item);
  }
}

// 
