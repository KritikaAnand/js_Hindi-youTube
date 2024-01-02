function addTwoNumbers(num1, num2){
    //console.log(num1+num2);
}
addTwoNumbers(3,6)

function loginUser(username){
    return `${username} just logged in`
} 
//console.log(loginUser("kritika"))

function calculateCartPrice(...num1){     // REST operator -> convert into array
    return num1
}
//console.log(calculateCartPrice(200, 400,700,600,890,345));

function calculateShopPrice(val1, val2, ...num2){    
    return num2
}
console.log(calculateShopPrice(100, 200,400, 400, 789,234));


// *******how to pass objects in function********

const user= {
    username: "kritika",
    price: 199,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//************ ARRAYS IN OBJECTS*************

const newArray = [200,455,345,5656,2425]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));



