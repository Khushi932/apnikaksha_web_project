let bread1= prompt("Which bread would you like to have:");
let veggies1 = prompt("Enter veggies to add");
let sauce1= prompt("Enter sauce name");

function makesandwich(bread, veggies, sauce){
    let sandwich = bread + "bread"+veggies+" "+ sauce+" sandwich ";
    return sandwich;
}
let vegsandwich = makesandwich(bread1, veggies1, sauce1);