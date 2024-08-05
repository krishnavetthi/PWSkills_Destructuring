/*
You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.
*/

let prompt = require("prompt-sync")();;
let sentence = prompt("Enter sentence :  ");

function countOccurances (str){
    let words = sentence.split(' ');
    console.log(words);
    let map = new Map();
    for(word of words){
        if(map.has(word)){
            map.set(word,map.get(word)+1);
        }else{
            map.set(word,1);
        }
    }
    return map;
}

console.log(countOccurances(sentence));
