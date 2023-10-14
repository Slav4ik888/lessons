/// <reference path="form-namespace.ts" />

namespace NSForm {
  class MyForm {
    private type: FormType = `inline`;
    private state: FormState = `active`;

    constructor(public email: string) {
    }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  export const form = new MyForm(`korzan.va@mail.ru`);
  console.log('form: ', form);
}

console.log('NSForm: ', NSForm.form);