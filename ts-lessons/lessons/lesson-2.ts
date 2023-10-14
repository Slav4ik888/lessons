const str: string = "Hello Slava";

function sayMyName(name: string): void {
  console.log('name: ', name);
};
sayMyName(str);

function throwError(message: string): never {
  throw new Error(message)
}

// Type
type Login = string | number;

const login: Login = `Admin`;
const login2: Login = 111;


interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  }
}

const react1: Rect = {
  id: `zsd`,
  size: {
    width: 100,
    height: 20
  },
  color: `#ccc`,
};

const rect2: Rect = {
  id: `123`,
  size: {
    width: 100,
    height: 20
  },
  color: `#ccc`,
};

rect2.color = `lsdkfj`;

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ================================================

interface RectWithArea extends Rect {
  getArea: () => number;
};

const rect5: RectWithArea = {
  id: `lsdkjf`,
  size: {
    width: 100,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}

// ================================================

interface IClock {
  time: Date;
  setTime(data: Date): void;
};

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date
  }
}

// ================================================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: `1px solid black`,
  marginTop: `2px`,
}

// ================================================

enum Membership {
  Simple, // 0
  Standart, // 1
  Premium
}

const membership = Membership.Simple;
const memReverse = Membership[2];

console.log('membership: ', membership);
console.log('memReverse: ', memReverse);

function add(a: number, b: number): number {
  return a + b;
}


interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWidthDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWidthDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) return { x: undefined, y: undefined }
  if (a && !b) return { x: a, y: undefined, default: a.toString() }

  return { x: a, y: a }
}

console.log(`empty`, position());
console.log(`One`, position(42));
console.log(`Two`, position(42, 58));

// ================================================


class TypeScript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly numOfWheels: number = 4

  constructor(readonly model: string) {}


}

// ================================================


class Animal {
  protected voice: string = ``;
  public color: string = `black`;
  private go() {
    console.log(`Go!`);
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat()

// Абстрактные классы

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComp extends Component {
  render(): void {
    console.log(`AppComp on render`);
  }
  info(): string {
    return `sldkfjlsdkjf`
  }
}

const app = new AppComp();
console.log(app.info())

// 

function strip(x: string | number) {
  if (typeof x === `number`) {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = `resp header`;
  result = `resp result`;
}

class MyError {
  header = `error header`;
  message = `error result`;
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return { info: res.header + res.result }
  }
  else {
    return { info: res.header + res.message }
  }
}

// 

type AlertType = `success` | `danger` | `warning`;

function setAlertType(type: AlertType) {
  ///ssss
}

setAlertType(`success`);
// setAlertType(`def`); error


// GENERIC

const arrOfNum: Array<number> = [1, 1, 2, 3, 5, 8];
const arrOfStr: Array<string> = [`1`, `1`, `2`, `3`, `5`, `8`];

function reverse<T>(arr: Array<T>): T[] {
  return arr.reverse()
}

console.log('reverse(arrOfNum): ', reverse(arrOfNum));
console.log('reverse(arrOfStr): ', reverse(arrOfStr));

// 

interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person;

const myName: PersonKeys = `name`;

// 

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

// Исключить
type UserKeysNoMeta1 = Exclude<keyof User, `_id` | `createdAt`> // `name` | `email`
// Забрать
type UserKeysNoMets2 = Pick<User, `name` | `email`>;

let u1: UserKeysNoMeta1 = `name`;
// u1 = `_id`; // Error
