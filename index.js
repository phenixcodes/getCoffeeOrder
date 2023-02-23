// Coffee shops don't have an endless number of
// options for coffee size, creamer, and sweetener!
// In this problem, you'll be writing code that
// simulates a system that verifies someone's coffee
// order is valid. 

// Create a function called `verifyCoffeeOrder`
// that takes in three String parameters: "size",
// "creamer", and "sweetener". The function should
// do the following:

//   * If size's value is neither "small" nor
//    "large", return the message "Not a valid size"
//   * If creamer's value is neither "milk" nor "half
//    and half", return the message "Not a valid creamer"
//   * If sweetener's value is neither "sugar" nor
//   "splenda", return the message "Not a valid sweetener"

// If all three arguments are valid (meaning all the
// conditions in the bullets above are met), return 
// the message:
// "A <size> cup of coffee with <creamer> and <sweetener>."
// Where you'll substitute the matching.

// For example:
//   verifyCoffeeOrder('small', 'milk', 'sugar');
//   Returns: 'A small cup of coffee with milk and sugar.'

//   verifyCoffeeOrder('medium', 'skim', 'syrup');
//   Returns: 'Not a valid size'
// return ['small', 'large'].contains(size); }

// Write your function here.

//Boolean functions to verify valid inputs for each condition
function isValidSize(size) {
    return (size === 'small' || size === 'large') ? true : false;
}
function isValidCreamer(creamer){
    return (creamer === 'milk' || creamer === 'half and half') ? true : false;
}
function isValidSweetener(sweetener){
    return (sweetener === 'splenda'|| sweetener === 'sugar') ? true : false;
}

// if all arguments meet all requirements, the function will state the coffee order
function verifyCoffeeOrder(size,creamer,sweetener){
    return  (!isValidSize(size)) ? "Not a valid size" :
            (!isValidCreamer(creamer)) ? "Not a valid creamer" :
            (!isValidSweetener(sweetener)) ? "Not a valid sweetener" : 
            "A " + size + " cup of coffee with " + creamer + " and " + sweetener + ".";
}


//test case, make sure the IDE/terminal can run the prompt function before testing
console.log("Welcome in! Let me brew a cup of coffee for yah!");
console.log("Coming right up!");
console.log(verifyCoffeeOrder(prompt("What size would you like?"), prompt("What kind of milk?"), prompt("Which type of sweetener?")));

// Do not modify the line below, this is a 
// special function to run the tests.
module.exports = { verifyCoffeeOrder };