var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("click");
});
button.addEventListener("mouseenter", function() {
    console.log("menter");
});

var button = document.getElementById("enter");
var value = document.getElementById("input");

button.addEventListener("click", function() {
    console.log("click is working");
});

var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);

// });

button.addEventListener("click", function() {
    console.log(input.value);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

})