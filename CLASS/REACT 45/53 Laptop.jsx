import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Laptop() {
    const params = useParams() // help us to collect data dynamically useParams
    console.log(params)
    const name = params.laptopname
    const model = params.modelname

    const navigate = useNavigate()

    function goTo(){
        navigate("/book")
    }


    return (
    <div>
        <h2>Laptop is {name} with {model}🔥</h2>

        <button onClick={goTo}>Click</button>
    </div>
  )
}

export default Laptop