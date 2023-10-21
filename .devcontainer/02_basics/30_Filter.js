// Filter map and Reduce in javaScript
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)  // filter method value ko return bhi karta hai

// const newNums = myNums.filter( (num) => {  // is case mai hume empty array milta hai don't use
//     num > 4
// })  

// const newNums = myNums.filter( (num) =>{
//     return num > 4
// })

/* second way by using foreach loop  */

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

/* map() method  */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const newNum = myNumbers.map( (num) => num + 10)

//  console.log(newNum);

//  agar scope lete hai tub return key ka use abasya karte hai jese
//  const newNum = myNumbers.map( (num) => { return num + 10})

/* chaining with map and filter */
const newNum = myNumbers.map( (num) =>num * 10).map((num) => num +1).filter( (num) => num >= 40)
// is pehle bale map se vo value jayegi jo modified hui hai fir second map ke num mai value pass hogi

//  console.log(newNum);


 /* reduce method */

 const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce(function (accumlator,currentValue){
//     console.log(`acc: ${accumlator} and currval ${currentValue}`);

//     return accumlator + currentValue
//  } ,0)

// second way using arrow function
const myTotal = myNums.reduce( (acc ,curr) => acc + curr, 0)

 console.log(myTotal);

