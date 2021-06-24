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