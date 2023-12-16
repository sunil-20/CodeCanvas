console.log("Hello from first script!!");
let total = 1 + 3;
console.log("goodbye dear".toUpperCase())
let rating = Math.floor(Math.random()*3+1)

if(rating === 3){
    console.log("That's awesome!")
}
else if (rating === 2){
    console.log("Meets expectation");
}
console.log(rating)

const age = prompt("Enter age")
if(age < 5){
    console.log("You are baby. You get in for free")
}
else if(age < 10){
    console.log("You are a child. You pay $10.")
}
else if(age <65){
    console.log("You are adult. You pay $20.")
}
else{
    console.log("You are senior. You pay $10.")
}

let phrase = prompt("enter phrase")

   if (phrase=== "stop"){
       console.log("red")
   }
   else if(phrase === "slow"){
       console.log("yellow")
   }
   else if(phrase === "go"){
       console.log("green")
   }
   else{
       console.log("purple")
   }
const password = prompt("Enter Your password!");
if(password.length >= 6 && password.indexOf(' ')=== -1){
    console.log("Valid Password!");
}
else{
    console.log("Invalid password!");
}