export const anotherRecipeObject = {
    recipeObject: {}
}

export async function storeRecipeData(id){

    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const recipeData = await response.json()


    anotherRecipeObject.recipeObject = {
        title: recipeData.data.recipe.title,
        publisher: recipeData.data.recipe.publisher, 
        imageUrl: recipeData.data.recipe.image_url, 
        servings: recipeData.data.recipe.servings, 
        cookingTime: recipeData.data.recipe.cooking_time, 
        ingredients: recipeData.data.recipe.ingredients,
    }
}