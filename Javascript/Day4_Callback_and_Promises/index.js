///// Callbacks  /////

// Example -
setTimeout(() => {
  console.log("Done"); // give a function to setTimeout,
}, 1000); // You’re saying: “Call this function later.”

// Callback hell
getUser(id, (user) => {
  getOrders(user, (orders) => {
    getPayment(orders, (payment) => {
      ship(payment, () => {
        console.log("done");
      });
    });
  });
});

// Error handling
doSomething((err, result) => {
  if (err) {
    // handle
  } else {
    doAnother((err2) => {
      if (err2) {
        // handle again
      }
    });
  }
});

/// Promises in Javascript -

// Example -
const p = new Promise((resolve, reject) => {
  // “Here is a promise.
  setTimeout(() => {
    // It is pending now.
    resolve("Done");  
    // After 1 second, it will be fulfilled with the value 'Done'.”        
  }, 1000);
});



// Promise {
//   state: pending | fulfilled | rejected
//   value: future result OR error
//   handlers: then / catch / finally
// }


