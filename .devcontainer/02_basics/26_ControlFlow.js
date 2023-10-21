/*
if Statement

if(condition){

}
*/

/*
const isLoggedIn  = true
const temp = 41
if( temp === 41){
    console.log("yes less than 50");
}
else{
    console.log("No less than 50");
}


// <, >, <=, >=, ==, !=, ===, !==
// === ye operator type bhincheck karta hai jaise 2=== "2"

*/

/*

const score = 200
if(score > 100){
    const power = "fly"
    // var power = "fly" kyu ki ye global access hota hai outside the scope
    console.log(`User power: ${power}`);
}
// console.log(`user power: ${power}`);

*/

//  **************** short hand note

const balance = 1000
// if(balance > 500) console.log("test");

// const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("test2");

/*

const userLoggedIn = true
const debitcard =  true

const loggedInEmail = true
const loggedInGoogle = false
if(userLoggedIn && debitcard){
    // console.log("Allow to buy course");
}

if(loggedInEmail || loggedInGoogle){
    console.log("Allowed to buy udemy course");
}
*/


/*
const month = 3
switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("february");
        
        break;
    case 3:
        console.log("march");
        
        break;

    default:
        console.log();
        break;

 */


const month = "feb" // String value
switch (month) {
    case "jan":
        console.log("january");
        
        break;
    case "feb":
        console.log("february");
        
        break;
    case "mar":
        console.log("march");
        
        break;

    default:
        console.log();
        break;
}


/**********************************************Truthy and falsey value concept */
// const userEmail = "sanjesh@g,ail.com"
const userEmail = []
if(userEmail){
    // console.log("Got the email")
}
else{
    // console.log("don't have email");
}
// Falsy Value:- false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy Value:- "0", 'false', " ", [], {}, function(){}


/****** How to detect that Array is Empty or not ********************** */
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

/** How to detect that Object is empty or not */
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

/************  Nullish Coalescing Operator (??): nll undefined */
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 200   

// console.log(val1);


//  ternary operator
const iceTeaPrice = 100
iceTeaPrice <= 90 ? console.log("less than 90") : console.log("more than 90");
 
