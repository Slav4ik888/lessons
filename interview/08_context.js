const person = {
  surname: `Stark`,
  knows: function (what, name) {
    console.log(`You ${what} knows, ${name} ${this.surname}`);
  }
};

const john = {
  surname: `Snow`
};

person.knows(`all`, `Bran`);
    
person.knows.call(john, `no one`, `John`);
person.knows.apply(john, [`no one`, `John`]);
person.knows.call(john, ...[`no one`, `John`]);

const bound = person.knows.bind(john, `no one`, `John`);
bound();

// ===

function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const elena = new Person(`Elena`, `40`);

// === Явная передача контекста

function logThis() {
  console.log(this);
}

const obj = { num: 42 };
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

// === Не явная передача контекста
const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  }
};

animal.logThis()
// ===

function Cat(color) {
  this.color = color;
  console.log(`This`, this);
  (() => console.log(`Arrow this`, this))()
}

new Cat(`red`);
