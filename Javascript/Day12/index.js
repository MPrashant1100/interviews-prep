

// Javascript Interview Trap Question

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output - 333


for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output - 012

