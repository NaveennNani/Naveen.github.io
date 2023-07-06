import React from 'react'
import { myDatabase } from './firebase.js'


function AddProducts() {

    const [productData, setProductData] = React.useState({
        productSlno:"",
        productName:"",
        productImageUrl:"",
        productDescription:"",
        productOriginalPrice:"",
        productDiscountedPrice:"",

    })

    function collectIt(event){
        const myData = event.target.value
        setProductData({...productData, [event.target.name]: myData})
    }

    function saveData(){
        // Logic to add the product in the database
        myDatabase.collection("products").add({
            slno: productData.productSlno,
            name: productData.productName,
            imageUrl: productData.productImageUrl,
            description: productData.productDescription,
            originalPrice: productData.productOriginalPrice,
            discountedPrice: productData.productDiscountedPrice
        })
        window.location.pathname = "/home"
    }


  return (
    <div className="row" style={{margin: 40}}>
        <div className="col-md-3">
        <label>Product Slno:</label>
        <input type="number" name="productSlno" className="form-control" onChange={collectIt}/>
        <label>Product Name:</label>
        <input type="text" name="productName" className="form-control" onChange={collectIt}/>
        <label>Product Image URL:</label>
        <input type="text" name="productImageUrl" className="form-control" onChange={collectIt}/>
        <label>Product Description:</label>
        <textarea rows="4" cols="40" name="productDescription" className="form-control" onChange={collectIt}></textarea>
        <label>Product Original Price:</label>
        <input type="number" name="productOriginalPrice" className="form-control" onChange={collectIt}/>
        <label>Product Discounted Price:</label>
        <input type="number" name="productDiscountedPrice" className="form-control" onChange={collectIt}/>
        <button className="btn btn-outline-success" onClick={saveData}>Add Product</button>
        </div>
    </div>    
  )
}


export default AddProducts