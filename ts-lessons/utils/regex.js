const log = require('../utils/log')(`regexp`);

let matchesNull = "JavaScript".match(/HTML/); // = null
let matchesArray = "JavaScript".match(/HTML/) || []; // = []

// без флага g
// log(`без флага g: `, "We will, we will".replace(/we/i, "I") ); // I will, we will

// с флагом g
//  log(`с флагом g: `, "We will, we will".replace(/we/ig, "I") ); // I will, I will

// log(` - ` , "Люблю HTML CSS".replace(/HTML/, "$& и JavaScript") )
// log(` - ` , "Люблю HTML CSS".replace(/HTML/, "$` и JavaScript") )
// log(` - ` , "Люблю HTML CSS".replace(/HTML/, "$' и JavaScript") )
// log(` - ` , "Люблю HTML CSS".replace(/HTML/, "$$ и JavaScript") )
let str = "Я ЛюБлЮ JavaScript";
let regexp = /люблю/i;
log(` - `, regexp.test(str) );

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const constraints = {
  fr: ['^(F-)?\\d{5}$', `France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012`],
  de: ['^(D-)?\\d{5}$', `Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345`],
  ru: ['\\d{6}', `Russia ZIPs must have exactly 6 digits: e.g. 123456`],
  ch: ['^(CH-)?\\d{4}$', `Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950`],
  nl: ['^(NL)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$', ``],
};

const constraint = new RegExp(constraints.fr[0], ``);
const targetRu = `664056`;
const targetFr = `F-64051`;

log(`${targetFr} - `, constraint.test(targetFr) );


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const phone = `+7(950)11-97-888`;
const newPhone1 = phone.match(/\d/g).join(``);
const newPhone2 = phone.replace(/\D/g, ``);

log('phone.match(/\\d/g).join(``) -', newPhone1);
log('phone.replace(/\\D/g, ``) -', newPhone2);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
