
/*
// function calculateCartPrice (...num1){ // here ...num1 ek rest operator hai 
function calculateCartPrice(val1 , vL2 , ...num1){
    // HERE  val1 mai 12 ayga  val2 mai 400 ayega aur baki bachi hui value num1 mai ayegi jese [500 , 2000]
    return num1

}
console.log(calculateCartPrice(12,400,500,2000));

*/

/*

// function with object
 const user = {
    username: "sanjesh",
    price: 400
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)


handleObject({
    username : "sanjesh kumar",
    price: 399
})
*/


//   Function with Array
const myNewArray = [200 ,400 ,100 , 600]
function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 ,400 ,1000 ,600]));

