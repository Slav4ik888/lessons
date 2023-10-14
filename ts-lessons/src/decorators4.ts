
  
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = `http://www.....`;
  }
}
 
 
@reportableClassDecorator
class BugReport {
  type = `report`;
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport(`Needs dark mode`);
console.log('bug type: ', bug.type);
console.log('bug title: ', bug.title);


function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  }
}


class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x
  }

  @configurable(false)
  get y() {
    return this._y
  }
}
