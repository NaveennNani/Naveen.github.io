import React from "react"
import { myContext } from "./validationForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function InvoiceForm() {


  const [data, setData] = React.useState({
    cname :"",
    pname :"",
    pqty :"",
    pprice :""
  })
    
  function collectData(event){
    //Logic to collect all the 4 details and store it in these 4 keys 
    let enteredData = event.target.value 

    if(enteredData){
      setData({...data, [event.target.name] : enteredData})
    }
    
  }

  function generatePdf(){
    //Logic to first generate the image then the pdf
    
    const invoiceData = document.querySelector(".invoicedata")
    
    html2canvas(invoiceData)
    .then(function(data)
    {
      const imageData = data.toDataURL("img/png") 
      const document = new jsPDF("p", "mm", "a4")
      const width= document.internal.pageSize.getWidth("30px") 
      const height = document.internal.pageSize.getHeight("30px")
      document.addImage(imageData, "PNG", 0, 0, width, height)
      document.save("invoice.pdf")
    })
    .catch(
    function(error)
    {
      alert(error)
    })
  }

  
  return (
      <div> 
        <h3>Date: {new Date().toLocaleString()}</h3>
        <h3>Invoice Number: <input type="number" className="block w-20 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/></h3>
      
        <div>
          <label>Customer Name</label>
          <input type="text" name="cname" onChange={collectData} className="block w-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <label>Product Name</label>
          <input type="text" name="pname" onChange={collectData} className="block w-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          <label>Product Qty</label>
          <input type="text" name="pqty" onChange={collectData} className="block w-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> 
          <label>Product Price</label>
          <input type="text" name="pprice" onChange={collectData} className="block w-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> 
        </div>

        <div className="invoicedata">
          <h2>Customer Name:{data.cname}</h2>
          <h2>Product Name: {data.pname}</h2>
          <h2>Product Qty: {data.pqty}</h2>
          <h2>Product Price: {data.pprice}</h2>
        </div>
        <button onClick={generatePdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Download</button>
      </div>
    )
}

export default InvoiceForm







