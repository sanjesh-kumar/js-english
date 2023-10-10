// Syntax of Function

/*
 function functionName (){
    console.log("sa");
    console.log("nj");
    console.log("es");
    console.log("h");


}

functionName()
*/

/*
function addTwoNumber(number1,number2){ //here number1 and number2 are parameters
    console.log(number1 + number2);

}
addTwoNumber(12,34)  // here 12 and 34 are argument or we can say parameter and values

*/

function addTwoNumber(number1,number2){ 
//   let result = number1 + number2
//   return result

return number1 + number2

}
 const result = addTwoNumber(12,34) 
//  console.log("result: " ,result);

/*
function loginUserMessage (username){
    return `${username} just logged in`
}

loginUserMessage("sanjesh")===> ye Nan value show karega kyuki humne ise kahi bhi print nhi kiya hai 
console.log(loginUserMessage("sanjesh"));
console.log(loginUserMessage()); ===> agar hum kuch argument hi nhi dete hai to ye undefined return karta hai 

*/

/*

function loginUserMessage (username){
    // if(username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
*/

function loginUserMessage (username = "sanju"){  // yha per username = sanju ek default value hai
    // if(username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}

console.log(loginUserMessage());