// à laisser de côté pour l'instant
const fetchMeals = async () => {
    const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsData = await mealsResponse.json();

    return mealsData;
}



const displayMeals = async() => {

    //je fais un appel "fetch" pour récupérer des données depuis une API
    const mealsData = await fetchMeals();

    // je cible la div dans le HTML qui possède l'id root
    const container = document.querySelector('#root');

    // je fais une boucle sur les données récupérées depuis l'API
    // grâce à la fonction map (on pourrait utiliser for ou forEach)
    mealsData.meals.map((mealData) => {


        //créér une balise image pour chaque recette créée
        //donne la src depuis l'API pour afficher l'image
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', mealData.strMealThumb);

        // pour chaque recette de cuisine
        // créé un élément HTML h2
        const h2Element = document.createElement('h2');

        //passe en titre de l'élément le nom de la recette de cuisine récupéré depuis l'API
        h2Element.textContent = mealData.strMeal;

        //affiche la categorie de la recette
        const categoryElement = document.createElement('p')
        categoryElement.setAttribute('class' , 'meal_category')
        categoryElement.textContent = mealData.strCategory;

        //affiche les instructions de la recette
        const instructionElement = document.createElement ('p')
        instructionElement.setAttribute('class' , 'meal_instruction')
        instructionElement.textContent = mealData.strInstructions;


        // j'insère l'élément dans la div qui a l'id #root
        container.append(h2Element , categoryElement , instructionElement ,imgElement );
    })
}


//displayMeals();


//function newArticle(){

    //créé la div qui contint l'article que je rattache au body
    //const article = document.createElement('div');
    //article.setAttribute('class', 'article');
    //document.querySelector('body').append(article);

    //créé la balise titre en h2 que je rattache a la div article
    //const title = document.createElement('h2');
    //title.setAttribute('class' , 'article_title');
    //document.querySelector(article).append(title);

    // créé la balise img que je rattache a la div article
    //const image = document.createElement ('img');
    //image.setAttribute('class', 'article_image');
    //document.querySelector(article).append(image);


//}


//au click sur le bouton, créé la fonction newArticle
document.querySelector("#new").addEventListener('click',() =>{   
    console.log('ici');
    displayMeals();
    
 });
      