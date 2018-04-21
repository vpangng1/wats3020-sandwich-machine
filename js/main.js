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
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * 0.065;

let totalPrice = subtotal + orderTax;

//Tip calculation

let tips = {
  tenPer: 0.10,
  fifteenPer: 0.15,
  twentyPer: 0.20
};

let tipTenPer = totalPrice + (tips.tenPer * totalPrice);
let tipFifteenPer = totalPrice + (tips.fifteenPer * totalPrice);
let tipTwentyPer = totalPrice + (tips.twentyPer * totalPrice);


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
    <p></p>
    <p></p>
    <p></p>
    <p>Suggested Tip Amounts for your convenience</p>
    <p>--------</p>
    <p>10% - $${tipTenPer.toFixed(2)}</p>
    <p>15% - $${tipFifteenPer.toFixed(2)}</p>
    <p>20% - $${tipTwentyPer.toFixed(2)}</p>
    <p>--------</p>
    <p></p>
    <p></p>
    <p>Tip..... ___________</p>
    


`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
