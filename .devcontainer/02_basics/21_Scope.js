var c = 300  // ye ek globle variable

let a = 400
if(true){
    let a = 10
    // const  b = 20
    c = 30

    console.log("inner: ", a);


    // var c = 30  ===>  here per var ki  value if block ke bahr print nhi honi chahiye tha phir bhi iski value 
    // bahr print ho rhi hai isi liye var ko hum use nhi karte hai
}


console.log(a);
// console.log(b);
// console.log(c);