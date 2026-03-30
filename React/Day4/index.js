

function App() {
  const [count, setCount] = useState(0);

  const result = expensiveCalculation(count);

  return (
    <>
      <button onClick={() => 
        setCount(count + 1)}
        >
         Click
      </button>
      <p>{result}</p>
    </>
  );
}


const result = useMemo(() => {
  return expensiveCalculation(count);
}, [count]);