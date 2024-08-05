/*
You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.
*/

let prompt = require("prompt-sync")();;
let numbers = prompt("Enter numbers with commas seperated :  ");

let set = new Set(numbers.split(','));
console.log(set)