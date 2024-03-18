/* Question#12; Greetings:
                Start with the array you need in exercise 11,but instead
                of just printing each person's name,print a message to them.
                The text of each message should be the same,but each message
                should be personalized with the person's name.
*/
let names:string[]=["Farhan","Sarim","Abrar"];
// First Method.
let message="How's your day going?";
for (let index = 0; index < names.length; index++) {
    console.log(`Hello! ${names[index]}, ${message}`)};

    // Second method.
names.forEach(names =>{console.log (`Hello! ${names} how's your day going?`)});