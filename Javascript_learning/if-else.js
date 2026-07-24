const age = 18;

if (age >=18){
    console.log("you are eligible for voting");
}
else if (age<18){
    console.log("you are not eligible for voting");
}
else{
    console.log("you are a minor");}



switch(age){
    case 18:
        console.log("you are eligible for voting");
        break;
    case 17:
        console.log("you are not eligible for voting");
        break; 
    default:
        console.log("you are a minor");
}