"use strict";
// Question # 03: Name Cases: Store a person's name in a variable,and then print that 
// person's name in lowercase,uppercase,n titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Hassaan Arain";
// converting name in lowerCase.
let name_in_lowercase = personName.toLowerCase();
console.log(name_in_lowercase);
// converting name in uppercase.
let name_in_uppercase = personName.toUpperCase();
console.log(name_in_uppercase);
//  converting name in titleCase.
let name_in_titlecase = personName.charAt(0).toUpperCase() +
    personName.slice(1).toLowerCase();
console.log(name_in_titlecase);
let word = personName.split(" ");
let titlecasename = "";
for (let index = 0; index < word.length; index++) {
    titlecasename += word[index].charAt(0).toUpperCase() +
        word[index].slice(1).toLowerCase() + "";
}
console.log(titlecasename);
