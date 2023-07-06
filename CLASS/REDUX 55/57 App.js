import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import Login from "./Login";
import React from "react";


function App(){

  const [loggedIn, setLoggedIn] = React.useState(false)

  function logOut(){
     window.location.pathname = "/login"
  }

  return(
    <div>
      <BrowserRouter>
        
        { loggedIn ? <div>
          <Link to="/mobile">Mobile</Link>
          <Link to="/laptop">Laptop</Link>
          <button onClick={logOut}>Logout</button></div> : <Link to="/login">Login</Link> }

        <Routes>
          <Route path="/mobile" element={<Mobile/>}></Route>
          <Route path="/laptop" element={<Laptop/>}></Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App