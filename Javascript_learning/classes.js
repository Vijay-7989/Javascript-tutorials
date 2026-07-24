//classes are the templete for the objects
// use the class keyword to create class in java script
// after that always add a constructor() method to the class
// constructor() is used to intilize the object properties
// if u want to pass arguments(properties) to the class at that time constructor allows to pass argument(properties) to the class
// class lo vunna methods ki function keyword use cheyam yendhku ante class vunna functions ni javascript methods lagane treat chestundhi
// javascript ala desgin cheyabadindhi.
// class bayata vunte adhi function ante adhi ye object ki chendinadhi kadhu
// adhe class lo adhi class ki sambandhinchinadhi kanuka adhi method.

class vehical{
    constructor(){}
    car(){
        return "this is car method";
    }
    bike(){
        return "This is bike method";
    }
}

const veh = new vehical();
console.log(veh.bike());
console.log(veh.car())

// send parameters to Class methods
class animal{
    constructor(behavoir){
        this.behavoir = behavoir;
    }
    animalType(age){
        this.age = age;
        if (this.behavoir == 0){
            return "This is snake";
        }
        else if (this.behavoir == 2){
            return "This is bird";
        }
        else if(this.behavoir == 4){
            return "This is animal";
        }
        else {
            return "This is unknown animal";
        }
    }

    displayAge(){
        return "and age of the creature is : " + this.age+" "+this.animalType(this.age) ;
    }

}

const antype = new animal(6);
console.log("creature : ", antype.animalType(5));
console.log(antype.displayAge());

const antype2 = new animal(4);
console.log("creature : ", antype2.animalType(7));
console.log(antype2.displayAge());

for (let i = 0; i < 6; i++) {
    const tempAnimal = new animal(i);
    console.log("input : " + i + " creature : " + tempAnimal.animalType(i) + " " + tempAnimal.displayAge());
}

class Sample{
    display(){
        return "This is sample class without constructor";
    }
}

const sam = new Sample();
console.log(sam.display());


