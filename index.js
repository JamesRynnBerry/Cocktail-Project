 //On page load lets grab the 20 popular cocktails and put them up top
 document.addEventListener('DOMContentLoaded', ()=>{
  getPopularCocktails()
})
function getPopularCocktails() {
   fetch("http://localhost:3000/drinks")
   .then(resp => resp.json())
   //.then(console.log)
   .then(cocktailData => renderCocktailTop(cocktailData))
}
const renderCocktailTop = (drinkData) => {
  const div = document.querySelector('#top-bar')
  const list = document.querySelector('#pop-list')
  //when live server is enabled = drinkData.drinks.forEach(drink=>{ 
    
   drinkData.forEach(drink=>{
     //Build drink names and image for top bar
     const popularNameItem = document.createElement('p')
     popularNameItem.innerText = drink.strDrink  
     const popularImageItem = document.createElement('img')
     popularImageItem.src = drink.strDrinkThumb
     list.append(popularNameItem, popularImageItem)
   })
}
//BELOW IS ALL FOR RANDOM COCKTAIL BUTTON GENERATOR
function getCocktail() {
   fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
     .then(response => response.json())
       .then(data =>  displayRandomCocktail(data))
 }
 const randomBtn = document.querySelector('#randomBtn')
 randomBtn.addEventListener('click', () =>{
   getCocktail();
 })
 function displayRandomCocktail(cocktail) {
  // console.log(cocktail.drinks[0].strDrink);
   let drinkSection = document.querySelector("#drink-section");
   drinkSection.innerHTML = "";
   let drinkName = document.createElement("h2");
   drinkName.innerHTML = cocktail.drinks[0].strDrink;
   drinkSection.appendChild(drinkName);
   let img = document.createElement("img");
   img.src = cocktail.drinks[0].strDrinkThumb;
   drinkSection.appendChild(img);
 //use forEach instead
/*   cocktail.drinks.forEach(ingredients => {
   let ingredientList = document.createElement('li')
   ingredients.innertext = ingredients.strIngredient`${counter}`
   drinkSection.append(ingredientList)
 }) */
    for (let i = 1; i < 16; i++) {
     console.log(i);
     let ingredient = document.createElement("li");
     ingredient.innerHTML = cocktail.drinks[0][`strIngredient${i}`];
     drinkSection.appendChild(ingredient);
   } 
 }