import Axios from "axios"

const Redux = require("redux")

const initialData = {
    users: []
}

export function fetchUsers(){
    return (dispatch)=>{
        Axios.get("https://fakestoreapi.com/users")
        .then(function(result){
            dispatch({
            type: "FETCH_USERS",
            payload: result.data
        })
    })
    }
}

export function addUsers(info){ // [ {}, {}, {}, ....]
    console.log(info)
        return{
            type: "ADD_USERS", 
            payload: info
        }
    }

const myReducer = (state = initialData, action) => {
    if(action.type == "ADD_USERS" || action.type == "FETCH_USERS"){
        // Logic to add users to the users array
        return {
            users: action.payload
        }
    }
    return state
}

export const rootReducer = Redux.combineReducers ({ 
    myReducer: myReducer
})

// export const myStore = Redux.createStore(rootReducer)