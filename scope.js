var nam = "heloo"

function fun() {
    var nam = "abhi";
    console.log(1, nam);
}

function funner() {
    var nam = "ram";
    console.log(2, nam);
}

function funniest() {
    nam = "hiii";
    console.log(nam);
}
console.log(window, nam);
fun();
funner();
funniest();
//  example

// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }

//  switch javascript condition 
//  we can use more and more case 

//  let and const
const player = "bobb";
let experience = 100;
let level = true;

if (experience > 95) {
    let level = false;
    console.log("inside", level);

}
console.log("outside", level);

//  templete string
const name = "abhi";
const age = 90;
const pet = "dog";

const greeting = `hiii ${name} you seem to be ${age}. what a lovely ${pet} you have.`

const names = "ram";
const ages = 90;

const man = `hii ${names}. your age is ${ages}.`

//  default arguments
function sss(name = "", age = "90") {
    return `haiii ${name}. your ${age}`;
}
sss();

function ddd(name = "abhi", age = 90) {
    return `hii ${name}. your ${age}`;
}

//  arrow functions
//  we can write a function in one single line
// const add = (a, b) arrow a+b;

//  es7 methods

const pets = ['dog', 'cat'];
pets.includes('dog';)

const square = (x) => x ** 2;
square(2)

const cube = (x) => x ** 3;
cube(4)

const mu = (x) => x ** 4;
mu(5)

// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num ** 100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result.

power100(10000) // Infinity

"abhiram".padStart(10);

"chebrolu".padEnd(10);

"ram".padStart(5);

const fu = (a, b) => {
    console.log(a);
}
fu(1, 2)

//  object keys, values, entries

let obj = {
    user0: 'abhi',
    user1: 'ram'
}

object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

object.values(obj).forEach(values => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

object.entries(obj).forEach(value => {
    console.log(value);
})
object.Objectfromentries(obj)


//  es10 flat(), trimstart, trimend

const va = [1, 2, [3, 4], ]
va.flat(5)

const uemail = "      vchdh.com";
const ue2 = "vdhdh.com        ";
console.log(uemail.trimStart())
console.log(ue2.trimEnd())

//  try and catch same li try except inj python 

//  try will 

try {
    4 + 5
} catch (err) {
    console.log('messed' + error);
}

try {
    true + 'hii'
} catch (error) {
    comsole.log('messed' + error)
}