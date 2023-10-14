"use strict";
var NSForm;
(function (NSForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = `inline`;
            this.state = `active`;
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    NSForm.form = new MyForm(`korzan.va@mail.ru`);
    console.log('form: ', NSForm.form);
})(NSForm || (NSForm = {}));
console.log('NSForm: ', NSForm.form);
//# sourceMappingURL=namespaces.js.map