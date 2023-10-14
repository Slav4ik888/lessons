
// const log = logger(`TS`);


interface Person {
  name: string,
  id: number,
}

//
// The Discriminated Unions
//

interface Car {
  type: `car`;
  passengers: [Person] | [Person, Person] | [Person, Person, Person] |
  [Person, Person, Person, Person];
}
interface Moto {
  type: `moto`;
  passengers: [Person] | [Person, Person];
}
type Vehicule = Car | Moto;

let v: Vehicule | undefined;

const userSlava: Person = {
  name: `Slava`,
  id: 1,
}
const userRegina: Person = {
  name: `Regina`,
  id: 2,
}


const compare = (v: Vehicule) => {
  switch (v.type) {
    case `moto`:
      v.passengers = [userSlava, userRegina];
      break;
  
    case `car`:
      v.passengers = [userSlava];
      break;
  
    default: break;
  }
};


//
// Mapped types
//

type CityShortFormat = string | number;
interface User {
  firstName: string;
  lastName: string;
  city: CityShortFormat;
  telegrammHandle: string;
}
// Когда нам нужен тот же User но со всеми необязательными полями
// type LocalUser = { [K in keyof User]?: User[K] }
// type A = keyof User;

type Partial<T> = { [P in keyof T]?: T[P] }
type LocalUser = Partial<User>;

//
// Mapped types
//

// Исключает из типа T всё что есть в типе U
type Exclude<T, U> = T extends U ? never : T;
type B = Exclude<keyof User, `lastName`>;
// const bb: B = {
//   firstName: `Slava`,
//   city: `irkutsk`,
//   telegrammHandle: `no`,
// }
// log(`Exclude: `, bb);


//
//
// 

class UserAccount {
  public name: string;
  private _id: number;

  constructor(name: string) {
    this.name = name;
    this._id = Math.floor(Math.random() * 1000);
  }

  get id() {
    return this._id;
  }
}

function greater(person: Person) {
  return `Hello ${person.name} with Id = ${person.id}`;
}
let user1 = new UserAccount("Slava");

console.log(`greater: `, greater(user1));


// ------ //  

console.log('user1: ', user1);

class MyPoint {
  
  private _x: number;
  public _y: string;

  constructor (x:number = 0, y: string = "Hello") {
     this._x = x;
     this._y = y;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
  }

  draw(): void {
    //обратите внимание на то, что со свойством x мы работаем через this
    console.log("X is: " + this._x);
    console.log("Y is: " + this._y);
  }
  getDistanceBtw(another: number): string {
  //посчитать и вернуть расстояние
    return this._x + this._y + another;
  }
}

let message = 'Hello Typescript';
console.log("", message);


let myPoint = new MyPoint(1, "Give");
myPoint.draw();
console.log("", myPoint.getDistanceBtw(10));

myPoint.x = 120;
console.log("", myPoint.x);

/* - - - - - - - - - */

interface BaseConfig { version: string; name: string; }
interface DynamicConfig { fromFile: string; }
interface StaticConfig { configuration: object; }
type Configuration = (StaticConfig | DynamicConfig) & BaseConfig;

const configStatic: Configuration = {
   version: '1.0',
   name: 'myDynamicConfig',
   fromFile: './config.json'
}; // this is a DynamicConfig


const configDynamic: Configuration = {
   version: '1.0',
   name: 'myStaticConfig',
   configuration: { test: "test" }
} // this is a StaticConfig


console.log(`configStatic: `, configStatic);
console.log(`configDynamic: `, configDynamic);
