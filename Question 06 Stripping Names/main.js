"use strict";
/* Question #6 ; Stripping Names:
Store a person's name,and include some whitespaces characters at the beginning and end of the
name. Make sure you use each  character combination,"\t" and "\n" at least once. print the name once,
so the whitespaces around the name is displayed.Then print the name after stripping the white spaces. */
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Hassaan Arain";
// adding whitespaces to person name.
let whitespacedpersonname = `\t${personName}\n`;
console.log(whitespacedpersonname);
// stripping whitespaces in personname. 
let strippedpersonname = whitespacedpersonname.trim();
// now printing stripped person name.
console.log(strippedpersonname);
