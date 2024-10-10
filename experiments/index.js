
window.onload = function () {
  const growth = document.querySelector('.triangle-growth');
  growth.setAttribute('fill', '#02bf02');

  const fall = document.querySelector('.triangle-fall');
  fall.setAttribute('fill', '#cc0000');

  const unchangedRight = document.querySelector('.triangle-unchanged-right');
  unchangedRight.setAttribute('fill', '#434343');

  const unchangedLeft = document.querySelector('.triangle-unchanged-left');
  unchangedLeft.setAttribute('fill', '#434343');
};


// -----------------------------------------------------------------
const START_STR = '={';
const END_STR = '}';


function generateAlphabetSequence(count) {
  let result = START_STR;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = alphabet.length;

  for (let i = 0; i < count; i++) {
    let temp = '';
    let n = i;
    while (n >= 0) {
      temp = alphabet[n % length] + temp;
      n = Math.floor(n / length) - 1;
    }
    result += 'GET_SEGMENT(' + temp + '6);';
  }

  // Убираем последний символ ;
  result = result.slice(0, -1);
  result += END_STR;
  return result;
}

// ={GET_SEGMENT(A6);GET_SEGMENT(B6);GET_SEGMENT(C6);... GET_SEGMENT(AC6)}
// const sequence = generateAlphabetSequence(106);
// console.log(sequence);


function generateFF(count) {
  let result = START_STR;

  for (let i = 0; i < count; i++) {
    result += 'FF();';
  }

  // Убираем последний символ ;
  result = result.slice(0, -1);
  result += END_STR;
  return result;
}

// ={FF();FF();FF();FF();... FF()}
const sequence = generateFF(106);
console.log(sequence);
