// Декораторы вызываются в тот момент, когда определяется сам класс

function Log(constructor: Function) {
  console.log(`Log1`, constructor);
}

function Log2(target: any, propName: string | Symbol) {
  console.log(`Log2 target: `, target);
  console.log('Log2 propName: ', propName);
}

// 3й параметр descriptor потому что декоратор для Метода
function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(`Log3 target: `, target);
  console.log('Log3 propName: ', propName);
  console.log('Log3 descriptor: ', descriptor);
}


@Log
class Component {

  @Log2
  name: string;

  @Log3
  get componentName() {
    return this.name
  }

  constructor(name: string) {
    this.name = name
  }

  @Log3
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}