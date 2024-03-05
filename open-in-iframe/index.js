

const
  iframe = document.querySelector('#iframe'),
  input = document.querySelector('#input'),
  button = document.querySelector('#button');


input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log(input.value);
    iframe.width = '100%';
    iframe.src = input.value;
  }
});

console.log('iframe: ', iframe);


// button.addEventListener('click', (e) => {
//   const text = input.value;
//   console.log('input: ', input);
//   console.log('text: ', text);
// });
