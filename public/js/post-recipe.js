const elForm = document.getElementById('formRecipe');
const elRecipeName = document.getElementById('recipeName');
const elRecipeDescription = document.getElementById('recipeDescription');
const elRecipeIngredients = document.getElementById('recipeIngredients');
const elRating= document.getElementById('recipeRating');
const elRecipeSteps = document.getElementById('recipeSteps')
const elOutput = document.getElementById('output');

function newRecipe(event){
    event.preventDefault();
    let recipeName = elRecipeName.value;
    let recipeDescription = elRecipeDescription.value;
    let recipeIngredients = elRecipeIngredients.value;
    let recipeRating = elRating.value;
    let recipeSteps = elRecipeSteps.value;


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
          
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({recipeName:recipeName, recipeDescription:recipeDescription, recipeIngredients:recipeIngredients, recipeRating:recipeRating, recipeSteps:recipeSteps }) // body data type must match "Content-Type" header
    });
    return response.json(); 
}

postData('http://localhost:3000/api/recipe')
    .then((data) => {
        console.log(data); 
    });

}

elForm.addEventListener('submit', newRecipe, false);

