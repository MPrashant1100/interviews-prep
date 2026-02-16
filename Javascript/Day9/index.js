


// // Shallow Copy

// let obj1 = {
//   name: "Prashant",
//   address: {
//     city: "Delhi",
//   },
// };

// let obj2 = { ...obj1 }; // shallow copy

// obj2.name = "Mishra";
// obj2.address.city = "Mumbai";

// console.log(obj1.name); // Prashant 
// console.log(obj1.address.city); // Mumbai 




// Deep Cloning 
let obj1 = {
  name: "Prashant",
  address: {
    city: "Delhi"
  }
};

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi 
















