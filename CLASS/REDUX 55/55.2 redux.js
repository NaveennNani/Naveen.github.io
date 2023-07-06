const {createSlice, configureStore} = require("@reduxjs/toolkit")

const initialData = { no0fMobiles: 4}

const mobileSlice = createSlice({
    name: "mobile",
    initialState: initialData,
    reducers: {
        decrementReducer: (state) => {
            state.no0fMobiles = state. no0fMobiles - 1
        }
    }
})

const {decrementReducer} = mobileSlice.actions

const myStore = configureStore({
    reducer: {
        mobile: mobileSlice. reducer
    }
})

myStore.dispatch(decrementReducer())
console.log(myStore.getState().mobile)


// HOW TO READ OUTPUT OF REDUX
// PS C:\Users\gorun\Desktop\HTML\Redux> cd remainderapp
// PS C:\Users\gorun\Desktop\HTML\Redux\remainderapp> cd src
// PS C:\Users\gorun\Desktop\HTML\Redux\remainderapp\src> node redux.js
// { no0fMobiles: 3 }