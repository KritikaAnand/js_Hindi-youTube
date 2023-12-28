const name = "kritika"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kriti-ka-aaa')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4)  // it does not include the last index 
console.log(newString);

const anotherString = gameName.slice(-9,4)  // it also executes on negative value 
console.log(anotherString)

const anotherStringOne = "    Kritika   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());   // it removes extra spaces before and after thr string

//convert string into array => use (split) 

console.log(gameName.split('-'));


