import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
        <BrowserRouter>
        <img width="100px" height="50px" src="https://d2r2ijn7njrktv.cloudfront.net/IL/uploads/2020/08/26185832/netflix-logo.png"/>
            <div className="link">
                <NavLink>Home</NavLink>
            </div>
            <div className="link">
                <NavLink>Tv Shows</NavLink>
            </div>
            <div className="link">
                <NavLink>Categories</NavLink>
            </div>
            <div className="link">
                <NavLink>Login</NavLink>
            </div>
        </BrowserRouter>
    </div>
    
  )
}

export default Navbar