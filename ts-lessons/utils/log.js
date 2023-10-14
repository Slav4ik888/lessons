const {format} = require('util');

module.exports = (tag) => {
  return (message, data) => {
    console.log(format(`[${tag}] ${message}`, data))
  };
};

// module.exports = tag => {
//   return (message, ...data) => {
//     console.log(format(`[${tag}] ${message}`, data))
//   };
// };

// module.exports = function log(title, value) {
//   console.log(title, ' : ', value);
// }