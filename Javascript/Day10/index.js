

// Prototypes and Prototype chain 

const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);

user.greet(); // Hello


// Normal Function

function add(a, b) {
  return a + b;
}

add(2, 3); // 5


// currying  
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(2)(3); // 5





// Example 
function multiply(a) { 
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);

double(5);  // 10
double(10); // 20












