import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** Записывает данные по указанному пути */
export function writeDataToFile(filepath, data) {
  fs.writeFile(filepath, data, function (err) {
    if (! err) { 
      console.log('WriteDataToFile Ok');
    }
    else {
      console.log('WriteDataToFile', err);
    }
  });
};



/** Читает singular.txt и сохраняет в singular.json */
export function transformFile() {
  const
    downloadPath = path.join(__dirname, '../data/', 'singular.txt'),
    uploadPath = path.join(__dirname, '../data/', 'singular.json');

  console.log('uploadPath: ', uploadPath);

  fs.readFile(downloadPath, { encoding: 'utf-8' }, function (err, data) {
    if (! err) { 
      console.log('ReadDataFromFile Ok');
      writeDataToFile(uploadPath, JSON.stringify(data));
    }
    else {
      console.log('ReadDataFromFile', err);
    }
  });
};
