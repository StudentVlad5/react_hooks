import { useState, memo, useCallback} from "react";
import "./App.css";

const ExpensiveComponent = memo(({ calculate }) => {
  console.log("ExpensiveComponent re-rendered");
  return <div>{calculate()}</div>;
});

function App() {
  const [count, setCount] = useState(0);

  // Use useCallback to avoid recalculating on each render
  const expensiveCalculation = useCallback(() => {
    console.log("Calculating...");
    return count * 1000; // Expensive computation
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveComponent calculate={expensiveCalculation} />
    </div>
  );
}

export default App;
