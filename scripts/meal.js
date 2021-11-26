/*** Generate meal based on option selected***/ 

//Putting all the meal button elements in an array
let mealButtons = [document.getElementById('budgetButton'), 
                   document.getElementById('toplineButton'), 
                   document.getElementById('surpriseButton')];

//Putting all the meal item elements to a variable
const mealClassicBurger = document.getElementById('mealClassicBurger');
const mealSpaghettiBolognese = document.getElementById('mealSpaghettiBolognese');
const mealClassicChips = document.getElementById('mealClassicChips');
const mealGreekSalad = document.getElementById('mealGreekSalad');
const mealIcedTea = document.getElementById('mealIcedTea');

//Setting up meal item arrays based on criteria
let allMealItems= [mealClassicBurger, mealSpaghettiBolognese, mealClassicChips, mealGreekSalad, mealIcedTea]
let budgetMeal = [mealClassicChips, mealGreekSalad, mealIcedTea]; 
let toplineMeal = [mealClassicBurger, mealSpaghettiBolognese, mealClassicChips];
//This will add 3 random meal items to the surpriseMeal array everytime the page reloads
var threeRandomNumbers = generateThreeRandomNumbers(); //Assign to an array variable the three random numbers generated from the function generateThreeRandomNumbers()
let surpriseMeal = [allMealItems[threeRandomNumbers[0]], allMealItems[threeRandomNumbers[1]], allMealItems[threeRandomNumbers[2]]];


//Will run the showMeal function if any of the buttons are clicked
for (let i=0; i < mealButtons.length; i++) {
    mealButtons[i].addEventListener('click', showMeal);
}

//This function will show/hide the meals based on the option button selected
function showMeal() {
    document.getElementById('placeholderMeal').className = "container-fluid yourMealHide";
    if (event.target.id === 'budgetButton') {
        for (let i=0; i < surpriseMeal.length; i++) {
            surpriseMeal[i].className = "col yourMealHide";
        } 
        for (let i=0; i < toplineMeal.length; i++) {
            toplineMeal[i].className = "col yourMealHide";
        }
        for (let i=0; i < budgetMeal.length; i++) {
            budgetMeal[i].className = "col";   
        }        
    } else if (event.target.id === 'toplineButton') {
        for (let i=0; i < surpriseMeal.length; i++) {
            surpriseMeal[i].className = "col yourMealHide"; 
        }
        for (let i=0; i < budgetMeal.length; i++) {
            budgetMeal[i].className = "col yourMealHide";   
        }
        for (let i=0; i < toplineMeal.length; i++) {
            toplineMeal[i].className = "col";
        }    
    } else if (event.target.id === 'surpriseButton') {
        for (let i=0; i < budgetMeal.length; i++) {
            budgetMeal[i].className = "col yourMealHide"; 
        }
        for (let i=0; i < toplineMeal.length; i++) {
            toplineMeal[i].className = "col yourMealHide";
        }
        for (let i=0; i < surpriseMeal.length; i++) {
            surpriseMeal[i].className = "col";   
        }
    }
}

//This function will add 3 unique random numbers to the set then convert the set to an array and return the array
function generateThreeRandomNumbers() {
    const threeRandomNumbersSet = new Set();
    while(threeRandomNumbersSet.size < 3) {
        threeRandomNumbersSet.add(Math.floor(Math.random() * allMealItems.length)); //Generate a random number from 0 to the length of allMealItems array
    }
    threeRandomNumbers = Array.from(threeRandomNumbersSet); //convert set to array
    return threeRandomNumbers;
}








