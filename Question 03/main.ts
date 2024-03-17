// Question # 03: Name Cases: Store a person's name in a variable,and then print that
// person's name in lowercase,uppercase,n titlecase.

let personName: string = "Hassaan Arain";

// converting name in lowerCase.
let name_in_lowercase: string = personName.toLowerCase();
console.log(name_in_lowercase);

// converting name in uppercase.
let name_in_uppercase: string = personName.toUpperCase();
console.log(name_in_uppercase);

//  converting name in titleCase.
// first method.
// in this method we can only convert one word to title case.
let name_in_titlecase: string =
  personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(name_in_titlecase);

// second method.
// in this method we can convert multiple word in titlt case even complete sentences.
// step 1,
let word: string[] = personName.split(" ");
// step 2,
let titlecasename: string = "";
// step 3,
for (let index = 0; index < word.length; index++) {
  titlecasename +=
    word[index].charAt(0).toUpperCase() +
    word[index].slice(1).toLowerCase() +
    "";
}
console.log(titlecasename);
