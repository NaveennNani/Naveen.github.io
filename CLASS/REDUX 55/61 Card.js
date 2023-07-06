import React from 'react'

const icecreamData = [
    {
        id:"1",
        imageUrl:"https://www.yummytummyaarthi.com/wp-content/uploads/2014/11/1-36.jpg",
        name:"Choclate ice cream",
        description:"Chocolate ice cream is generally made by blending cocoa powder, and the eggs, cream, vanilla, and sugar used to make vanilla ice cream"
    },
    {
        id:"2",
        imageUrl:"https://static.toiimg.com/thumb/63971154.cms?width=573&height=430",
        name:"Vanilla ice cream",
        description:"Vanilla ice cream is a sweet frozen dessert made from milk, cream, sugar, and vanilla flavoring from vanilla seeds, pure vanilla extract, vanilla seed paste, or a combination."
    }
]


const Card = (props) => {

    // const [icecreamData, setIcecreamData] = React.useState([])

    // React.useEffect(function(){
    //     fetch("https://localhost:9000/icecreamData")
    //     .then(function(data){
    //         return data.json()
    //     })
    //     .then(function(result){
    //         setIcecreamData(result)
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // },[])

    function collectIt(event){
        if(localStorage.getItem("cart") === null){
            // maning is there is no cart key created in the local storage
            var cart = {}
        }
        else
        {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
            var myId = event.target.id

        if(cart[myId] === undefined)
        {
            var quantity = 1
            var name = document.getElementById("name"+myId).innerText
            cart[myId] = [quantity, name]
        }
        else
        {
            quantity = cart[myId][0] +1
            cart[myId][0] = quantity
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        // JSON --> JavascriptObject --> JSON.parse()
        // JavascriptObjevt --> JSON --> JSON.Stringify()

        const myQuantity = cart[myId][0]
        const Quantity = document.getElementById("quantity")
        Quantity.innerHTML = ""
        Quantity.append(myQuantity)

        
    }



    function goTosummaryPage(){
        props.info("summarypage")
    }



  return (
    <div>
    {
        icecreamData.map(function(data){
            return <div key={data.id}>
            <div className="card" style={{width:"18rem"}}>
            <h1>{data.id}</h1>
            <img src={data.imageUrl} data-testid="image" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title" id={"name"+data.id}>{data.name}</h5>
            <p className="card-text">{data.description}</p>
            <a href="#" className="btn btn-primary" data-testid="addbtn" onClick={collectIt} id={data.id}>ADD</a>
            </div>
            </div>
            </div>
        })
    }
    <div id='quantity' data-testid="quantity"></div>
    <button className='btn btn-success' onClick={goTosummaryPage}>Continue</button>
    </div>
  )
}

export default Card