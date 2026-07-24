//javascript arrays are dynamic
// javascript arrays are hetrogeneous not homegenieous like c and java


// creating array in javascript
const arr = [1,3,4,4,5];
console.log(arr)

// another way to create arrays in javascript
const arr2 = new Array(10,"43",true,[12]);
console.log(arr2)

//Acessing the array elements
console.log(arr[0]);
console.log(arr2[1])

//changing the array eelemnts
arr[0] = "vijay";
arr2[1] = "kumar"
console.log(arr + " : "+ arr2)

//Converting an Array to a String
newarr = arr.toString()
console.log(newarr);
console.log(newarr[0]);
console.log(newarr[2]);

//displaying arrays
console.log(arr);
console.log(JSON.stringify(arr)[3]);

//Array Properties and Methods
console.log(arr.length);      // length property
console.log(arr.sort())       // sort method

//Looping Array Elements
console.log("using for-in loop")
for (let i in arr){
    console.log(i)
}

console.log("using for-loop");
for (let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log("using while loop");
let i = 0;
while(i<arr.length){
    console.log(arr[i])
    i++;
}

console.log("using do-while loop");
j = 0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length){}

console.log("using for-of loop");
for (let i of arr){
    console.log(i)
}

//Adding Array Elements
arr.push(10);
arr.push("This is way to add elements")
console.log(arr);
arr[arr.length] = "another way";
console.log(arr);

//JavaScript Array shift()
arr.shift();
console.log(arr);
arr.unshift("vijay added at first");
console.log(arr);

//Merging Arrays (Concatenating)
console.log(arr.concat(arr2));

//Array copyWithin()
anotherarr = arr.copyWithin();
console.log(anotherarr);