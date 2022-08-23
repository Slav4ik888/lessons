// ==========  NODES ========== //



const startBtn = document.querySelector(`#start`);
const screens = document.querySelectorAll(`.screen`);
const timeList = document.querySelector(`#time-list`);
const timeEl = document.querySelector(`#time`);
const boardEl = document.querySelector(`#board`);



// ======== VARIABLES ======== //


let time = 30;
let score = 0;
let timerInt = null;
const colors = [`pink`, `green`, `gyan`, `#e74c3c`, `#8e44ad`, `#3498db`, `#e67e22`, `#2ecc71`];


// ======== LISTENERS ======== //



startBtn.addEventListener(`click`, (e) => {
  e.preventDefault();

  screens[0].classList.add(`up`);
});


timeList.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`time-btn`)) {
    time = parseInt(+e.target.getAttribute(`data-time`));
    screens[1].classList.add(`up`);
    startGame();
  }
});


board.addEventListener(`click`, e => {
  if (e.target.classList.contains(`circle`)) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});


// ======== FUNCTIONS ======== //


const setTime = (sec) => `0${sec}`.slice(-2);
const showTimer = (sec) => timeEl.innerHTML = `00:` + setTime(sec);


function startGame() {
  createRandomCircle();
  showTimer(time);
  timerInt = setInterval(decreaseTime, 1000);
}


function decreaseTime() {
  if (time === 0) {
    finishGame();
  }
  else {
    let current = --time;
    showTimer(current);
  }

}


function finishGame() {
  clearInterval(timerInt);
  // timeEl.parentNode.remove();
  timeEl.parentNode.classList.add(`hide`);
  board.innerHTML = `<h1>Ваш счёт: <span style="color: #649dd6;">${score}</span></h1> `;
}


function createRandomCircle() {
  const circle = document.createElement(`div`);
  const size = getRandomNumber(5, 20);
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add(`circle`);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = getRandomColor();

  board.append(circle);
}


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// ========   DEV   ======== //

// screens[0].classList.add(`up`);
// screens[1].classList.add(`up`);
// timeEl.innerHTML = `00:${time}`;