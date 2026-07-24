// var keyword

var name = 10;
var name = "kumar";
console.log(name);

// let keyword

let name1 = "mahesh";
// let name1 = "kumar";
console.log(name1);

// const keyword

const name2 = "mahesh";
// name2 = "kumar";
console.log(name2);

// declaration
var a;
// var a // you can redeclare variable 'a' using var keyword
let b;
// let b; // error: cannot redeclare variable 'b'
// const c;

// assign or initialize
a = 10;
b = "mahesh";
const c = "kumar";
// c = 1234   // error: cannot reassign a constant variable 

//null keyword
var name3 = null;
console.log(name3);



let name4 = "mahesh gadu";
let name5 = "kumar gadu";
console.log(name4 + " java script nerchukunta vunnadu with " + name5);


const user = {
    name : "vijay",
    role : "QE"
}
// user.name = "mahesh";

const user2 = user
user2.name = "kumar";
console.log("user1: " + user.name + ", user2: " + user2.name);

// let a = 10;
// console.log("a is : " + a);

//camel case
let userName = "vijay";
const age = 25;
console.log("camel_case: "+userName+" and Age: "+age);

//pascal case
let Username = "vijay";
const Age = 49;
console.log("Pascal_Case: "+Username+" and Age: "+Age)
let x = 1;
for (let i = 0; i<=5; i++){ 
    console.log("x is: "+x);
    x++;
}
console.log("x is: "+x);

var y = 1;
y = 10;
console.log("y is: "+y);

let z = 1;
z = 100;
console.log("z is: "+z);

let _firstName = "vijay";
console.log("first name is: "+_firstName);


let aa = "hi vijay";
try{
    aa[0] = "su";
    console.log("aa is: "+aa);
}
catch(e){
    console.log("error: "+e.message);
}

const nn = 10;
nn = 1000;
console.log(nn)