const topTwentyBtn = document.querySelector('#popularBtn')
topTwentyBtn.addEventListener('click', ()=>{
  getPopularCocktails()
})
function getPopularCocktails() {
   fetch("http://localhost:3000/drinks")
   .then(resp => resp.json())
   //.then(console.log)
   .then(cocktailData => renderCocktailTop(cocktailData))
}
const renderCocktailTop = (drinkData) => {
  console.log(drinkData)

  const list = document.querySelector('#pop-list')
  list.innerHTML=""
  //when live server is enabled => drinkData.drinks.forEach(drink=>{ 
    drinkData.forEach(drink=>{

     const drinkDiv = document.createElement('div')
     drinkDiv.className = "drink"
     const popularNameItem = document.createElement('h3')
     popularNameItem.innerText = drink.strDrink  
     const popularImageItem = document.createElement('img')
     popularImageItem.src = drink.strDrinkThumb
     const popularList = document.querySelector("li")
     
     //append items 
    drinkDiv.append(popularNameItem, popularImageItem)
    list.append(drinkDiv)
    drinkDiv.addEventListener('click', ()=>{
      renderDrinkSection(drink)
    })
   })
   
   //Render Drinks With Name/Image/Ingredients/Like in the mid div section
   const renderDrinkSection = (drinkData) =>{
     const renderDiv = document.querySelector('#render-mid-section')
    //drinkData.forEach(drink=>{
      renderDiv.innerHTML = ""
      const renderMidName = document.createElement('h4')
      renderMidName.innerText = drinkData.strDrink  
      const renderMidImage = document.createElement('img')
      renderMidImage.src = drinkData.strDrinkThumb
      const likeButton = document.createElement('button')
      likeButton.innerHTML = "Like"
      likeButton.addEventListener('click', (e)=>{
        if(e.target.innerHTML === "Like"){
          e.target.innerHTML = "Unlike"
       }
       else{
         e.target.innerHTML = "Like"
       }
      })

      //append items 
      renderDiv.append(renderMidName, renderMidImage, likeButton)
   }

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
  console.log(cocktail)
   let drinkSection = document.querySelector("#drink-section");
   drinkSection.innerHTML = "";
   let drinkName = document.createElement("h2");
   drinkName.innerHTML = cocktail.drinks[0].strDrink;
   drinkSection.appendChild(drinkName);
   let img = document.createElement("img");
   img.src = cocktail.drinks[0].strDrinkThumb;
   drinkSection.appendChild(img);
   const liker = document.createElement('button')
   liker.innerHTML = "Add to Cabinet?"
   
    for (let i = 1; i < 16; i++) {
     //console.log(i);
     let ingredient = document.createElement("li");
     ingredient.innerHTML = cocktail.drinks[0][`strIngredient${i}`];
     drinkSection.appendChild(ingredient);
   } 
   drinkSection.appendChild(liker)
   liker.addEventListener('click', ()=>{
      drinkSection.innerHTML=""
      const cabinet = document.querySelector('#cabTable')
      const row = cabinet.insertRow(0);
      let cellImage = row.insertCell(0);
      let cellName = row.insertCell(1);
      const imgTable = document.createElement('img')
      imgTable.className = "miniImage"
      imgTable.src = cocktail.drinks[0].strDrinkThumb

      const nameTable = document.createElement('h2')
      cellName.innerHTML = cocktail.drinks[0].strDrink;

    cellImage.append(imgTable, nameTable)
   })
 }
