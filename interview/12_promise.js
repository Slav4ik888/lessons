// 1 example

// console.log(`Сидим на диване.`);

// const q = new Promise((resolve, reject) => {
//   console.log(`Вася сходи за молоком!`);
//   const isMilk = Math.round(Math.random());

//   if (isMilk) resolve(`Я смог купить молоко!`);
//   else reject(`Молоко не купил, не было!`);

// });

// q
//   .then((answer) => {
//     console.log(`Ну как, купил?`);
//     console.log(answer);
//   })
//   .catch((answer) => {
//     console.log(`Ну как, купил?`);
//     console.log(answer);
//   });

// console.log(`Закончили.`);

// 2 example
// console.log();
// console.log(`Start`);                                                           // 1

// setTimeout(() => console.log(`setTimeout 1`), 0);                               // 3
// Promise.resolve().then(() => console.log(`Promise 1`));                         // 5
// Promise.resolve().then(() => setTimeout(() => console.log(`setTimeout 2`), 0)); // 7
// Promise.resolve().then(() => console.log(`Promise 2`));                         // 4
// setTimeout(() => console.log(`setTimeout 3`), 0);                               // 6

// console.log(`Final`);                                                           // 2

// 3 example
const logger = () => {
  let count = 0;
  return (str) => {
    count++;
    console.log(`[${count}]:`, str);
  }
};
const log = logger();

console.log();
log(`Start`);  // 1

setTimeout(() => log(`setTimeout 1`), 0); // 10

const q = new Promise((resolve) => {
  log(`Promise 1`); // 2
  setTimeout(() => log(`setTimeout 2`)); // 11
  resolve();
});

for (let i = 0; i < 3; i++) {
  q.then(() => setTimeout(() => log(`setTimeout 3`))) // 12 13 14
}

q.then(() => log(`Promise 2`)); // 4

for (let i = 0; i < 5; i++) {
  q.then(() => log(`Promise 3`)) // 5 6 7 8 9
}

log(`Final`); // 3
