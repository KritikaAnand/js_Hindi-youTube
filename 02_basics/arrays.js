var countries = ["INDIA", "USA", "JAPAN", "PARIS"];

var states = new Array("Rajasthan", "Delhi", "Mumabai", "Assam")

//console.log(states[0]);     //acessing the array element at 0th position

//console.log(states.length);

var userData = ["kritika", "kritikaa987@gmail.com", 20, true];  //we can store multiple data types values in array
console.log(userData);

userData.pop();   // pop() deletes the elements from end

console.log(userData);

userData.unshift("NEW VALUE");  //adds the value at the start of an array
console.log(userData);

userData.shift();   //removes the first element from an array
console.log(userData);

// convert string into array

console.log(Array.from("kritika"));