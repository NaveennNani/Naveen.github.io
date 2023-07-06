import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Customer from "./Customer";



function App(){

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    return (
        <div>
            <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
            <Customer/>
        </div>
    )
}
    
export default App;