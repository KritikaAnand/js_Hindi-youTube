const mySym = Symbol("Developer")


const user = {
    name: "kritika",
    "fullName": "Kritika anand",
    role: "Admin",
    [mySym] : "Developer",                 // to get the symbol datatyoe use []
    login: " true",                          //declaration og object
    id: 22,
    lastLoggedin: ["Monday", "Saturday"]
}

console.log(user.name);                     //accessing of object
console.log(user["role"]);                  //star
console.log(user.fullName);
console.log(mySym);

const course = {
    title: "javascript",
    lecture : 3,
    section : 5,
    notes:{
        intro: "welcome to js"         //nesting of objects
    },
    enroll(){
        console.log("sucessfully enrolled");   /*FUNCTION IN OBJECT */
    }

}

user.greeting = function(){
    console.log("Hello user");
}

console.log(user.greeting());
console.log(user.greeting);

course.enroll()


