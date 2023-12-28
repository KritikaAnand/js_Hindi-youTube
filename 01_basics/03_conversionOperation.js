let score = "33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(valueInNumber);

let marks = null
let valueInMarks = Number(marks)
console.log(typeof null);
console.log(marks);
console.log(valueInMarks);

//"33" => 33 
//"33abc" => NaN(not-a-number)
//true => 1 , false => 0 , "" => false , "kittu" => true


// *********************** OPERATIONS ********************************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "kritika"
let str3 = str1 + str2
console.log(str3);

console.log(+true);
console.log(+"");
