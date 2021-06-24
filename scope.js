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