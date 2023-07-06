//        47.1 PROJECT_1


// import React from "react";
// import ReactDOM from "react-dom/client";
// import './46 class.css'
// import App from "./App";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <center>
//         <h1>Welcome to ReactJS</h1>
//         <App/>
//     </center>
// )





// import React, {useState, useEffect} from 'react' 

// export default function App(){
//   const [counter, setCounter]=useState(0);
//   // anytime we have change in state/prop {basically re-rendering} alert ("v ")
  
//   useEffect(()=>{
//     alert("working...")})
    
//     const inc =()=>{
//       setCounter (counter+1);
//     }
    
//     const dec =()=>{
//       setCounter (counter-1);
//     }
    
//     return (
//       <>
//       <h1>Counter : {counter} </h1>
//       <button className="btn btn-warning" onClick={inc}>Increment</button>
//       <button className="btn btn-warning" onClick={dec}>Decrement</button>
//       </>
//     )
//     }
  









//        47.2 PROJECT_2

// import React from "react";
// import ReactDOM from "react-dom/client";
// import './46 class.css'
// import {App} from './App'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <center>
//         <h1>Welcome to useEffect Cleanup</h1>
//         <App/>
//     </center>
// )





// import React, {useState, useEffect} from 'react'

// export const App = () => {
//   const [size, setSize]=useState(window.innerWidth);
//   const sizeChange = () =>{
//     setSize(window.innerWidth);
//   }

//   useEffect(()=>{
//     window.addEventListener('resize', sizeChange)
//     return ()=>{
//       window.removeEventListener('resize', sizeChange)
//     }
//   })
    
//   return (
//     <>
//     <h3> Actual size of the window</h3>
//     <h1> {size} </h1>
//     </>
//     )
//   }



    

            

