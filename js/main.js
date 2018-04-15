/* JavaScript for WATS 3020 Sandwich Machine Assignment */

//Prompt user for type of bread, meat, topping, and condiment

let breadType = prompt('What kind of bread do you like? (white, wheat, flat)');

let meatType = prompt('What kind of meat(s) do you like (separate meats with commas if including more than one)');

let toppingType = prompt('What kind of topping(s) do you like (separate toppings with commas if including more than one)');

let condimentType = prompt('What kind of condiment(s) do you like (separate condiments with commas if including more than one)');

//Calculate cost based on user input 

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meatType.split(',');
let toppingArray = toppingType.split(',');
let condimentArray = condimentType.split(',');


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentType.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * 0.065;

let totalPrice = subtotal + orderTax;

//Display receipt to user based on calculations above

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadType}</p>
    <p>Meat: ${meatType}</p>
    <p>Toppings: ${toppingType}</p>
    <p>Condiments: ${condimentType}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
