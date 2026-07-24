//object values
const person = {
    name    : "vijay",
    age     : 234,
    male    : true,
    score   :[10,20,30,40,50],
    salary  :123.54,
    hobbies :{
        game    : ["cricket","chess"],
        movies  :["magadheera","Baahubali"] 

    }
}

//convert into json string
console.log(JSON.stringify(person));