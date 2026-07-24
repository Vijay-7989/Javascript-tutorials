//functions
function helloWorld(){
    return "hello world";
}
let results = helloWorld()
console.log("Message from function is ", results)

function sum(a,b){
    return a*b;
}
let re = sum(10,38);
console.log("The sum of ",re)

// vairable to strore the function
let add = function(a,b){
    return a+b;
}
re = add(10,34);
console.log("vaiable store funciton is ",re)

//Functions can be used many times
re1 = add(4567,567)
re2 = add(0,0)
console.log("vaiable store funciton is ",re1)
console.log("vaiable store funciton is ",re2)


//declear local variable in side function

function localVarible(){
    let i = 0; //local variable
    while(i<6){
        console.log(i);
        i++;
    }
}

localVarible()


//Functions Used as Variables

let FV = `Functions Used as Variables ${add(10,10)}`;
console.log(FV);

//Accessing a function without () 

function cal(a,b){
    return a-b;
}
let res = cal(90,9);
console.log("Accessing a function without () ", res);


//Function Expression
// stroing the the function in variable called function expression

let multiply3digits = function(a,b,c){
    console.log("first value is ",a);
    console.log("second value is ",b);
    console.log("Third value is ",c);
    return a*b*c;
}

console.log("Final multiplication result is ",multiply3digits(10,10,10))
let multiplyresults = multiply3digits(11,20,39);
console.log("Final multiplication result is ",multiplyresults)


let addtion = function(x,y,z){
    return (x+y+z);
    const num = 100;
}

let addres = addtion(10,10,10);
const num1 = addtion.num
console.log("addition results is",addres,num1);

let subtraction  = function(a,b){
    return a-b;
}
let subres = subtraction()


//Arrow functions
const ca1l = (a,n1,n2) =>{
    switch(a){
        case "a" :
            return n1+n2;
            break;
        case "s":
            return n1-n2;
            break;
        case "m":
            return n1*n2;
            break;
        case "d":
            return n1/n2;
            break;
        default:
            return "Enter valid inputs";
            break;
    }
}

let swres = ca1l("a",10,30);
console.log("The result is ",swres);

swres = ca1l("m",10,30);

console.log("The result is ",swres);



const arrfun = () => {
    return "This is arrow function expression";
}

console.log(arrfun());


const arrloop = (a,b) => {
    
}