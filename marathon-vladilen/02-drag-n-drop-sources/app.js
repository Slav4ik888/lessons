
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

let textContent = '';

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragStart(e) {
  console.log('dragStart');
  const target = e.target;
  target.classList.add('hold');
  textContent = target.textContent;
  target.textContent = 'Меня тащят';
  setTimeout(() => target.classList.add('hide'));
}

function dragEnd(e) {
  console.log('dragEnd');
  const target = e.target;
  target.className = 'item';
  target.textContent = textContent;

}

function dragover(e) {
  console.log('dragover');
  e.preventDefault();
}

function dragenter(e) {
  console.log('dragenter');
  e.target.classList.add('hovered');
}

function dragleave(e) {
  console.log('dragleave');
  e.target.classList.remove('hovered');
}

function dragdrop(e) {
  console.log('dragdrop');
  e.target.append(item);
  e.target.classList.remove('hovered');
}
