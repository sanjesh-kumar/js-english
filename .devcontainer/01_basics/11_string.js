const name = "sanjesh kumar"
const repoCount = 50
// console.log(name + repoCount + " values");
//  morden way string concatination
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//  Another way to declare String
const gameName = new String('hitesh-hc')
// access element
console.log(gameName[0]);
console.log(gameName[1]);

// To check prototype
console.log(gameName.__proto__); // it will give object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

// sliceing
// const newString = gameName.substring(0 , 4);
// console.log(newString);

// const anotherString  = gameName.slice(-8 , 4);
// console.log(anotherString);

// trim()
// const newStringOne = "  sanjesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20" ,"-"));


console.log(url.includes('hitesh'));

console.log(gameName.split('-'));
