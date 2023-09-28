import Toc from './toc.js';

console.log('Start!!!!!');
// An instance with default settings
let toc = new Toc('[data-toc]');


setTimeout(() => toc.destroy(), 2000);
setTimeout(() => toc.render(), 4000);
// setTimeout(() => toc.destroy(), 2000);


// Another one, scoped to a different element
// let toc2 = new Toc('#toc-two', {
// 	level: '#some-elem h3',
// 	listClass: 'list-inline'
// });
