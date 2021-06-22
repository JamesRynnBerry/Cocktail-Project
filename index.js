
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
    console.log(cocktail.drinks[0].strDrink);
    let drinkSection = document.querySelector("#drink-section");
    let drinkName = document.createElement("h2");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;
    drinkSection.appendChild(drinkName);
    let img = document.createElement("img");
    img.src = cocktail.drinks[0].strDrinkThumb;
    drinkSection.appendChild(img);
  //use forEach instead
    /* for (let i = 1; i < 16; i++) {
      console.log(i);
      let ingredient = document.createElement("li");
      ingredient.innerHTML = cocktail.drinks[0][`strIngredient${i}`];
      drinkSection.appendChild(ingredient);
    } */
  }
 /* 
  function getPopularCocktails() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(cocktailData => renderCocktailMidPage(cocktailData))
}
 const renderCocktailMidPage = (cocktailData) => {
    console.log(cocktailData)
 }
  */