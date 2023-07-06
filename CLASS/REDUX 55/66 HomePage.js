import React from 'react'
import { myBasket } from './App'

function HomePage() {
    
    const {mySetPage} = React.useContext(myBasket)
        
        // mySetPage = "setPage"
        
        function goToQuestion(){
            
            //Logic to navigate to Question Component
            mySetPage("question")
        }
        
        return (
            <div>
                <button onClick={goToQuestion} style={{margin:40}}className='btn btn-outline-success'>Start Quiz</button>
            </div>
        )
}

export default HomePage