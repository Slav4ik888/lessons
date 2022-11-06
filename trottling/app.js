

function callback() {
  console.log('Движение мыши');
}

  
function throttle(callback, delay) {
  document.addEventListener('mousemove', throttleMouse ,false);

  let isThrottled = false;

  function throttleMouse() {
    if (isThrottled) return;

    setTimeout(() => {
      callback();
      isThrottled = false
    }, delay);

    isThrottled = true
  }
}

throttle(callback, 1000);
