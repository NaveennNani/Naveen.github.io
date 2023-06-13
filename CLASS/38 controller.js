// https://forkify-api.herokuapp.com/v2

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=5f4a01f3-d996-4894-bd54-b0fe434ccb6c

const searchBtn = document.getElementById("search") 
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
const rightContainer = document.getElementById("right-container")
const Text = document.getElementById("text")
import { storeRecipeData } from "./38 model.js"
import { OneRecipeView } from "./38 view.js"


searchBtn.addEventListener("click", () =>{
    getRecipeData()
})

async function getRecipeData(){
    try{
        const searchItem = searchInput.value
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=5f4a01f3-d996-4894-bd54-b0fe434ccb6c`);
        const recipeData = await response.json() 
        const recipeArray = recipeData.data.recipes
        recipeArray.map(function(i){
            const myPublisher = i.publisher 
            const myTitle = i.title 
            const myImageUrl = i.image_url
            const myId = i.id
            

            
            return leftContainer.insertAdjacentHTML("afterbegin",`

            <a href='#${myId}'>
                 
            <div class="left-food-container">
                <img src="${myImageUrl}" id="myimage"/>
                <h2 id="mypublisher">${myPublisher}</h2> 
                <h3 id="mytitle">${myTitle}</h3>
            </div>
            </a>`
        )
        })
    }
    catch(e){
        alert(e)
    }
}



async function loadParticularRecipe(){

    // Logic to collect the Hash id
    const hashID = window.location.hash.slice(1)

    storeRecipeData(hashID)

    const rv = new OneRecipeView
    rv.render()

}


loadParticularRecipe()

window.addEventListener("hashchange", loadParticularRecipe)






























































// const searchBtn = document.getElementById("search") 
// const searchInput = document.getElementById("searchinput")
// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")
// const Text = document.getElementById("text")


// searchBtn.addEventListener("click", () =>{
//     getRecipeData()
// })

// async function getRecipeData(){
//     try{
//         const searchItem = searchInput.value
//         const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=5f4a01f3-d996-4894-bd54-b0fe434ccb6c`)
//         const recipeData = await response.json() 
//         const recipeArray = recipeData.data.recipes
//         recipeArray.map(function(i){
//             const myPublisher = i.publisher 
//             const myTitle = i.title 
//             const myImageUrl = i.image_url
//             const myId = i.id
            

            
//             return leftContainer.insertAdjacentHTML("afterbegin",`

//             <a href='#${myId}'>
                 
//             <div class="left-food-container">
//                 <img src="${myImageUrl}" id="myimage"/>
//                 <h2 id="mypublisher">${myPublisher}</h2> 
//                 <h3 id="mytitle">${myTitle}</h3>
//             </div>
//             </a>`
//         )
//         })
//     }
//     catch(e){
//         alert(e)
//     }
// }



// async function loadParticularRecipe(){

//     // Logic to collect the Hash id
//     const hashid = window.location.hash.slice(1)

//     const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hashid}`)
//     const recipeData = await response.json()
//     //console.log(recipeData.data.recipe)
    
//     const recipeObject = {
//         title: recipeData.data.recipe.title,
//         publisher: recipeData.data.recipe.publisher, 
//         imageUrl: recipeData.data.recipe.image_url, 
//         servings: recipeData.data.recipe.servings, 
//         cookingTime: recipeData.data.recipe.cooking_time, 
//         ingredients: recipeData.data.recipe.ingredients,
//     }
        
//     // console.log(recipeObject.ingredients)



//     rightContainer.innerText =""
//     const rightData = 
//     `<div class="right-food-container">
//     <img class="right-image" src="${recipeObject.imageUrl}"/>
//     <h2 class="right-title">title:${recipeObject.title}</h1>
//     <h3 class="right-publisher">Publisher:${recipeObject.publisher}</h3>
//     <h3 class="right-servings">Servings:${recipeObject.servings}</h3>
//     <h3 class="right-cooking-time">Cooking Time:${recipeObject.cookingTime}</h3>


//     <div class="ingredients">
//     ${recipeObject.ingredients.map(function(i){
//         // console.log(i)
//         return `<div>
//         <span>${i.description}</span> ---
//         <span>${i.quantity}</span>
//         <span>${i.unit}</span>
//         </div>`
//     }).join("")}
//     </div>
//     </div>`

//     rightContainer.insertAdjacentHTML("afterbegin", rightData)
// }


// loadParticularRecipe()

// window.addEventListener("hashchange", loadParticularRecipe)






























































































































// https://forkify-api.herokuapp.com/api/v2/recipes/:id

// A customized button in HTML can be created using which tag?
// a, span, button

// How does an api look?
// end point, program

// Which function iterates through every element from an array in javascript?
// map()

// is afterbegin an argument given to insertAdjacentHTML()?
// Yes





// MODULE DAY 38

// When we try to get all the recipe details from an API, the output will be present in?
// array of objects

// Which of the following keyword is used on a function when that function uses await keyword?
// async

// Which operator is used to access the keys present in the object?
// .







// MODULE DAY 39

// Is publisher-subscriber a design pattern to solve some of the problems that occur in projects?
// Yes

// Which function holds the code that knows when to react?
// publisher

// Which function holds the code that wants to react?
// subscriber

// Which of the following keywords is usually used to create a view?
// class

// Should we pass the id in the url to get it?
// particular recipe details






