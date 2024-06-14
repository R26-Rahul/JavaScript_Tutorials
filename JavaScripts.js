// Day -1 
// console.log("Hellow") // u can run in node.js this is print hellow 

// Javascript not only browser languge this is also backend or forntend working


// Day -2 ++ veriable 


// avaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

const accountId = 12345 
let accountEmail ="rahul@rai.com" 
var accountPassword='eere676ree'
accountCity= "patna"

let accountState; // this undefined result

// All JavaScript variables must be identified with unique names.
// JavaScript identifiers are case-sensitive.


// accountId =123 // Always use const if the value should not be changed
accountEmail= 'rahul@gmail.com' // Only use let if you can't use const
accountPassword='1234567' // Only use var if you MUST support old browsers.
accountCity="Mumbai"

// console.log(accountId) // using const is not allowed
// console.log(accountEmail,accountId,accountPassword) // u can use this is also 
// console.table([accountEmail,accountId,accountPassword, accountCity,accountState]) // u can use table also 
/* prefer to not use var 
because of issue in block scope and functional scope
*/
// All JavaScript variables must be identified with unique names.
// JavaScript identifiers are case-sensitive.
//   ────────┬───────────────────┐
// │ (index) │ Values            │
// ├─────────┼───────────────────┤
// │ 0       │ 'rahul@gmail.com' │
// │ 1       │ 12345             │
// │ 2       │ '1234567'         │
// │ 3       │ 'Mumbai'          │
// │ 4       │ undefined         │
// └─────────┴───────────────────┘



// day -3  

"use strict"; // treat all jS code as newer version 
// alert (3 +3 ) // we are using node.js not browser 

// data types 
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object



// Day -4  ++ conversion 

// let score = 33 // this is number type 
// let score = "33" // this is string type 

// let score = "33sjdfa" // this is string type 

// console.log(typeof(score))
// console.log(typeof score) // if u want to score in number type 

let valueInnuber = Number(score)


// console.log(typeof(valueInnuber)) // type show : Number
// console.log(valueInnuber) // print out :  NaN

// "33" => 33
// "33sas" => NaN
// true => 1 ; 0=> false
// "rahul" => true ; ""=> false 

let strinNumber= 33 

let stringConvert=String(strinNumber) // this is converting in string 

// console.log(typeof(stringConvert))
// console.log(stringConvert)



// Day -5  +++ Operations ++++++++

let value =3 
let negValue = -value // show all value in - 
//  console.log(negValue) 
//  console.log(2+2)
//  console.log(2-2) 
//  console.log(2*2) 
//  console.log(2**3) 
//  console.log(2/2) 
//  console.log(2%2) 

let sr1 ="hellow"
let str =" rahul "
let str1 = sr1+str
// console.log(str1)

// console.log("1" + 2 ) // 12
// console.log(1 + "2" ) // 12
// console.log(1 + "2" + 2) // 122
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

// console.log(+true )// 1 
// console.log (+"") // 0
let num1 , num2, num3 =2+2 

let gameCounter = 100 
// gameCounter++; // pre-fixed and profixed 
// console.log(gameCounter)

// Day -6 +++++ comperision ++++

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2" > 1)
// console.log("02" > 1)
// console.log(null > 1);
// console.log(null < 1);
// console.log(null == 1);
// console.log(null >= 1);

// console.log(null != 1);

// strick check ===

console.log("2" === 2); // because of string and number  false 
console.log("2" === 3);


// Day -7 ++++++ Primitive ++++++

// 7 type of : ss bb nn u (string , symbol , boolean, Bigint , Number , null , undefind)
const stcer =100 
const stcerValue = 100.3
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;



// Reference (Non primitive)

// Array , Objects , functions 



// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");




