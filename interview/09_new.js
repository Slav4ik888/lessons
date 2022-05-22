function Cat(color, name) {
  this.color = color;
  this.name = name;
}

const cat = new Cat(`Black`, `CAT`);
console.log('cat: ', cat);

function myNew(constructor, ...args) {
  console.log('args: ', args);
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  return constructor.apply(obj, args) || obj;
}

const cat2 = myNew(Cat, `blacck`, `cat`);
console.log('cat2: ', cat2);
