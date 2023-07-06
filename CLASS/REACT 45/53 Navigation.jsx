import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Laptop from './Laptop'
import Book from './Book'
import Mobile from './Mobile'
import App from './App'


function Navigation() {
  return (
    <div>
        <BrowserRouter>
            <NavLink to="/mobile">Mobile</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/book">Book</NavLink>

            <Routes>
                <Route path="/mobile/" element={<Mobile/>}></Route>
                <Route path="/laptop/:laptopname/:modelname" element={<Laptop/>}></Route>
                <Route path="/book" element={<Book/>}></Route>
                <Route path="/*" element={<App/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default Navigation