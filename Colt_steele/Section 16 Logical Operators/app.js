//logical and &&
const pass = prompt("Enter your password");
if(pass.length>= 6 && pass.indexOf(' ') === -1){
    console.log("Valid Password!")
} else{
    console.log("Invalid Password!")
}

//logical or ||
const age=parseInt(prompt("What is your age?"))
if((age>=0 && age <5) || age>=65){
    console.log("Free")
} else if (age >= 5 && age < 10){
    console.log("Pay $10.")
} else if (age >= 10 && age < 65){
    console.log("Pay $20.")
}else{
    console.log("Invalid input for age.")
}

//logical not !

let firstName = prompt("enter your first name");
if (!firstName){
    firstName = prompt("Try again!!")
}

const age = parseInt(prompt("Your age?"))
if(!(age >=0 && age <5 || age >= 65)){
    console.log("You are not a baby or a senior!")
}

//switch statement

const day = parseInt(prompt("Test you number."));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wed");
        break;
    case 4:
        console.log("Thr");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid input");   
}