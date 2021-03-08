const foodSearch = foodCode => {
    foodCode = document.getElementById('foodName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodCode}`)
    .then(res => res.json())
    .then(data =>foodDisplay(data))

}

const foodDisplay = foodName => {
    const foodName1 = foodName.meals;
    let foodFrame = document.getElementById('foodItem');
    let foodIngredient = document.getElementById('foodIngredient');
    foodFrame.innerHTML = '';
    foodName1.forEach(eachFood => {
        const name = eachFood.strMeal;
        // console.log(name);
        const image = eachFood.strMealThumb;
        const foodFrameTem = document.createElement('div');
        foodFrameTem.innerHTML = '';
        const info = ` <div onclick= "singleItem('${name}')" >
        <img  src='${image}' style='width: 250px;'>
        <h5> ${name}</h5>
        </div>
        `;
        foodFrameTem.innerHTML = info;
        foodIngredient.innerHTML ='';
        foodFrameTem.className = 'foodFrame';
        foodFrame.appendChild(foodFrameTem);
    });  
}

const singleItem = parameter => {
    // console.log(parameter);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${parameter}`
    fetch(url)
    .then(res => res.json())
    .then(data => Instruction(data.meals[0]))
}

const Instruction = item => {
    const name = item.strMeal;
    const img = item.strMealThumb;
    const foodIngredient = document.getElementById('foodIngredient');
    foodIngredient.className = 'foodIngredient'
    for (let i = 1; i < 12; i++) {
        // const array = [];
        // array[i] = item[`strIngredient${i}`];   // item.strIngredient1, item.strIngredient2,item.strIngredient3 ...
        const array=[];
        const ingredient = 'strIngredient'+i;
        array[i] = item[ingredient ];  
        console.log(array[i]); 
    }
    
    const info1 = `
        <div id='ingredientDiv'>
        <img src='${img}' style='width: 450px; height: 300px'> 
        <h3 style= 'width: 450px;' class='text' class='text'> ${name}</h3>
        <h5 class='text'> Ingredient</h5>
        <p class='text'>${item.strIngredient1}</p>
        <p class='text'>${item.strIngredient2}</p>
        <p class='text'>${item.strIngredient3}</p>
        <p class='text'>${item.strIngredient4}</p>
        <p class='text'>${item.strIngredient5}</p>
        <p class='text'>${item.strIngredient6}</p>
        </div>
    `;
    foodIngredient.innerHTML = info1;
}