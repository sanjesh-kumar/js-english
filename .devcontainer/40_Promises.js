// how tocreate promises
/*
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // iska sidha relation .then() ke log se hai kyu is ke bina log nhi run hoga
    }, 1000)

    // console.log();
})

// how to consume Promises.....................................................................

promiseOne.then(function(){    // .then() ka sidha connection hai resolve ke sath jisme hume ek callback function milta hai
    console.log("promise consumed");
}) 

*/


//............................................Jub Promise ko kisi variable mai store na karne per jese
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async task resolve");
})


// **************************************** kis tarike se value cunsumption hoti hai aur value kese ati hai .then()


const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username: "chai", email: "chai@example.com"}) //suppose ki file se value ayi ho resolve function mai
        },1000)
})
promiseThree.then(function(user){
    // console.log(user);
})

// ****************************FourthPromise

const promiseFourth = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username: "hitesh", password: "12345"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

//  const username = promiseFourth.then((user) =>{ // is trah hum isko kisi variable mai nhi rrakh sakte hai
//     console.log(user);
//     return user.username
//  })
//  console.log(username);



promiseFourth.then((user) =>{ 
    // console.log(user);
    return user.username
 }).then((username) =>{    // yha per bhi value ayegi jo .then() ne return kiya hoga jese yha per user return ho rha hai

 }).catch(function(error){
    // console.log(error);
 }).finally(()=>{
    // console.log("The promise is either resolved or rejected"); // ye hamesa chalega
 })
 

//  **********************Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username: "javascript", password: "12345"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)

})

// Another Syntax By async function || iska use bha per karte hai jha per database connect hua hi nhi hai to phir age badne kya matlab
async function consumePromiseFive(){
    const response = await promiseFive
    // console.log(response);

}

// greessfully handle error
async function consumePromiseFive(){
   try{
    const response = await promiseFive
    // console.log(response);
   }cach(error){
    // console.log(error);
   }
}
// consumePromiseFive()

// **************************************************************
// async function getAllusers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch ek url hai
//     const data = response.json()
//     console.log(data);
// }


// 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{ 
    console.log(data);
})
.catch((error) => console.log(error);)



