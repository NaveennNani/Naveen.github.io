const Redux = require("redux")

//Initial State
const inititaData = { 
    allTasks: ["Eating", "Dancing"]
}

//ACTION
export function addTask(task){ //task= "Playing" 
    return{
        type: "ADD_TASK", 
        payload: task
    }
}

// action = {
// type: "ADD_TASK",
// payload: task
// }

//Reducer Shop Keeper
const myReducer = (state = inititaData, action) =>{
    if (action.type == "ADD_TASK"){
        //Logic to add the task to the redux store
        return{
            allTasks: [...state.allTasks, action. payload]
        }
    }
    return state
}

//Combining Reducers 
const totalReducer = Redux.combineReducers({ 
    myReducer: myReducer
})

//Create a store 
export const myStore = Redux.createStore (totalReducer)
