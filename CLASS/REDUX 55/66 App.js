import React from "react";
import './App.css'
import HomePage from "./HomePage";
import Question from "./Question";
import Result from "./Result";

export const myBasket = React.createContext()

function App(){

    const [page, setPage] = React.useState("homepage")

    const [score, setScore] = React.useState(0)

    // page "homepage"

    return (
        <div>
        
            <myBasket.Provider value={ {mySetPage: setPage, myScore: score, mySetScore: setScore} }>
                { page == "homepage" && <HomePage/> }
                { page == "question" && <Question/> }
                { page == "result" && <Result/> }
            </myBasket.Provider>
        </div>
    );
}
    
export default App;