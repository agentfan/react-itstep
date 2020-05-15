import {name7} from "./_help.js"

let student = {
    name: "Victor",
    surname: "Nagorniy",
    age: 42
};

// let {name, surname, age} = student;

let student1 = {
    name: "Victor",
    surname: "Nagorniy",
    age: 42
};

let {name, ...all} = student1;
console.log(all);

let summ = (a,b) => {
    return a+b;
}

console.log(summ(2,3));

let myAge = 42;
console.log(`May age = ${myAge}`);

let p = new Promise( (resolve, reject)=>{
    throw new Error("ERROR NOT FOUND");
} );

console.log(name7);

