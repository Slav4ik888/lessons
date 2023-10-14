
/**
 * GetNames тип для извлечения набора ключей
 * @template FromType тип - источник ключей
 * @template KeepType критерий фильтрации
 * @template Include  признак для указания как интерпретировать критерий фильтрации. В случае false - инвертировать результат для KeepType  
 */
type GetNames<FromType, KeepType = any, Include = true> = {
  [K in keyof FromType]:
    FromType[K] extends KeepType
      ? Include extends true 
        ? K : never
      : Include extends true
        ? never : K
}[keyof FromType];

// Пример использования
class SomeClass {

  firstName: string;
  lastName: string;
  age: number;
  count: number;
  
  constructor () {
    this.firstName = 'Slava';
    this.lastName = 'Korzan';
    this.age = 20;
    this.count = 1111;
  }

  getData(): string {
      return "dummy";
  }
}

// be: "firstName" | "lastName"
type StringKeys = GetNames<SomeClass, string>;

// be: "age" | "count"
type NumberKeys = GetNames<SomeClass, number>;

// be: "getData"
type FunctionKeys = GetNames<SomeClass, Function>;

// be: "firstName" | "lastName" | "age" | "count"
type NonFunctionKeys = GetNames<SomeClass, Function, false>;



// --------------------------------------------------------------------------------



type AdminAction = "CREATE" | "ACTIVATE";

class NeverError extends Error {
    // если дело дойдет до вызова конструктора с параметром - ts выдаст ошибку
    constructor(value: never) {
        super(`Unreachable statement: ${value}`);
    }
}

class ActionEngine {
    doAction(action: AdminAction) {
        switch (action) {
            case "CREATE":
                // логика здесь
                return "CREATED";
            case "ACTIVATE":
                // логика здесь
                return "ACTIVATED";
            default:
                throw new NeverError(action);
                //                   ^ контролирует здесь что все варианты в switch блоке определены.
        }
    }
}
