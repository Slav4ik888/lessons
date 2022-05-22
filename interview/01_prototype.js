const person = new Object({
  name: `Slava`,
  age: 41,
  greet: function () {
    console.log(`Greet!`, this.name);
  }
});


Object.prototype.sayHello = function () {
  console.log(`Hello!`);
}

// person будет прототипом для fedya
const fedya = Object.create(person);
fedya.name = `Fedya`;

// const str = `String I am`;
const str =  new String(`String I am`);
  