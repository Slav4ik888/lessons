const container = document.querySelector(`.container`);

const downButton = document.querySelector(`.down-button`);
const upButton = document.querySelector(`.up-button`);

const sidebar = document.querySelector(`.sidebar`);
const mainSlide = document.querySelector(`.main-slide`);
const slidesCount = mainSlide.querySelectorAll(`div`).length;


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIdx = 0;

upButton.addEventListener(`click`, () => {
  changeSlide(`up`);
});
downButton.addEventListener(`click`, () => {
  changeSlide(`down`);
});


document.addEventListener(`keydown`, e => {
  if (e.key === `ArrowUp`) changeSlide(`up`);
  if (e.key === `ArrowDown`) changeSlide(`down`);
});


function changeSlide(direction) {
  if (direction === `up`) {
    activeSlideIdx++;
    if (activeSlideIdx === slidesCount) activeSlideIdx = 0;
  }
  else if (direction === `down`) {
    activeSlideIdx--;
    if (activeSlideIdx < 0) activeSlideIdx = slidesCount - 1;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
}


