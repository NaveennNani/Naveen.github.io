import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Book() {

    const navigate = useNavigate()

    function goTo(){
        navigate("/mobile")
    }

    return (
    <div>
        <h2>Book is Harrypotter🔥</h2>

        <button onClick={goTo}>Click</button>
    </div>
  )
}

export default Book