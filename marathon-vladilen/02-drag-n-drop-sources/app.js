
const item = document.querySelector(`.item`);
const placeholders = document.querySelectorAll(`.placeholder`);

let textContent = ``;

item.addEventListener(`dragstart`, dragStart);
item.addEventListener(`dragend`, dragEnd);

for (const placeholder of placeholders) {
  placeholder.addEventListener(`dragover`, dragover);
  placeholder.addEventListener(`dragenter`, dragenter);
  placeholder.addEventListener(`dragleave`, dragleave);
  placeholder.addEventListener(`drop`, dragdrop);
}

function dragStart(e) {
  const target = e.target;
  target.classList.add(`hold`);
  textContent = target.textContent;
  target.textContent = `Меня тащят`;
  setTimeout(() => target.classList.add(`hide`));
}

function dragEnd(e) {
  const target = e.target;
  target.className = `item`;
  target.textContent = textContent;

}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add(`hovered`);
}

function dragleave(e) {
  e.target.classList.remove(`hovered`);
}

function dragdrop(e) {
  e.target.append(item);
  e.target.classList.remove(`hovered`);
}