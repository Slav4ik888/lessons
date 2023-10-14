
interface ComponentDecorator {
  selector: string;
  template: string;
}


function DecorComponent(config: ComponentDecorator) {
  return function<T extends { new(...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)

        const $el = document.querySelector(config.selector)!;
        $el.innerHTML = config.template;
      }
    }
  }
}

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value; // the function we need is stored in Value 

  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this)
    }
  }
}

@DecorComponent({
  selector: `#card`,
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">CardComponent</span>
      </div>
    </div>
  `
})
class CardComponent {

  constructor(public name: string) {
  }

  @Bind
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}

const card = new CardComponent(`My Card Component`);

const $btn = document.querySelector(`#btn`);
// $btn?.addEventListener(`click`, card.logName.bind(card));
$btn?.addEventListener(`click`, card.logName);

// tsc --target ES5 --experimentalDecorators decorators2.ts