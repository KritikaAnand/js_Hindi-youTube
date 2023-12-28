const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id == anotherId);     //false, both are different i.e unique

const bigNumber = 387546874598349067874567n  // bigInt


//******************* ARRAY, OBJECT, FUNCTIONS ********************

const heros =["shaktiman", "ironman", "spiderman"]
{
    name: "kritika"             //objects are written in curly braces.
    age: 20

}

//*****functions */

const myFunction = function(){
    console.log("Hello world");
}


//**************** TYPES OF MEMORY *************/

//STACK(primitive) , HEAP(Non-primitive)

let myYoutubename = "kritikaanand.com"

let anotherName = myYoutubename
anotherName ="chai aur code"           // STACK
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",           //HEAP
    upiid: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kritika.2704@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

