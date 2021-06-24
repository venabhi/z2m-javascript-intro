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

function moving(direction) {
    var whathappen;
    switch (direction) {
        case "forward":
            whathappen: "encounter a monster s";
            break;
        case "left":
            whathappen: "found a river";
            break;
        case "back":
            whathappen: "enter home";
            break;
        case "right":
            whathappen: "enter right";
            break;


    }
    return whathappen;
}