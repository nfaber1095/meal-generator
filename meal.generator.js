let meals = [
    {
        name: 'Breakfast',
        ingredients: '',
    },
    {
        name: 'Pizza and wings',
        ingredients: '',
    },
    {
        name: 'Cheese burger and fries',
        ingredients: '',
    },
    {
        name: 'Pork chops and rice',
        ingredients: '',
    },
    
    {
        name: 'Dino nugs and fries',
        ingredients: '',
    },
    {
        name: 'Chicken and rice',
        ingredients: '',
    },
    {
        name: 'Order out',
        ingredients: '',
    },
    {
        name: 'Sauce',
        ingredients: '',
    },
    {
        name: 'Goulash',
        ingredients: '',
    },
    {
        name: 'GF General Tsao',
        ingredients: '',
    },
    {
        name: 'BBQ Chicken',
        ingredients: '',
    },
    {
        name: 'Tacos',
        ingredients: '',
    },
    {
        name: 'Chicken alfredo',
        ingredients: '',
    },
    {
        name: 'Calzones',
        ingredients: '',
    },
]; 
let typeOfSauce = ['Baked ziti with meatballs', 'Lasagna', 'Spaghetti with meatballs', 'Chicken parm', 'Ravioli'];
let typeOfBreakfast = ['Quesadillas', 'Wraps'];
let tempMeals = meals.slice();
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');
let saturday = document.getElementById('saturday');
let sunday = document.getElementById('sunday');
let thisWeek = [];

// Picks random meal name from meals array of objects 
function mealPicker () {
    for (let i = 0; i < 8; i++) { 
        const randomMeal = Math.floor(Math.random() * tempMeals.length);
        let choice = tempMeals[randomMeal].name;
         if (choice === 'Sauce') {
       			choice = typeOfSauce[Math.floor(Math.random() * typeOfSauce.length)];
         }
         if (choice === 'Breakfast') {
            choice = typeOfBreakfast[Math.floor(Math.random() * typeOfBreakfast.length)];
         }
        thisWeek.push(choice);
        tempMeals.splice(randomMeal, 1);
   
    } 
}
//Assigns randomly generated meal to a day of the week
function assignMeals() {
  mealPicker();
  monday.innerText = thisWeek[0];
  tuesday.innerText = thisWeek[1];
  wednesday.innerText = thisWeek[2];
  thursday.innerText = thisWeek[3];
  friday.innerText = thisWeek[4];
  saturday.innerText = thisWeek[5];
  sunday.innerText = thisWeek[6];
}

const mealMenu = document.getElementById('dropdown');

const newMealName = document.getElementById('new-meal-name');

function addMeal() {
    meals += newMealName.value
}


/*(function dropdownMenuItems() {
    for (i = 0; i < meals.length; i++) {
        mealmenu.innerHTML += `<option value="???"`
    }
}
*/

function reset() {
tempMeals = meals.slice();
monday.innerText = '';
tuesday.innerText = '';
wednesday.innerText = '';
thursday.innerText = '';
friday.innerText = '';
saturday.innerText = '';
sunday.innerText = '';
}



button1.addEventListener('click', assignMeals);
button2.addEventListener('click', reset);
button3.addEventListener('click', addMeal);


/* TO DO
add editable page of meals with ingredients. dropdown will need innerHTML to add new options as they are added.
Make the page look nice 
Ingredients, shopping list?
*/