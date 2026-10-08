//variables
let name ="dario";
let age = 21;
let isStudent = true;

// array
let gudgets =["cellphone", "Laptop", "TV"];
let numbers = [5,10,15];
let colors = ["black","White","orange"];

//conditions
if(age >=18){

    console.log(name + "is an adult person.");
}
if(isStudent){
    console.log(name + "is a student.");
 }
 if(numbers[0] < numbers[1]){
    console.log("9 is less than 10.");
 }

 //loops
 for (let i = 0; i < gudgets.length; i++){
    console.log(gudgets[i]);
 }

 let j = 0;
 while (j <  numbers.length){
    console.log(gudgets[j]);
    j++;
 }
 for(let color of colors){
    console.log(color);
 }
