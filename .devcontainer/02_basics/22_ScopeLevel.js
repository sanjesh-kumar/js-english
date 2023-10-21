// nested scope
function one(){
    const username = "sanjesh"

    function two(){
        const website = "youutube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(`${username} and ${website}`);
    }
    // console.log(website);
}
// console.log(username);


// **********************************************interesting***************************************************

console.log(addone(5));
function addone(num){
    return num +1
}

addTwo(5)  // is tra hum ise nhi declare kar sakte hai this is wrong way
const addTwo = function(num){  // ise kabhi kabar ise expretion bhi bolte hai
    return num + 2
}
// addTwo(5) 