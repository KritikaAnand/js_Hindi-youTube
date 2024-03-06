// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

// for of loop works on values 
//for...of loop iterates over iterable objects,
//such as arrays, strings, maps, sets, and other iterable objects.


//It does not iterate over the properties of an object,
// but rather directly accesses the elements or values of the iterable

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    }



    // Maps

    const map = new Map()
    map.set('IN', "INDIA")
    map.set('USA', "United States of America")
    map.set('Fr', "France")
    map.set('IN', "INDIA")

    //console.log(map);       // do not repeat the values. It prints only unique values

for (const key of map) {  // if we  print this way then all the values we get
    //console.log(key);     // are in array format.
    
}

// Right way to print Map is

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// how to iterate on Objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    swift: 'swift by Apple'
}

for (const key in myObject) {
    //console.log(myObject[key]);  // to print the values of object
    //console.log(`${key} is shortcut of ${myObject[key]}`);
}
// for in

const programming = ["js", "rb", "py", "java", "cpp"]
for (const keys in programming) {
   
       console.log(keys); 
    }

    //It's commonly used to iterate over the keys or property names of an object.
    //The for...in loop iterates over the enumerable properties of an object,
    // including properties inherited from its prototype chain.
