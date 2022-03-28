import React, { useState, useEffect, useRef, useReducer } from "react";
import ReactDOM from "react-dom";

// function Counter() {

//   const initialState = {
//     count: 0,
//     step: 1,
//   };
  
//   function reducer(state, action) {
//     const { count, step } = state;
//     if (action.type === 'tick') {
//       return { count: count + step, step };
//     } else if (action.type === 'step') {
//       return { count, step: action.step };
//     } else {
//       throw new Error();
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({ type: "tick" }); // Instead of setCount(c => c + step);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [dispatch]);

//   return (
//     <>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => {
//         dispatch({
//           type: 'step',
//           step: Number(e.target.value)
//         });
//       }} />
//     </>
//   );
// }
// class Index extends React.Component{
//   constructor(props){
//       super(props)
//       this.state={
//           number:0
//       }
//   }
//   handerClick=()=>{
//      for(let i = 0 ;i<5;i++){
//          setTimeout(()=>{
//              this.setState({ number:this.state.number+1 })
//              console.log(this.state.number)
//          },1000)
//      }
//   }

//   render(){
//       return <div>
//           <button onClick={ this.handerClick } >num++</button>
//       </div>
//   }
// }
function Index(){
  const [ num ,setNumber ] = useState(0)
  const handerClick=()=>{
      for(let i=0; i<5;i++ ){
         setTimeout(() => {
              setNumber(num+1)
              console.log(num)
         }, 1000)
      }
  }
  return <button onClick={ handerClick } >{ num }</button>
}

export default Index;
