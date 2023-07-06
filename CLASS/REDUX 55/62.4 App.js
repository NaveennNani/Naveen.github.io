import React from "react";
import "./App.css"
import { motion } from "framer-motion"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Mobile from "./Mobile";
import Laptop from "./Laptop";

function App(){
    return (
        <div>
        <BrowserRouter>
        <Link to="/mobile">Mobile</Link>
        <Link to="/laptop">Laptop</Link>
        <Routes>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/laptop" element={<Laptop/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
    
export default App;