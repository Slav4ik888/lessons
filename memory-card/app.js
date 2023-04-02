`use strict`;

const cards = document.querySelectorAll(`.memory-card`);

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;

  this.classList.add(`flip`);

  if (!hasFlippedCard) {
    // console.log("Первая карта");
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  if (this === firstCard) return;

  // console.log(`Вторая карта`);
  secondCard = this;
  checkForMatch();

};

function disabledCard() {
  // console.log(`Скрываем`);
  firstCard.removeEventListener(`click`, flipCard);
  secondCard.removeEventListener(`click`, flipCard);
  
  resetBoard();
};

function unFlipCards() {
  // console.log(`Переворачиваем обратно`);
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove(`flip`);
    secondCard.classList.remove(`flip`);
    
    resetBoard();
  }, 1500)

};

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // console.log(`Совпадение`);
    disabledCard();
  } else {
    // console.log(`Не совпадение`);
    unFlipCards();
  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
})();


cards.forEach(card => card.addEventListener(`click`, flipCard));