// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name;
  this.color = color;

}

Cat.prototype.voice = function () {
  
  console.log(`Cat ${this.name} says myau`);
}

const cat = new Cat(`Baddy`, `blue`);
cat.voice();

console.log('Cat: ', Cat);
console.log('Cat.prototype: ', Cat.prototype);
console.log('cat: ', cat);
console.log('cat.__proto__: ', cat.__proto__);
console.log('cat.__proto__ == Cat.prototype: ', cat.__proto__ == Cat.prototype);

// Own values

function Person() { }
Person.prototype.legs = 2;
Person.prototype.skin = `white`;

const person = new Person();
person.name = `Slava`;
console.log('person.legs: ', person.legs);
console.log(`skin` in person);

console.log(person.hasOwnProperty(`name`));
console.log(person.hasOwnProperty(`skin`));

// Object.create

let proto = { year: 2022 };
const myYear = Object.create(proto);
console.log('myYear: ', myYear.year);
console.log('myYear: ', myYear.hasOwnProperty(`year`));
console.log(myYear.__proto__ === proto);

proto.year = 2019;
console.log(myYear.year);

proto = { year: 999 };
console.log('proto: ', proto.year);
console.log(myYear.year);
