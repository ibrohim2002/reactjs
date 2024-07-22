// import { useState, useEffect, useRef } from "react";
// import "./App.css";

// const useInputValidation = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (e) => {
//     setValue(e.target.value);
//     console.log("ser");
//   };

//   const validateInput = () => {
//     return value.search(/\d/) >= 0 ? "text-danger" : "";
//   };

//   return { value, onChange, validateInput };
// };

// function App() {
//   const firstname = useInputValidation("");
//   const lastname = useInputValidation("");
//   // const [cardNumber, setCardNumber] = useState('')
//   // const [cvcNumber, setCvcNumber] = useState('')
//   // const cvcRef = useRef(null)
//   // const dateRef = useRef(null)
//   // const handleInput = e =>{
//   //   const value = e.target.value
//   //   setCardNumber(value)
//   //   if(value.length==16){
//   //     cvcRef.current.focus()
//   //   }
//   // }

//   // const handleDate = e =>{
//   //   const value = e.target.value
//   //   setCvcNumber(value)
//   //   if(value.length == 3){
//   //     dateRef.current.focus()
//   //   }
//   // }
//   // const initialCount = () => {
//   //   return 4;
//   // };
//   // const [count, setCount] = useState(() => {
//   //   return initialCount();
//   // });
//   // const handleResize = ()=>{
//   //   setWindowWidth(window.innerWidth)
//   // }

//   // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//   // useEffect(() => {
//   //   window.addEventListener('resize', handleResize)
//   // },[]);

//   // const decrementCount = () => {
//   //   setCount((prevCount) => prevCount - 1);
//   // };
//   // const incrementCount = () => {
//   //   setCount((prevCount) => prevCount + 1);
//   // };

//   return (
//     <div className="App">
//       {/* <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button> */}
//       {/* {windowWidth} */}
//       <input
//         type="text"
//         className={firstname.validateInput()}
//         onChange={firstname.onChange}
//         value={firstname.value}
//       />
//       <input
//         className={lastname.validateInput()}
//         type="text"
//         onChange={lastname.onChange}
//         value={lastname.value}
//       />
//       <input type="text" />
//     </div>
//   );
// }

// export default App;
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.title.id}
        {this.props.title.name}
      </div>
    );
  }
}

export default App;
