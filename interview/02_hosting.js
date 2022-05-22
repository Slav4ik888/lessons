const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  
  (function (j) {
    setTimeout(function () {
    console.log(`fib[${j}] = ${fib[j]}`);
  }, 1000);
  })(i)
}


