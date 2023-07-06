// Mobile Shop --> 4 mobiles --> shopkeeper --> customer --> BUY_MOBILE

const Redux = require("redux")

//STATE
const initialData = {
    no0fMobiles: 4
}

//ACTION
function buyMobile(){
    return{
        type: "BUY_MOBILE"
    }
}

// action = {
// type: "BUY_MOBILE"
// }

//REDUCER
const myReducer = (state = initialData, action)=>{
    if(action.type == "BUY_MOBILE"){
        //Customer really wanted to the mobile, remaining remaining --> 3 
        return{
            no0fMobiles: state.no0fMobiles - 1
        }
    }
    return state
}

//REDUX STORE
const sangeethaMobiles = Redux.createStore (myReducer)

// get inside the store, we can get the new mobile phone count

sangeethaMobiles.subscribe (function(){ 
    console.log(sangeethaMobiles.getState())
})

sangeethaMobiles.dispatch(buyMobile())

// in the terminal type node {filename}.js in the Redux only npm start for React JS