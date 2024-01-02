const pass = prompt("Enter your password");
if(pass.length>= 6 && pass.indexOf(' ') === -1){
    console.log("Valid Password!")
} else{
    console.log("Invalid Password!")
}
