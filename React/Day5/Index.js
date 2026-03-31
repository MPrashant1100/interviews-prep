

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => 
        setCount(count + 1)}>
            Click
      </button>
      <Child onClick={handleClick} />
    </>
  );
}





const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);