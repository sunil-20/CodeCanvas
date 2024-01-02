console.log("Hello world from JS!")
console.log(1+5)
// if else
let rating = 3;
if (rating===3){
    console.log("Yor are a superstar!");
}
if (2/2===1){
    console.log("That's awesome!");
}

let random = Math.random();
if (random<0.5){
    console.log("Your number is less than 0.5!!");
} else{
    console.log("Your number is greater (or equal) than 0.5.")
}
console.log(`Your number is ${random}`);

let ratings = 2;
if(ratings===3){
    console.log("You are a superstar!!");
} else if(ratings===2){
    console.log("Meets expectation!");
}

const dayOfWeek = "s";

if(dayOfWeek === "Monday"){
    console.log("UGGGHHHHHHHH")
} else if(dayOfWeek==="Friday"){
    console.log("Yup its Friday")
} else if(dayOfWeek==="Tuesday"){
    console.log("Struggling!!")
}else{
    console.log("Pushing forward!!!")
}

const age = 70;

if (age<5){
    console.log("You are kid entry free.")
} else if (age < 10){
    console.log("You have to pay $10.")
} else if (age < 65){
    console.log("You are an adult. You pay $20.")
} else{
    console.log("You are senior you pay $10.")
}

const password = prompt("Please enter your password.")
if (password.length >= 6){
    if(password.indexOf(' ')=== -1){
        console.log("You have provided valid password.")
    }
}else{
    console.log("Password too short!")
}