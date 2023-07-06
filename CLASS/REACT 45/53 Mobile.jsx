import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Mobile() {
    
    const navigate = useNavigate()

    function goTo(){
        navigate("/laptop")
    }

    return (
    <div>
        <h2>Mobile is Iphone with 14pro 🔥</h2>

        <button onClick={goTo}>Click</button>
    </div>
  )
}

export default Mobile