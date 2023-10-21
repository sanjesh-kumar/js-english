
//for Loop

let myArray = ["flash", "batman","spiderman"]
// console.log(myArray.length);
 
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
/*
for(let i = 1; i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j = 1; j<=10; j++){
        // console.log(i + '*' + j + '=' + i*j);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

 */

// break and continue

// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log(`Value detected as: ${index}`);
//         break

//     }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`Value detected as: ${index}`);
        continue

    }
    console.log(`Value of i is ${index}`);
    
}
