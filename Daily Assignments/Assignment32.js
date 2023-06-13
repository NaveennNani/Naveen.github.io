const btn = document.getElementById("btn1")
const ProductName = document.getElementById("productname")
const ProductCost = document.getElementById("productcost")
const ProductDescription = document.getElementById("description")

btn.addEventListener("click", async function()
{
    // console.log("hi")
    const response = await fetch("https://fakestoreapi.com/products/1")
    const result = await response.json()
    console.log(result)
    ProductName.innerText = `TITLE: ${result.title}`
    ProductCost.innerText = `PRICE: INR${result.price}`
    ProductDescription.innerText = `DESCRIPTION: ${result.description}`
})