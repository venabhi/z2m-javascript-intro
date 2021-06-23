# z2m-javascript-intro
# javascript types 
1. number = 1
2. string ="hii"
3.Boolean = true/false
undefined
Null
symbol
object

javascript comparisions
!== 
===
>=
<=
>
<



#exercise on comparisions and types
custom_background_image:1 The page delivered both an 'X-Frame-Options' header and a 'Content-Security-Policy' header with a 'frame-ancestors' directive. Although the 'X-Frame-Options' header alone would have blocked embedding, it has been ignored.
custom_background_image:1 The page delivered both an 'X-Frame-Options' header and a 'Content-Security-Policy' header with a 'frame-ancestors' directive. Although the 'X-Frame-Options' header alone would have blocked embedding, it has been ignored.
one-google-bar:1 The page delivered both an 'X-Frame-Options' header and a 'Content-Security-Policy' header with a 'frame-ancestors' directive. Although the 'X-Frame-Options' header alone would have blocked embedding, it has been ignored.
ogs.google.com/u/0/widget/app?bc=1&origin=chrome-untrusted%3A%2F%2Fnew-tab-page&origin=chrome%3A%2F%2Fnew-tab-page&cn=app&pid=1&spid=243&hl=en:1 The page delivered both an 'X-Frame-Options' header and a 'Content-Security-Policy' header with a 'frame-ancestors' directive. Although the 'X-Frame-Options' header alone would have blocked embedding, it has been ignored.
3+4
7
4+5
9
3*5
15
12/4
3
12-4
8
3+4
7
(3+4)*2
14
112%5
2
12%5
2
12%9
3
'hello'
"hello"
"hello" + "there"
"hellothere"
"hello " 
"hello "
"hello " + "there"
"hello there"
"this is't very nice"
"this is't very nice"
'this isn\'t very nice"
VM774:1 Uncaught SyntaxError: Invalid or unexpected token
" this isn\'t very nice"
" this isn't very nice"
10 + "34"
"1034"
20 + "25"
"2025"
20 + "21"
"2021"
10 - "3"
7
"hello" + "byee"
"hellobyee"
"hello" - "byee"
NaN
true
true
false
false
true
true
false
false
5>10
false
10>5
true
2>3
false
9>7
true
5<=5
true
3===3
true
3=3
VM1148:1 Uncaught SyntaxError: Invalid left-hand side in assignment
3===3
true
5>=5
true
3!==3
false
3!=3
false
4!==5
true
5!==7
true
5+'34'
"534"
5+"34"
"534"
5-"4"
1
10%5
0
5%10
5
"java" + "scropt"
"javascropt"
"java" + "script"
"javascript"
"" + ""
""
"" + 0
"0"
"" +9
"9"
"" + ""
""
" " + "9"
" 9"
"" + "9
VM1511:1 Uncaught SyntaxError: Invalid or unexpected token
"" + "9"
"9"
true + true
2
true
true
true + false
1
true + true
2
false + true
1
false + false
0
false-true
-1
false-false
0
3-4
-1
"bob" - "bill"
NaN
5>=1
true
0===1
false
4<=1
false
1!==1
false
"a" > "b"
false
"B" < "C"
true
"A" > "B"
false
"B" > "C"
false
"B" > "A"
true
"D" > "C"
true
"a"> "A"
true
"b" < "A"
false
"b" > "A"
true
"b" > "C"
true
"d" > "E"
true

"D" > "E"
false
"d" > "E"
true
true===true
true
true!==true
false
false===false
true
true===true
true
"hii there! it\'s \"sunny" 
"hii there! it's \"sunny"
"hii" + Node
"hiifunction Node() { [native code] }"
"hii" + byee
VM2516:1 Uncaught ReferenceError: byee is not defined
    at <anonymous>:1:9
(anonymous) @ VM2516:1
"hi there!" + "it'\s sunny out"
"hi there!it's sunny out"
"hii there" + it\'s sunny out"
VM2655:1 Uncaught SyntaxError: Invalid or unexpected token
"hii there" + "it\'s sunny out"
"hii thereit's sunny out"

# basics 

//  logical operators 
//  and , or , not 

//  javascript conditionals 
//  if ,  else if , else  

//  java script variable = var 

//  javascript comparisions 
//  ===  , !==, .= <= > < 


console.log = console.log("helloo")
console.log willl used to print on consoe page 

# what is calling a function ()
call a function to make a action/fuctionality given 
() = means call a function 
("hii") = mean call the arg 
we can have multiple arguments 
arguments is inpuy to the functiuon 

example:
alert("hii")
here, iam calling the alert function with an argument "hii"

# functions
functions and annonymous functions are different because in definning a function we are giving a name to that 
annonymous functions technivally not giving any names we are assigning to a variable or even u can give name var name function hii () {}

# objects
its a collections of properties
it is a data structure
its consists of key/property = value
we can add /change the value of the property
.add = value , .name = abhi change the value
add arrays in objects and objects in arrays ds and even add functions in arrays using metod = .shout 

# define a function
function name () {

};
# function expression 
var name = function () {

}

# ecpression 
var name  = "abhi;
var nu = 9;
return true;
return true;

# calling a function 
signin (abhi, 123);
alert();

# function
function thisisfunc (){
    <!-- here functionality -->
};

   var obj = {
    method: function () {

    }
};

# metod
method use . = user.name()  
<!--  here . name = method  -->


# javascript looping
1. for
2. while
3. do
4. forEach (new in ECMAscript 5)

# DOM SELECTORS 
1. getelementbytagname
getelementsbyclassname("")[0]
getelementsbyid()

# QUERYSELECTOR
document.queryselector()
document.queryselectorall();
getattribute
setattribute
document.qs().style.background=yellow
.style.background=green
document.querySelector("li").classList.remove("cool");
document.querySelector("li").classList.add("cool");
document.querySelector("li").classList;
document.querySelector("li").classList.toggle("cool"); = on / off
document.qsall("li")[1];= will give ans = doc.qsall()[1].parentelement;= ans ul
 = .pareele.parele; = ans <body>
 document.qsall("li")[1];= will give ans = doc.qsall()[1].parentelement;= ans ul
 = .pareele.parele; = ans <body> = .children = h1,p

 var h1 = doc.qs
 h1.class = "name";

var h1 = doc.qs = important to cache easily identify untill refresh