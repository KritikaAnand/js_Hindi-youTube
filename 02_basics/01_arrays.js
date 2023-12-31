var countries = ["INDIA", "USA", "JAPAN", "PARIS"];

var states = new Array("Rajasthan", "Delhi", "Mumabai", "Assam")

//console.log(states[0]);     //acessing the array element at 0th position

//console.log(states.length);

var userData = ["kritika", "kritikaa987@gmail.com", 20, true];  //we can store multiple data types values in array
//console.log(userData);

userData.pop();   // pop() deletes the elements from end

//console.log(userData);

userData.unshift("NEW VALUE");  //adds the value at the start of an array
//console.log(userData);

userData.shift();   //removes the first element from an array
//console.log(userData);

// convert string into array

//console.log(Array.from("kritika"));

const marvel =["spiderman", "thor" , "Ironman"]
const dc = ["superman", "flash" , "batman"]

//marvel.push(dc)
//console.log(marvel);

const allHeros = marvel.concat(dc)
console.log(allHeros);

//********************** CONCAT and SPREAD (...)gives the same output */
//*********breaking a glass for example */

const new_allHeros = [...marvel, ...dc]
//console.log(new_allHeros);

console.log(Array.isArray("kritika"));  //checks if it is array or not TRUE or FALSE
console.log(Array.from("kritika"));     //convert it into array
console.log(Array.from({name:"kritika"}));// intresting



let score1 = 100; 
let score2 = 200; 
let score3 = 300; 
console.log(Array.of(score1, score2, score3)); // it converts all values in an array



