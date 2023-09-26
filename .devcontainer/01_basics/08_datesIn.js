//dates
let myDate = new Date()  // this is instance object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23 ,5 ,3)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-23-2023")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // isme hum time ko nikalte hai taki hum jub compare kare time stap ko to jan sake 
// console.log(Date.now()/1000) // To get a time in second

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getMonth());

// String manipulation
// `${newDate.getDate()} and the time`

// costumized localeStrig
newDate.toLocaleString('default',{
    weekday: "long",

})
