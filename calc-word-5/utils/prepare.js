// import { writeDataToFile } from './utils/files.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);



// import d from './data/singular.js'
// const filepath = path.join(__dirname, './data/', 'arr.json');
// const arr = d.data.split('\r\n');
// writeDataToFile(filepath, JSON.stringify(arr));


/** Сохраняем массив длиной в 5 символов */
// const isValid5Length = (str) => str.length === 5;
// const filepath = path.join(__dirname, './data/', 'arr.json');
// fs.readFile(filepath, { encoding: 'utf-8' }, function (err, data) {
//   if (! err) { 
//     console.log('ReadDataFromFile Ok');
//     const dataParsed = JSON.parse(data);

//     const arr5 = dataParsed.filter(item => isValid5Length(item));
//     console.log('arr5: ', arr5);

//     writeDataToFile(path.join(__dirname, './data/', 'arr5.json'), JSON.stringify(arr5));
//   }
//   else {
//     console.log('ReadDataFromFile', err);
//   }
// });
