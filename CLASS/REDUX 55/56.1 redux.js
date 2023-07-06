const Redux = require("redux")

const initialData = {
    users: []
}

export const Fetch_Users = "FETCH_USERS"
export const Add_Users = "ADD_USERS"

export function fetchUsers(){
    return {
        type: Fetch_Users
    }
}

// export function addUsers(info){ // [ {}, {}, {}, ....]
//     console.log(info)
//         return{
//             type: Add_Users, 
//             payload: info
//         }
//     }

const myReducer = (state = initialData, action) => {
    if(action.type == "ADD_USERS"){
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