
const fs = require("fs");

// async
fs.readFile("file.txt", () => {      // RUNS LATER
  console.log("File read");
});

console.log("Done");

// Output //
// Done
// File Read

// sync
const data = fs.readFileSync("file.txt"); // blocks
console.log("Done");

// output is like //
// File Read
// Done