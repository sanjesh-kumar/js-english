// immediately invoked Function Expression (IIFE)

// Global ke function ke polution ko rokne liye hm iffy ka use karte hai

(function chai (){      // this is  name IIFE  kyuki iska ek name hai
    console.log(`DB connetion`);
})();

// By use Arow function
( () => {
    console.log(`DB Connetion `);
})()

( (name) => { // unnamed IIFE
    console.log(`DB Connetion Two ${name}`);
})("sanjesh")

