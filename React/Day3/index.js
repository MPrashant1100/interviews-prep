
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




function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => 
        setCount(count + 1)}>
          Click
      </button>
      <Child />
    </>
  );
}


const Child = React.memo(() => {
  console.log("Child render");
  return <div>Child</div>;
});















