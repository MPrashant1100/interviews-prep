
//Case 1
useEffect(() => {
  console.log("Run");
});



// Case 2
useEffect(() => {
  console.log("Run");
}, []);




// Case 3
useEffect(() => {
  setCount(count + 1);
}, [count]);