"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using node js not browser

// Data types

let name = "linus"
let age = 24
let isLoggedIn = false
let state;

/*
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique
*/

// object

console.log(typeof undefined); //undefined
console.log(typeof null); // object


// Primitive *search about it

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt


// Referece (Non primitive)

// Array, Objects, Functions


const id = Symbol("123");
const anotherId = Symbol('123');
// console.log(id === anotherId)

//array
const names = ["linus","zeus",2]

console.log(typeof names[2]);

let myObj = {
    name:"linus",
    age:"22",
}
console.log(myObj)

const myFunc = function(){
    console.log("hello world");
}
myFunc()