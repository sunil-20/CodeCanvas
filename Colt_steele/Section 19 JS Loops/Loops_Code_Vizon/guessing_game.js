let max_num = parseInt(prompt("Enter a maximum number!"));
while (!max_num){
    max_num = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random()*max_num) + 1;
console.log(targetNum);
let guess = prompt("Enter your first guess (Type 'q' to quit!)");
let attempts = 1;
while(parseInt(guess)!==targetNum){
    if(guess==="q") break;
    guess = parseInt(guess);
   
    if(guess>targetNum){
       guess= prompt("Too high! Enter a new guess:") ;
       attempts+=1;
    } else if (guess < targetNum){
        guess = prompt("Too low! Enter a new guess:");
        attempts+=1;
    } else{
        guess = prompt("Invalid guess. Please provide vaid number or 'q' to quit.");
    }
}
if(guess==="q"){
    console.log("OK, Quitting!")
} else {
    console.log(`You guessed right! your total attempts is:${attempts}`);
}
