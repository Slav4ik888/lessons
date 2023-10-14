
type ValidatorType = Array<`required` | `email` | `minLength` | `maxLength`>;

interface ValidatorConfig {
  [nameOfClass: string]: {
    [validateField: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {};


// -------------   HELPERS   ------------- //


function addType<T>(arr: Array<T>, item: T) {
  if (!arr?.length) return [item];
  return [...arr, item] 
};


// -------------   DECORATORS   ------------- //


function Required(target: any, propName: string) {
  const className = target.constructor.name;
  const pn = validators[className]?.[propName];

  validators[className] = {
    ...validators[className],
    [propName]: addType(pn, `required`)
  }
}

function MinLength(target: any, propName: string) {
  const className = target.constructor.name;

  const pn = validators[className]?.[propName];

  validators[className] = {
    ...validators[className],
    [propName]: addType(pn, `minLength`)
  }
}


// -------------   VALIDATORS   ------------- //


function isPresent<T>(arr: Array<T>, type: T) {
  return arr.indexOf(type) !== -1
}

function validator(obj: any): boolean {
  const objConfig = validators[obj.constructor.name];
  let isValid = true;

  if (!objConfig) return isValid;

  Object.keys(objConfig).forEach(key => {
    const field = objConfig[key];

    if (isPresent(field, `required`))  isValid = isValid && !!obj[key]
    if (isPresent(field, `minLength`)) isValid = isValid && (obj[key]?.length > 5)
  });

  return isValid
}

const validate = (obj: any, name?: string) => {

  if (validator(obj)) {
    console.log(`Valid [${name}]: `, obj);
  }
  else {
    console.log(`Valid [${name}] error`);
  }
};


// -------------   CLASS   ------------- //


class Form {
  @Required
  public email: string | void;
  
  @Required @MinLength
  public password: string | void;

  constructor(email?: string, password?: string) {
    this.email    = email;
    this.password = password;
  }
}


// -------------   EXECUTE   ------------- //


const form1 = new Form(`korzan.va@mail.ru`, `12345`);
const form2 = new Form(`korzan.va@mail.ru`, `123456`);

validate(form1, `form1`);
validate(form2, `form2`);

// tsc --target ES5 --experimentalDecorators decorators2.ts