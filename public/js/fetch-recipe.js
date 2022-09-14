function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('recipe');
const url = 'http://localhost:3000/api/recipe';
//const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.recipe);
        console.log("Visa första i json-objektet: " + data.recipe[0].recipeName);
        let recipe = data.recipe;
        return recipe.map(function(recipe) {
            let li = createNode('li');
            li.innerHTML = recipe.recipeName + " " + recipe.recipeCategory;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
