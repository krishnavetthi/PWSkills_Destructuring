/*

Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

*/

const person = {
    name: "Krishna",
    age: 26,
    address: {
      street: "Sweet Garden Way",
      city: "Pittsburgh",
      state: "Pennsylvania",
    },
  };


  function objdestructuring(obj){
    let {name,address:{street}} = obj;
    return {name,street};
  }

  console.log(objdestructuring(person))