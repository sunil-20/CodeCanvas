// default parameters
function rollDie(numSides){
    return Math.floor()(Math.random() * numSides) + 1
}
console.log(numSides(6)) // no input restrictions

// old way of passing default 6 if no param is passed

function rollDie(numSides){
    if(numSides === undefined){
        numSides = 6;
    }
    return Math.floor(Math.random()* numSides) + 1;
}
console.log(rollDie()) // no param, default to 6 and if you pass a number that is also valid.

// new method
function rollDie(numSides=6){
    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie()) // if it is empty, that will be 6 or you can pass any number.

// order of param matters
function greet(msg= "Hello", name){
    return `${msg}${name} !`
}
console.log(greet("Joanna")) // this doesn't work result: Joanna undefined !

// correct syntax is to keep default parameter at the end of the function call
function greet(name, msg="Hello"){
    return `${msg} ${name} !`
}
console.log(greet("Joanna")) // result: Hello Joanna !

// Spread method
const nums = [12, 34, 56, 22, 36, 55, 22, 66, 21, 20]

console.log(Math.max(nums)) // result: NaN
// ...nums is equivalent to: (12, 34, 56, 22, 36, 55, 22, 66, 21, 20) with brackets
console.log(Math.max(...nums)) // result 66

// spread the string pass as separate argument for each letter.
console.log(..."Hello") // result: H e l l o

// combining arrays with spread
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = [...cats, ...dogs]
allPets.push("Bravo") // add one more in allPets
const allPets = [...cats, ...dogs, "Speedy"] // manually add your own additional pet name.

// spread with objects
