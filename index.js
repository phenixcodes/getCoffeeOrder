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

// Write your function here.

//verifying if the size parameter is valid
function getSize(size){
    switch(size){
        case 'small' :
            return size; 
        case 'large' :
            return size;
        default :
            return 'Not a valid size';
    }
}
//verifying if the creamer parameter is valid
function getCreamer(creamer){
    switch(creamer){
        case 'milk' :
           return creamer;
        case 'half and half':
            return creamer;
        default :
            return'Not a valid creamer';
    }
}
//verifying if the sweetener parameter is valid
function getSweetener(sweetener){
    switch(sweetener){
        case 'sugar' :
            return sweetener;
        case 'splenda' :
            return sweetener;
        default :
            return 'Not a valid sweetener';
    }
}
//function will verify if all conditions for a coffee order have been met
function verifyCoffeeOrder(size,creamer,sweetener){

    //calling the above functions, then assigning the results to a variable
    var isSize = getSize(size);
    var isCreamer = getCreamer(creamer);
    var isSweetener = getSweetener(sweetener);

    //if any parameter is proven invalid, the function will reveal the invalid string to the user
    if (isSize === 'Not a valid size'){
        return isSize;
    }
    else if (isCreamer === 'Not a valid creamer'){
        return isCreamer;
    } 
    else if (isSweetener === 'Not a valid sweetener'){
        return isSweetener;
    }
    // if all parameters meet the requirements, the function will state the coffee order
    else {
        console.log("Coming right up!");
        return "A " + size + " cup of coffee with " + creamer + " and " + sweetener + ".";
    } 
}

//test case, make sure the IDE/terminal can run the prompt function before testing
console.log("Welcome in! Let me brew a cup of coffee for yah!");
console.log(verifyCoffeeOrder(prompt("What size would you like?"), prompt("What kind of milk?"), prompt("Which type of sweetener?")));

// Do not modify the line below, this is a 
// special function to run the tests.
module.exports = { verifyCoffeeOrder };