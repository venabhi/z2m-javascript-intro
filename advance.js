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