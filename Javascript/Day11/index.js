// Type coercion 

console.log(Boolean("false"))
console.log(Boolean(false))
console.log(String(55))
console.log([] + {}) 
console.log("5" - "3")

console.log("5" + 2);
// output = 52
 
console.log("5" - 2);
// output = 3

// Manual conversion
Number("5");   // 5
String(5);     // "5"
Boolean(1);    // true

// Falsy Values
false
0
""
null
undefined
NaN


// // Most asked examples 
// [] + []          // ""
// [] + {}          // "[object Object]"
// {} + []          // 0 (parsing reason)
// null + 1         // 1
// undefined + 1    // NaN