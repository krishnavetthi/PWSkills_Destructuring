/*
You are building a program that takes an array of numbers as input and you need to extract the first, second, and last elements of the array. You decide to write a function that can accomplish this task using destructuring assignment with an array. The function should take the array as an argument, destructure it into three variables representing the first, second, and last elements, and then return an array with these three values. For example, if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].
*/

let array = [1,2,3,4,5];

function access(arr){
    let [first,second,...lastelements] = arr;
    let last = lastelements.pop();
    return [first,second,last]
}

console.log(access(array));