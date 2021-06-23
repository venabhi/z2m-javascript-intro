//  exercise looping

var database = [{
        username: "abhi",
        passw: "abhi"
    },
    {
        username: "ram",
        passw: "rams"
    },
];

var newsfeed = [{
        username: "abhi",
        timeline: "abhivv"
    },
    {
        username: "ram",
        timeline: "ramshhh"
    },
];

//  function for not getting error if given user is valid directly u will get newsfeed no interuption
//  connection between two functions 

function uservalid(username, passw) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].passw === passw) {
            return true;
        }
    }
    return false;
}

function signin(username, passw) {
    if (uservalid(username, passw)) {
        console.log(newsfeed);
    } else {

        alert("sorryyyy");
    }
}


//  this function is for billoions of users

// function signin(username, passw) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].passw === passw) {
//             console.log(newsfeed);
//         } else {
//             alert("sorry");
//         }
//     }
// };
var userp = prompt("what is your username");
var passp = prompt("what is password");
signin(userp, passp);

//  this is only for counted users we already konw which index user so easily we can get the data 

// function signin(user, passwd) {
//     if (user === database[0].username &&
//         passwd === database[0].passw) {
//         console.log(newsfeed);
//     } else {
//         alert("sorry");
//     }
// }
// signin(userp, passp);