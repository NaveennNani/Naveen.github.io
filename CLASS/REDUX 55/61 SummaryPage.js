import React from 'react'

function SummaryPage(props) {

    React.useEffect(function(){
        //Logic to read the data (quantity and name) from the local storage
        let icecreamData = JSON.parse(localStorage.getItem("cart"))
        var totalQuantity = 0
        
        for(let i in icecreamData){

            var quantity = icecreamData[i][0] 
            var name = icecreamData[i][1] 

            totalQuantity = totalQuantity + quantity

            const myDiv = document.getElementById("div")
            myDiv.append(name+":"+quantity)

        }
        
        const myTotal = document.getElementById("total")
        myTotal.innerText = ""
        myTotal.append(totalQuantity)
    })

    function goToOrderPage(){
        props.data("orderpage")
    }


    return (
        <div>
            <div id="div">
            
            </div>
            <div id="total" data-testid="total">

            </div>
            <div>
                <button className='btn btn-success' onClick={goToOrderPage}>Continue</button>
            </div>
        </div>
      )
    }
    

  
export default SummaryPage