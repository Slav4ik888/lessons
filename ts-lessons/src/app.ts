// tsc --init // Создаёт конфиг
// tsc --watch // Следит за обновлениями

function show(data: string, _?: number) {
  const message = `String`;
  console.log(data);
}
show(`tsc`);



function multyple(a: number, b: number) {
  if (a && b) return a * b;

}


// GENERICS

const cars: Array<string> = [`Hundai`, `Mesr`];

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve(`Promise resolved`)
  }, 2000);
});

promise.then(data => {
  console.log('data: ', data);
});

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: `Slava` }, { age: 40 });
const merged2 = mergeObjects({ model: `Audi` }, { year: 2016 });
const merged3 = mergeObjects({ first: 'aaa' }, { second: 'bbb' });

console.log('merged: ', merged.age);
console.log('merged2: ', merged2.model);
console.log('merged3: ', merged3);

// ===================================

interface ILength {
  length: number;
};

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  }
}

console.log(`withCount: `, withCount(`Hello my darling!`));
console.log(`withCount: `, withCount([`Hello my darling!`]));
console.log(`withCount: `, withCount({ length: 20 }));

// ===================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  
  return obj[key];
}

const person = {
  name: `Slava`,
  age: 40,
};

console.log('getObjectValue: ', getObjectValue(person, `name`));
console.log('getObjectValue: ', getObjectValue(person, `age`));
// console.log('getObjectValue: ', getObjectValue(person, `job`)); // No

// ===================================

class Collection<T extends string | number | boolean> {
  constructor(private _items: T[] = []) { }
  
  add(item: T) {
    this._items.push(item)
  }
  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }
  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>([`Slava`, `today`, `learn`, `Type script`]);
strings.add(`!`);
strings.remove(`today`);
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(1);
console.log(numbers.items);

// const objs = new Collection([{ a: 2 }, { b: 3 }]);
// objs.remove({ b: 3 });
// console.log(objs.items);

// ===================================

interface Car {
  model: string;
  year: number;
}

function createAndValidatear(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if (model.length > 3) car.model = model;

  if (year > 2000) car.year = year;

  return car as Car;
}

// ===================================

const cars2: Readonly<Array<string>> = [`Audi`, `Toyota`];
// cars2.shift()

const toyota: Readonly<Car> = {
  model: `Toyota`,
  year: 2020,
};

// toyota.model = `Ferrari`;
