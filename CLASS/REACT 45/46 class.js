// import React from 'react';
// import ReactDOM from 'react-dom/client'; 
// import './index.css';
// import App from './index.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


import './index.css';
import { useState, useRef } from 'react';

function App() {

    const data = localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []
    
    const [list, setList]=useState([]);
    const [newTask,setNewTask] = useState('')
    const [search,setSearch]=useState(data)
    
    const addtask=()=>{
        localStorage.setItem('lists', JSON.stringify([...list, newTask]))
        setList([...list, newTask])
        setNewTask('')
    }

    const deleteTask=(i)=>{ 
        const delList = [...list]; 
        delList.splice (i, 1); 
        setList(delList)
        localStorage.setItem('lists', JSON.stringify(delList))
    }

    const updateTask=(e,i)=>{
        const uptask = [...list]; 
        uptask.splice(i,1,e.target.value) 
        setList (uptask)
        localStorage.setItem('lists', JSON.stringify(uptask))
    }

    const keyEnter = (e) =>{
        if(e.key === "Enter"){
            addtask()
        }
    }

    return (
        <div className="App">
            <div className="search">
                <input type="text" placeholder="search task" onChange={(e)=>{
                    setSearch(e.target.value)
                }}/>
            </div>

            <h1 className="heading">To-do App </h1> 
            <div className="inputs">

                <input type="text" onChange={(e)=>{ setNewTask(e.target.value)}} onKeyDown={keyEnter} value={newTask}/> 
                <button className="btn" onClick={addtask} >Add task</button>
        </div>

        <div className="container">{
        list.map((val, i) => {
            if(val.toLowercase().includes(search.toLowercase())){
            
            return (
            <div className="list" key={i}>
                <input type="text" value={val} onChange={(e) => { updateTask(e,i) }} />
                <span className="icon" onClick={() => { deleteTask(i) }} >X</span>
                </div>
                )
            }
        })
        }
        </div>
        </div>
        );
    }

export default App;
    

            




















// What are hooks in React?
// Functions that let you "hook" into React state and lifecycle methods from a functional component

// What are the rules of hooks in React?
// They can only be used in functional components, They must be used in a specific order within a functional component, They can be conditionally called within a functional component

// Why is it important to follow the rules of hooks in React?
// To prevent bugs and unexpected behavior in your React components

// What is the data type of the first value returned by the useState hook in React?
// Array

// What is the purpose of the second value returned by the useState hook in React?
// It is a function that allows you to update the state value of the component

// What is the purpose of using a key when rendering a list of tasks in a React to-do list app?
// To ensure that each task has a unique identifier

// Which lifecycle method is commonly used to initialize the state in a React to-do list app?
// componentDidMount()

// Which method is used to read new tasks from an array in a React to-do list app?
// map()

// How can you create a new task in a React to-do list application?
// Press the "Enter" key

// In a React to-do list application, where is the new task added when the user presses the "Enter" key?
// At the bottom of the list

// Which component is responsible for rendering the input field where users can add new tasks in a React to-do list application?
// InputField

// What is the purpose of a unique key when rendering a list of tasks in a React to-do list app?
// It helps to identify each task in the list

// What is the recommended approach to update a task in a React to-do list app?
// Create a new array with the updated task and replace the original array

// Which React method is used to update the state of a component?
// setState()

// What is the difference between the splice method and the filter method used in a React functional component for a to-do list application?
// The splice method modifies the original array, while the filter method returns a new array.

// What is the purpose of the filter method used in a React functional component for a to-do list application?
// To remove an existing task from the array or list

// What is the purpose of the splice method used in a React functional component for a to-do list application?
// To remove an existing task from the array or delList

// What is the difference between Controlled and Uncontrolled components in React?
// Controlled components use state to manage user input, while Uncontrolled components rely on DOM manipulation

// What is an example of a Controlled component in React?
// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

// What is the purpose of useRef in React?
// To reference a DOM element





