import React from 'react'
import { myDatabase } from './firebase'

function Card() {

    const [productData, setproductData] = React.useState([])

    React.useEffect(function(){
        // Logic to read the data from firestore database
        myDatabase.collection("products").onSnapshot(function(snapshot){
            // snapshot = [ "doc1", "doc2"]
            setproductData(snapshot.docs.map(function(i){
                return i.data()
            }))
        })
    })

    function collectData(event){

        //Logic to collect the data like quantity and the id
        if(localStorage.getItem("cart") == null){
        //Meaning is cart key is not present in the local storage, so it means even id and quantity is also not in the local storage
        // We have to create the cart key
        var cart = {}
        }else{
        // {"cart": {"1": 5}}
        //If cart key is already there in the local storage, it means id and quantity might be available 
        // JSON data in to Javascript Object
        cart = JSON.parse(localStorage.getItem("cart")) 
        //{"1": 5} -> {1: 5)
        }

        // We need to get the ID
        // cart = {1: 4, 2:4}
        
        let myId = event.target.id //2

        if(cart[myId] == undefined){
            //It means that id along with the quantity is not there inside the cart object cart [myId] = 1//cart [2]= 1
            var quantity = 1
            var name = document.getElementById("myname"+myId).innerText
            var price = Number(document.getElementById("myprice"+myId).innerText)
            cart[myId] = [quantity, name, price]
        }else{
            quantity = cart[myId][0] + 1  // cart [2] = 2
            cart[myId][0] = quantity
            price = Number(document.getElementById("myprice"+myId).innerText) * quantity
            cart[myId][2] = price
        }

        // {"cart": {1: 4, 2: 4}}
        // cart (Javascript Object) --> JSON
        localStorage.setItem("cart", JSON.stringify(cart))


        displayCart(cart)
        function displayCart(mycart){
        //Logic to display the data that is present inside the cart variable and put it inside the popover 
        //mycart = {1: [3, "NAME", "PRICE"), 4: [1: "NAME", "PRICE"), 3: [1: "NAME", "PRICE"]}
        
        var cartData = ""
        for(let i in mycart){
            cartData = cartData + "QTY:" + mycart[i][0] +" " + "NAME:" + mycart[i][1] +" " + "PRICE:" + mycart[1][2] + "<br/>"
            //console.log(cartData)
        }
        
        cartData = cartData + "<a href='ProductData.html' class='btn btn-success'>Continue</a>"
        document.getElementById("mypopover").setAttribute("data-content", cartData)
    }
}



  return (
    <div className='all' style={{"display":"flex"}}>
        {
        productData.map(function(i){
            return <div key={i.slno}className="card" style={ {width: 400, margin: 30, padding: 30} }>
                        <h2>{i.slno}</h2>           
                        <img src={i.imageUrl} className="card-img-top" alt="..."/>
                       <div className="card-body">
                          <h5 className="card-title" id={"myname"+i.slno}>{i.name}</h5>
                          <p className="card-text">{i.description}</p>
                          <del><h2 className="card-text">{i.originalPrice}</h2></del>
                          <h1 className="card-text" id={"myprice"+i.slno}>{i.discountedPrice}</h1>
                          <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add to cart</a>
                        </div>
                    </div>
                })
        }
    </div>
  )
}

export default Card