import React from 'react'
import { myDatabase } from './firebase'


function Customer() {

    React.useEffect (function(){
        //Logic to Read the data from the local storage and save that data in the database
        const name = localStorage.getItem("NAME")
        const city = localStorage.getItem("CITY")
        const country = localStorage.getItem("COUNTRY")
        const pincode = Number(localStorage.getItem("PINCODE"))
        const total = Number(localStorage.getItem("total"))
        
        myDatabase.collection("customers").add({
            name: name,
            city: city,
            country: country,
            pincode: pincode,
            total: total
        })
    })
  
    return (
    <div></div>
  )
}

export default Customer