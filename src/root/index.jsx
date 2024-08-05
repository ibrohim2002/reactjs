import React, { useReducer, useState } from "react";

const Root = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus": {
        return state + 1;
      }
      case "minus": {
        return state - 1;
      }
      case "byNumber": {
        return state + action.payload;
      }
      default:
        return state;
    }
  };
  const [number, setNumber] = useState(1);
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch({ type: "plus", payload: number })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "minus", payload: number })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "byNumber", payload: number })}>
        {number}
      </button>
      <select
        onChange={(e) => {
          setNumber(+e.target.value);
        }}
        name=""
        id=""
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default Root;
