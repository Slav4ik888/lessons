"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log(constructor);
}
function Log2(target, propName) {
    console.log(target);
    console.log('propName: ', propName);
}
function Log3(target, propName, descriptor) {
    console.log(target);
    console.log('propName: ', propName);
    console.log('descriptor: ', descriptor);
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Component Name: ${this.name}`);
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "componentName", null);
__decorate([
    Log3
], Component.prototype, "logName", null);
Component = __decorate([
    Log
], Component);
function ComponentDec(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component Name: ${this.name}`);
    }
};
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    ComponentDec({
        selector: `#card`,
        template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">CardComponent</span>
      </div>
    </div>
  `
    })
], CardComponent);
const card = new CardComponent(`My Card Component`);
const btn = document.querySelector(`#btn`);
btn.addEventListener(`click`, card.logName);
;
const validators = {};
function Required(target, propName) {
    console.log('Form: ', target);
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: `required` });
}
class Form {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
__decorate([
    Required
], Form.prototype, "password", void 0);
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig)
        return true;
    let isValid = true;
    console.log(`Object.keys(objConfig):`, Object.keys(objConfig));
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === `required`) {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
function showValid(form) {
    if (validate(form)) {
        console.log('Valid form: ', form);
    }
    else {
        console.log(`Validation error: `, form);
    }
}
const form1 = new Form(`korzan.va@mail.ru`, `123`);
const form2 = new Form(``);
console.log(`validators: `, validators);
showValid(form1);
showValid(form2);
//# sourceMappingURL=decorators.js.map