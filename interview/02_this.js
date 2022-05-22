function hello() {
  console.log(`Hello`, this);
}

const person = {
  name: `Slava`,
  age: 17,
  sayHello: hello,
  sayHelloWindow: hello.bind(document), // window)
  logInfo: function (job, phone) {
    console.group(`${this.name} info: `);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    
    console.groupEnd();
  }
}
 
const alex = {
  name: `Alex`,
  age: 23
};


// person.logInfo.bind(alex)(`Frontend`, `+7-900-111-22-33`);
// const fnAlexInfoLog = person.logInfo.bind(alex, `Frontend`, `+7-900-111-22-33`);
// fnAlexInfoLog();
// fnAlexInfoLog(`Frontend`, `+7-900-111-22-33`);

// person.logInfo.call(alex, `Frontend`, `+7-900-111-22-33`);
person.logInfo.apply(alex, [`Frontend`, `+7-900-111-22-33`]);

// =======

const arr = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
  return this.map(item => item * n)
}

console.log(arr.multBy(5));
