import React from 'react'

function Counter(){  
    const [count, setCount] = React.useState(0)
    
    function increaseIt(){
        //Increase the count value
        setCount(count + 1)
    }
    
    function decreaseIt(){
        //Decrease the count value
        setCount(count - 1)
    }
    
    return (
        <div>
            <h2 data-testid="countvalue">{count}</h2>
            <button onClick={increaseIt}>Increase</button>
            <button onClick={decreaseIt}>Decrease</button>
        </div>
        )
}

export default Counter