// DATE is object in js

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());   //   12/29/2023
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log((Date.now()));


let newDate = new Date()
console.log(newDate.getDay());


newDate.toLocaleString('default' ,{
    weekday: "long",
})







