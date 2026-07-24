//objects are the varaibles that can store both values and functions
// pbjects are the collection of properties and methods
// key:values are called properties and key:methods are called object methods.
// should declear the js object with const


let objmethod = () => {
    return "THis method is used for oject method purpose only";
}

const car = {
    type : "Fiat",
    model : "F1",
    color : "Black",
    myfunction : objmethod(),
    attri : function(){
        console.log(this.type);
        console.log(this.color);
        return this.color + " "+this.model;
        // return "this method "
    }
}
console.log(car.type);
console.log(car.model);
console.log(car.color);

const dog = {};
console.log(dog);

dog.name = "vk";
dog.color = "brown";

console.log(dog);

dog.name = "yvk";
console.log(dog);
console.log(dog["color"]);
console.log(dog.color)

console.log(car.myfunction);
//javascript object mthods;

dog.myfunction = objmethod();
console.log(dog.myfunction)

const dogmethod = () => {
    return "THe dog is dangerous";
}

dog.behaviour = dogmethod();
console.log(dog.behaviour)

console.log(car.attri());


//properties
const person = {
    firstname : "Vijay",
    lastname : "Kumar",
    age : 25
}
//change properties
person.age = 30;
console.log(person)

// add new peoperties
person.address = "Samadapalli";
person.phone = 5678;
person.id = 107;
person.arr = [10,30,30,44]
person.obj = {name:"yvk"}
person.perfun = function(){
    return "this for person function";
}
console.log(person);
console.log(person.perfun())

//delete properties
delete person.age
delete person.perfun
console.log(person);

//properties exist in an object
let res = ("firstname" in person)
let res2 = person.firstname in person
console.log(res2)
console.log(res)

//Nested Objects

const animal = {
    name : "lion",
    age : 300,
    child : {
        name : "simba",
        age : 30
    }
}

console.log(animal.name);
console.log(animal.child.name)

// Object Methods
const person2 = {
    name : "vijay",
    age : 24,
    id : 107,
    getid : function(){
        return this.id
    },
    1 : 100
}
console.log(person2.getid())

//Adding a Method to an Object
person.details = () => {
    return "This is way to add function to the object";
}

console.log(person.details());

//displaying object values and keys
for (let i in person){
    // console.log(person[i])
    // // console.log(person.i)
    // console.log(i)

    console.log(i+" : " + person[i])
}

for (let i in person2){
    console.log(i +" : "+ person2[i])
}

for (let i in person2){
    if (i === '1'){
        console.log(true);
        break
    }
}