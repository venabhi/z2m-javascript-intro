// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("click");
// });
// button.addEventListener("mouseenter", function() {
//     console.log("menter");
// });

// var button = document.getElementById("enter");
// var value = document.getElementById("input");

// button.addEventListener("click", function() {
//     console.log("click is working");
// });

// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);

// });

// button.addEventListener("click", function() {
//     if (input.value.length > 0) {
//         console.log(input.value);
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value("");
//     };

// })

//  write in order 

var button = document.getElementById("enter");
var value = document.getElementById("input");
var ul = document.querySelector("ul");

function inputlength() {
    return input.value.length;
}

function createElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function listafter(event) {
    if (inputlength() > 0) {
        createElement();
    };
}

function keyafter(event) {
    if (inputlength() > 0 && event.keycode === 13) {
        createElement();
    };
}

button.addEventListener("click", listafter);

value.addEventListener("keypress", keyafter);