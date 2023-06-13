import { anotherRecipeObject } from "./38 model.js"

export class OneRecipeView{
    
    rightContainer;
    rightData;

    render(){
        this.rightContainer = document.getElementById("right-container")
        this.clear()
        let collectedData = anotherRecipeObject.recipeObject
        let rightData = this.actualLogic(collectedData)
        this.addDataToContainer
    }

    clear(){
        this.rightContainer.innerText =""
    }

    actualLogic(recievedData){
            return `<div class="right-food-container">
            <img class="right-image" src="${recievedData.imageUrl}"/>
            <h2 class="right-title">title:${recievedData.title}</h1>
            <h3 class="right-publisher">Publisher:${recievedData.publisher}</h3>
            <h3 class="right-servings">Servings:${recievedData.servings}</h3>
            <h3 class="right-cooking-time">Cooking Time:${recievedData.cookingTime}</h3>

            <div class="ingredients">
            ${recievedData.ingredients.map(function(i){
                       console.log(i)
                       return `<div>
                       <span>${i.description}</span> --
                       <span>${i.quantity}</span>
                       <span>${i.unit}</span>
                       </div>`
                    }).join("")}
                    </div>

            </div>`
    }

    addDataToContainer(){
        this.rightContainer.insertAdjacentHTML("afterbegin", this.rightData)
    }
   
}