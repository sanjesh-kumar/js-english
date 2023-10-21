//for of

["", "",""]
[{},{},{}]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greeting = "Hello world!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
}


/* Maps */
// const map = new Map()
// map.set('IN',"india")
// map.set('Fr',"france")
// map.set('IN', "india") ==> map ke under identical value nhi aa sakti hai

// console.log(map);
// console.log(typeof map);  // ===> it is object

// for (const [key, value] of map) {
    // console.log(key, ':-', value)
    
// }

/* Agar hum ek object ko le tub kya hoga */
// const myObject ={
//     'game1': 'NFS',

//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);

    
// }
// object ke case mai hume error milti hai

const myObject1 = {
    js: 'javacript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop

for (const key in myObject1) {
    // console.log(myObject1[key]);
    // console.log(`${key} shortcut is for ${myObject1[key]}`);
}

// Deffirent between forof loop and forin loop
// forof loop mai key print karane per value milti hai jubki forin loop mai key print karane per key milti hai

const programming = ["js", "rb", "py", "java","cpp"]

for(const key in programming){
    // console.log(key);
    // console.log(programming[key]);
}


// Maps in forin loop
const map = new Map()
map.set('IN',"india")
map.set('Fr',"france")

for (const key in map) { // ===> is tarah map mai itration nhi kiya ja sakta
    // console.log(key); 
}

// foreach loop 
const coding = ["js", "ruby", "java", "python","cpp"]
coding.forEach(function(val){
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)


coding.forEach( (item , index, arr)=>{
    // console.log(item, index, arr);
})

/*  how to access value of object inside of array  */


const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})

