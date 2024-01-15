function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
//call the function
singSong();
singSong();

function greet(person){
    console.log(`Hi, ${person}!`)
}
greet("Areeya")

//multiple parameters
function greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}`)
}
greet("Vizon", "Sharma")

function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}
repeat("$", 11)