const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach(  (item) => {
//console.log(item);
return item               // for each does not return value. its undefined
})

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)  // if you add scope {} then add "return" keyword
console.log(newNums);





