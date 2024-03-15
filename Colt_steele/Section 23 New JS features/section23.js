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

// Spread method , used in copying objects
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
const myArray = [2,4,5,6,7]
const myString = "Hello!"
console.log({...myArray}) //result: { '0': 2, '1': 4, '2': 5, '3': 6, '4': 7 }
console.log({...myString}) //result: { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o', '5': '!' }
console.log(...myString) //result: H e l l o !

//Rest Params
function sum(...nums){
    return nums
}
console.log(sum(22,33,33,22,11,44,55,4,5,6,3))

function sum(...nums){
    return nums.reduce((total, el) => total + el)
}
console.log(sum( 1,2,3)) // result: 6

//use case example

function raceResult(gold, silver, ...everyoneElse){
    console.log(`The Gold medal goes to: ${gold}`)
    console.log(`The Silver medal goes to: ${silver}`)
    console.log(`Thanks to everyone else: ${everyoneElse}`) // collecting everyoneElse


}
raceResult('Victor', 'Guru', 'Dina', 'Roshan', 'Jack', 'Tina','Rama')
//result
/*
The Gold medal goes to: Victor
The Silver medal goes to: Guru
Thanks to everyone else: Dina,Roshan,Jack,Tina,Rama
*/

//destructuring from an array
const scores = [
    854900, 814953,
    695836, 290577,
    646255, 497111,
    330167
  ]
  const [gold, silver, bronz, ...everyoneElse] = scores // making three separate variables, copying 
  console.log(gold)
//destructuring from an object(most common)

const user = {
    email: "example@example.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
    born: 1930,
    died: 2015,
    bio: "Tech enthusiast",
    city: "New York City",
    state: "New York"
};

const{email, firstName, lastName} = user; // single them out on their own variable.

console.log(firstName)

//rename the extracted variables

const{born: birthYear, died: deathYear} = user;
console.log(birthYear) // result: 1930

//assigning the default value
const{born: birthYear, died: deathYear = 'N/A'} = user;

// destructuring param
function fullName({firstName, lastName}){ // can provide default value as: lastName = "N/A"
    return `${firstName} ${lastName}`
}

console.log(fullName(user))

// using movie example
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 2022
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1988
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1967
    },
    {
        title: 'Alien',
        score: 70,
        year: 2001
    }
]

const mapMovie = movies.map(({title, score, year})=>{
    return `${title} for the year: (${year}) is rated: ${score}`
})
console.log(mapMovie)
//result
/*
[
  'Amadeus for the year:(2022) is rated: 99',
  'Stand By Me for the year:(1988) is rated: 85',
  'Parasite for the year:(1967) is rated: 95',
  'Alien for the year:(2001) is rated: 70'
] */