
/////// Most Asking Interview Question in Javascript ///////

///  What will be the output of this    //

console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise done");
});

console.log("End")





//// Output ////
// Start
// End
// Promise done
// Timer done





