
const $input = document.querySelector('#inputId');
$input.value = 'document.addEventListener';
$input.select();
$input.setSelectionRange(9, 25);
$input.setRangeText('setRangeText', 9, 12, "end");

document.addEventListener('selectstart', (e) => {
  console.log('#1 selectstart: ', e);
  const isSel = isSelection();
  console.log('#1 isSel: ', isSel);

  // setContenteditable(false);
});


document.addEventListener('mouseup', (e) => {
  // console.log('#2 mouseup: ', e);
  const isSel = isSelection();
  console.log('#2 isSel: ', isSel);
  if (isSel) return setContenteditable(true);
});


document.addEventListener('selectionchange', (e) => {
  console.log('#3 selectionchange: ', e);
  const isSel = isSelection();
  console.log('#3 isSel: ', isSel);

  if (isSel) return setContenteditable(false);
});


/**
 * Отбирает все элементы с contenteditable противоположного "condition" (которое нужно назначить)
 * и назначает им "condition"
 */
function setContenteditable(condition) {
  const list = document.querySelectorAll(`[contenteditable = ${! condition}]`);

  setContenteditableToList(list, condition);
}


/** Set to all elements from list contenteditable "condition" */
function setContenteditableToList(list, condition) {
  list.forEach(item => {
    item.setAttribute('contenteditable', condition);
  });
}

/**
 * @returns есть ли выделение
 */
function isSelection() {
  // If isCollapsed = false = selected, true = not selected
  return ! document?.getSelection()?.isCollapsed;
}
//  window.getSelection().removeAllRanges();


// if (window.getSelection) {
//   var sel = window.getSelection();
//   sel.removeAllRanges();
//   var range = document.createRange();
//   range.setStart(d4, 0);
//   range.setEnd(d5, 1);
//   sel.addRange(range);
// }
// else if (document.body.createTextRange) {
//   var textRange = document.body.createTextRange();
//   textRange.moveToElementText(d4);
//   var textRange2 = textRange.duplicate();
//   textRange.moveToElementText(d5);
//   textRange.setEndPoint("EndToEnd", textRange2);
//   textRange.select();
// }
