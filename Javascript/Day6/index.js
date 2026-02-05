
// Debouncing in Javascript 
// Inside the Debounce Engine:

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);  // cancel old timer
    timer = setTimeout(() => {
      fn.apply(this, args);  // run after delay
    }, delay);
  };
}
