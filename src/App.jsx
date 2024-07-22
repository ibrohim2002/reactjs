import React from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const onChange = () => {
    setCount(count + 1);
  };

  const onChangePlus = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("effect 1");
  });

  useEffect(() => {
    console.log("effect 2");
  }, []);

  useEffect(() => {
    console.log("effect 3");
  }, [count]);

  useEffect(() => {
    console.log("effect 4");
  }, [count, count2]);

  return (
    <div>
      <h1>Hooks</h1>
      <h2>{count}</h2>
      <h2>{count2}</h2>
      <button onClick={onChange}>+</button>
      <button onClick={onChangePlus}></button>
    </div>
  );
};

export default App;
