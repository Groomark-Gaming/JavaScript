//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    console.log(`db connected`);//  NAMED IIFE
    
})();       //USE "  ;  " TO END FUNCTION FOR NO ERROR

// to remove global scope pollution we use iife

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);//  UNNAMED IIFE
    
} ) ("GROOMARK")