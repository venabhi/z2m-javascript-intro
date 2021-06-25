//  parent scope and child scope
const first = () => {
    const greet = "hiiii";
    const second = () => {
        const name = "bob";
        alert(greet);
    }
    return second;

}
newfunc = first();
newfunc();

const firsts = () => {
    const greets = "hiiii";
    const seconds = () => {
        const names = "bob";
        alert(greet);
    }
    return second;

}
newfunc = firsts();
newfunc();

const mul = (a, b) => a * b;
//  currying 
const n = (a, b) => a * b;
news(2, 4);

const ne = (a) => (b) => a * b;
const nee = ne(5);
nee(10);

//  compose 
//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b
const sus = (a, b) => a + b;


//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

const addto = x => y => x + y;
var adds = addto(10);
adds(4);


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17

const sum = (a, b) => a + b;
const currys = (a) => (b) => a + b;
const add5 = currys(5);
add5(12);


//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16

//  map method 
const ss = [1, 2, 3, 4];
const sss = ss.map((num) => {
    return num * 2;
});
console.log(sss);

const array = [1, 2, 3, 4];
const maparray = array.map(
    (num) => {
        return num * 2;
    }
);
console.log('map', maparray);

const array = [1, 2, 3, 4, 5];
const maparray = array.map(
    (num) => {
        return num * 2;
    }
);
console.log('map', maparray);

//  filter
const array = [1, 2, 3, 4, 5, 6, 7];
const filterarray = array.filter((num) => {
    return num > 5;

});
console.log('filter', filterarray);

const array = [1, 2, 3, 4, 5., 6, 7];
const filterarray = array.filter((num) => {
        return num == 5;
    }

);
console.log('filter', filterarray)

const array = [1, 2, 3, 4];
const reducearray = array.reduce((accumulator, num) => {
        return accumulator + num;

    },

    0);
console.log('reduce', reducearray);

const array = [1, 2, 3, 4, 5];
const reducearray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);
console.log('reduce', reducearray);


//  exercise map filter reduce with acc
// Complete the below questions using this array:
const array = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
    let { username } = user;
    username = username + "!";
    newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
    let { username } = user;
    return username + "?";
})
console.log(mapArray);


//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
    return user.team === "red";
})
console.log(filterArray);

const filterarray = array.filter((user) => {
        let { username } = user;
        return user.team === reducearray;
    }

);
console.log('filter', filterarray);


//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
    return acc + user.score
}, 0);
console.log(total);

const total = array.reduce((acc, user) => {
        let { username } = user;
        return acc + user.score;
    }, 0

);
console.log('reduce', total)


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
    user.items = user.items.map(item => {
        return item + "!"
    });
    return user;
})
console.log(answer);