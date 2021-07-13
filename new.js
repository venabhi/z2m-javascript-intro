const person = {
  name: "abhi",
  lastName: "ch",
};
person.name;
person.lastName;

// arrays in objects

const news = {
    name:"ram",
    age=90,
    numbers:[1,2,3,4,'hello'],
    greetings: function () {
        console.log('hello');
    }
};
console.log(news.name)
console.log(news.numbers[1]);

const age = console.log(age);
console.log(age);

news.greetings ();

//  assign new valus
news.name= 'venkata';

//  conditional statements

if (true) {
    console.log('hello';)
}

if (false) {
    console.log('hello');
}

const value = 2>3;

if (value) {
    console.log('heloo';)
}

const value2=false;
if (value2) {
    console.log('heloo');

}else {
    console.log('haiii');
}


let num1 = 4;
let num2 = 6;
const result = num1>= num2

if (num1 > num2) {
    console.log('first number is bigger than second');
}
else if (result) {
    console.log('first num equal to second');
}

else {
    console.log('second num is bigger');
}



let value = false;

if (!value) {
    console.log('value is true');
  }

//    logical operators (&7 ||)

var name = 'peter';
const age = 24;

if (name ==='bob' || age===24) {
    console.log('hello there user');
} else {
    console.log('wrong values');
}

var name = 'peter';
const age = 24;

if (name ==='bob' && age===24) {
    console.log('hello there user');
} else {
    console.log('wrong values');
}

var name = 'peter';
const age = 24;

if (name !=='bob' && age===24) {
    console.log('hello there user');
} else {
    console.log('wrong values');
}



//  switch statement

const dice = 1;

switch (dice) {
    case 1:
        console.log('hello');
        break;
    case 2 :
        console.log('no');
        break;
    default:
        console.log('not diced');
}

const news = 3
while (news >3) {
    console.log('hello');
    news--;
//  IT WILL RUN FROM 3,2,1,0 AND LOOP WILL END
}


for (let i=0; i<10; i++) {
    console.log('the number is : ' + i)
}

for (let number=12; number>=10; i--); {
    console.log('the number is: ' + i)
}