
// https://vsegda-pomnim.com/zrelye/

document.querySelector('#qwerty_wrap').remove();

const lis = document.querySelectorAll('li');

let count = 0;
const PAUSE = 200;

for (let i = 0; i <= lis.length; i++) {

  if (lis[i]?.getAttribute('rel')) {
    if (lis[i]?.childNodes?.[1]?.childNodes?.[0]) {
      setTimeout(() => {
        console.log(i);
        console.log(lis[i].childNodes[1].childNodes[0]);

        count++;
        lis[i].childNodes[1].childNodes[0].click();

      }, PAUSE * i);

    }
  }
}

// https://rusdevka.name/zhenshiny/7088-zhenschiny-hotjat-ebli-porno-68-foto.html
document.querySelector('#aagikw').remove();

let count = 0;
const PAUSE = 200;

Array.from(document.querySelectorAll('img'))
  .filter(img => img.naturalWidth > 100 && img.naturalHeight > 100) // Игнорируем иконки
  .forEach((img, index) => {
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `image_${index + 1}.png`; // PNG для сохранения качества
        a.click();
        URL.revokeObjectURL(a.href);
      }, 'image/png');

    }, PAUSE * index);
  });


// https://girla.me/11341-retro-pizda-zreloj-48-foto.html
document.querySelector("._4KjPzfFqnPyBgIgiXkX WUu09DCcg0kLBfHD9jrH      ").remove();
document.querySelector('#e2a6889e08').remove();



let count = 0;
const PAUSE = 200;
function getRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
const getRandomEngLitera = () => {
  const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return eng[getRandomNumber(0, 25)];
};
const getRandomLetters = (n) => {
  let str = '';
  for (let i = 0; i < n; i++) { str += getRandomEngLitera(); }
  return str;
};


Array.from(document.querySelectorAll('img'))
  .filter(img => img.naturalWidth > 100 && img.naturalHeight > 100) // Игнорируем иконки
  .forEach((img, index) => {
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${getRandomLetters(7)}.png`; // PNG для сохранения качества
        a.click();
        URL.revokeObjectURL(a.href);
      }, 'image/png');

    }, PAUSE * index);
  });
