//Errors will happen when javascript or code executing
//syntax errors/type errors/reference errors

//How to Handle JavaScript Errors
//try block contians the code that might throw error
//catch block will handle the errors if any errors occurs in try block if no errors catch block skips

//Reference Errors
    //if a vairable does not exist then that is Reference Errors
let x = 5;
try{
    const z = x + y;
}catch(a){
    console.log(a.name);
    console.log(a.message)
    // console.log(a)
}
//without try and catch block
// try{
// let z = x+b;
// }catch(err){
//     console.log(err);
// }

try{
    let y = z;
    z = 100;
}catch(err){
    // console.log(err);
    console.log(err.name)
    console.log(err.message)
}

//Type Errors
    // when a value is assied for a wrong type
try{
    z.toUpperCase();
}catch(err){
    // console.log(err)
    console.log(err.name)
    console.log(err.message)
}

//Range Errors indexout 
    //this error occurs when a value is out of the given range
const arr = [10,39,34,43,4,5];
try{
    console.log(arr);
    console.log("Trying to access out of range element");
    console.log(arr[10]);
}catch(err){
    console.log(err.name);
    console.log(err.message)
    // console.log(err);

}

//Syntax Errors
    //Syntax Errors are not catchable bez this error occors during compline time only
    // not at runtime. other erros occurs during runtime.so those are catchable errors.

//throw statement
    // helps to stop the execution and allows to create custome error

const eligible = (age) => {
    if (age < 18){
        throw new Error("Age should be above 18");
    }
    else{
        return "U are eligible";
    }
}

try{
    console.log(eligible(15));

}catch(err){
    console.log(err.message);
}

try{
    const res = 100/0;
    throw new Error("Number cannot divide with 0 give valid number");
}catch(err){
    console.log(err.message);
}

const errobj = (usename,password) => {
    if (usename == password){
        throw {
            name : "Invalid credentials",
            message : "Username and password should not same",
            code : 400
        }
    }
    else{
        return " successfuly loggedIn";
    }
}

try {
    console.log(errobj(123,123));
}catch(err){
    console.log(err.name);
    console.log(err.message);
    // console.log(err);
}

try{
    console.log(errobj("vijay",1234));
}catch(err){
    console.log(err.message);
}


const throwerrorfun = (a) => {
    if (a < 18){
        throw new Error("U are not eligible for vote");
    }
    else if (a >=18 && a <=60){
        throw new Error("U are eligible for vote and u are young");
    }
    else{
        throw new Error("U are old to participate");
    }
}

let a = 100
try{
    throwerrorfun(a);
}catch(err){
    // console.log(err);
    console.log(err.message);
}