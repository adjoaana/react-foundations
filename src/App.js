import { useState } from "react";

function Greeting(props) {
  return (
    <div>
      <h1> Hello {props.name}</h1>
      <p>Welcome to our Counter App</p>
    </div>
  );
}
function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Orange"];
  const [count, setCount] = useState(0);
  //count is the current state value and setCOunt is the function to update teh state and the useState is what you need to use to update it and is currently set to whatever is in teh ()

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <Greeting name="Adjoa" />
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
