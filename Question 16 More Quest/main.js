"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Question#16; More Guests:
                You just found a bigger dinner table, so now more space is available. Think of three
                more guests to invite to dinner.
            •   Start with your program from Exercise 15. Add a print statement to the end of your program
                informing people that you found a bigger dinner table.
            •   Add one new guest to the beginning of your array.
            •   Add one new guest to the middle of your array.
            •   Use append() to add one new guest to the end
                of your list.
            •   Print a new set of invitation messages, one for each person in your list.
 */
let guests = ["Mr John", "Miss Catherine", "Mrs David"];
console.log("Better News!!   I just found a bigger dinner Table.");
guests.unshift("Miss Amelia");
guests.splice(2, 0, "Mr Jack");
guests.push("Sir Henry");
guests.forEach((guests) => {
    console.log(`${guests},
   You are invited for a delightful dinner gathering on 8th of April 2024 at 
   house#c20,street 4,California.
       Regards "Hassaan"`);
});
