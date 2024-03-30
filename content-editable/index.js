
window.addEventListener('selectstart', (e) => {
  console.log('selectstart: ', e);
  const list = document.querySelectorAll('[contenteditable = true]');
  console.log('list: ', list);

  list.forEach(item => {
    item.setAttribute('contenteditable', false);
  });
});

window.addEventListener('click', (e) => {
  console.log('click: ', e);
  const list = document.querySelectorAll('[contenteditable = false]');
  console.log('list: ', list);

  list.forEach(item => {
    item.setAttribute('contenteditable', true);
  });
});

window.addEventListener('selectionchange', (e) => {
  console.log('selectionchange: ', e);
});
