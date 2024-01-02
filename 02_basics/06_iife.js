// IIFE (Immediately Invoked Function Expression)

(function chai(){                        //named IIFE
    console.log(`DB CONNECTED`);
})();

//USECASE => global scope k pollution se problem hoti hai ussey bachne k liye use IIFE
// use two IIFE in same file, by separating them by (;) semi-colon

( () => {
    console.log(`DB CONNECTED TWO`);    //unnamed IIFE
})();



( (name) => {                            //passing perameter in IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("kritika");









