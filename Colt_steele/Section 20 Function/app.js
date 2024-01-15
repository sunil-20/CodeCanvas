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
//return statement
function addNum(x,y){
    let sum = x+y;
    return sum;
}
//create variable that specifies the return value
const sum = addNum(9,4);
console.log(sum);

//return false
function add(x,y){
    if(typeof x !== 'number'|| typeof y !== 'number'){
        return false;
    }
    return x + y;
}
const result = add(add(4,5), 11);
console.log(result);

//return true if true it returns true, if not it is false already.
function isShortsWeather(temperature) {
    return temperature >= 75;
  }

  //returning last element from an array
  function lastElement(x){
    if (x.length !== 0){
        let last_value = x[x.length-1]
        return last_value;
    }
        return null;
    }
x([1,2,3])