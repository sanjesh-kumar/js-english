// datatype

// Primitives datatype
// 7 type: String , Number , Boolean , null , undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 3982487475298294n

// Referenced (non primitive)
// Array , object ,Function

const heros = ["ironman" ,"Deadpool","Spiderman" ,"Woolvorine"];  // thia  is Array

let myObj ={        // This is Object
    name : "sanjesh",
    age: 23,

}

const myFunction = function(){   // This is function 

    // console.log("hello World ...");
}

// console.log(typeof(bigNumber));
// console.log(typeof(outSideTemp));   // this is return object type
// console.log(typeof(myFunction));


// ************************************Satck And Heap Memory*************************************//
/*
 Stack   ===> (used for primitive type value) isme hum jo bhi variable declared karte hai uski ek copy 
                    milti hai.
 
 Heap   ===> (used for non- primitive value) isme hum jo bhi variable declared karte hai uski hume ek 
                reference milta hai.
                */

let myYoutubeName = "sanjeshRajput"
let anotherName = myYoutubeName
anotherName = "Abhishekpal"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "sanjesh@gmail.com",
    upi: "user@tbl"
}

let userTwo = userOne
userTwo.email = "abhishekPal@gmail.com"

console.log(userOne);
console.log(userTwo);






















