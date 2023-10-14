"use strict";
function show(data, _) {
    const message = `String`;
    console.log(data);
}
show(`tsc`);
function multyple(a, b) {
    if (a && b)
        return a * b;
}
const cars = [`Hundai`, `Mesr`];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(`Promise resolved`);
    }, 2000);
});
promise.then(data => {
    console.log('data: ', data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: `Slava` }, { age: 40 });
const merged2 = mergeObjects({ model: `Audi` }, { year: 2016 });
const merged3 = mergeObjects({ first: 'aaa' }, { second: 'bbb' });
console.log('merged: ', merged.age);
console.log('merged2: ', merged2.model);
console.log('merged3: ', merged3);
;
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(`withCount: `, withCount(`Hello my darling!`));
console.log(`withCount: `, withCount([`Hello my darling!`]));
console.log(`withCount: `, withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: `Slava`,
    age: 40,
};
console.log('getObjectValue: ', getObjectValue(person, `name`));
console.log('getObjectValue: ', getObjectValue(person, `age`));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection([`Slava`, `today`, `learn`, `Type script`]);
strings.add(`!`);
strings.remove(`today`);
console.log(strings.items);
const numbers = new Collection([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(1);
console.log(numbers.items);
function createAndValidatear(model, year) {
    const car = {};
    if (model.length > 3)
        car.model = model;
    if (year > 2000)
        car.year = year;
    return car;
}
const cars2 = [`Audi`, `Toyota`];
const toyota = {
    model: `Toyota`,
    year: 2020,
};
//# sourceMappingURL=app.js.map