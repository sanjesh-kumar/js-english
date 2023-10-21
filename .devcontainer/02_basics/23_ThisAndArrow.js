// const user  ={
//     username: "sanjesh",
//     price: 999,


//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`); // yha this ka use current context contend ke roop mai hota hai
//         // console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "sanju"
// user.welcomeMessage() // ab ye current context ko dekhe ga jese username = sanju
// console.log(this);

/*
function chai (){
    let username = "sanjesh"
    console.log(this);
    console.log(this.username);
}
chai()



 const chai = function  (){
    let username = "sanjesh"
    // console.log(this);
    console.log(this.username);
}
chai()

*/

// ********************************** Arrow Function **********************************
const chai = () => {
    let username = "hitesh"
    console.log(this);
    // console.log(this.username);
}
// chai()

/*

// const addTwo = (num1 ,num2) => {
//     return num1 + num2

// }
*/

// const addTwo = (num1 ,num2) => num1 + num2 // this is another way to define arrow function
// const addTwo = (num1 ,num2) => (num1 + num2)
// agar hum curly bracket ka use karte hai to return key ka use karte hai or agar square bracket ka use karte hai to return key ka use nhi karte hai

const addTwo = (num1 ,num2) => ({username: "sanjesh"}) // yeha per hum object ko return kar rhe hai


console.log(addTwo(3  ,4));


