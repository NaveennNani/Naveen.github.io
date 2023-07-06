import React from 'react'

function SummaryPage(props) {

    React.useEffect(function(){
        //Logic to read the data (quantity and name) from the local storage
        let icecreamData = JSON.parse(localStorage.getItem("cart"))
        
        for(let i in icecreamData){
            var quantity = icecreamData[i][0] 
            var name = icecreamData[i][1] 

            const myDiv = document.getElementById("div")
            myDiv.append(name+":"+quantity)
        }
    })

    function goToOrderPage(){
        props.data("orderpage")
    }


    return (
        <div>
            <div id="div">
            
            </div>
            <div>
                <button className='btn btn-success' onClick={goToOrderPage}>Continue</button>
            </div>
        </div>
      )
    }
    

  
export default SummaryPage