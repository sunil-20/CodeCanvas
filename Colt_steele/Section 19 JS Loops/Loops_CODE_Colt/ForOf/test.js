const names = ['John','Emecka','Gillet','Sagar','Santosh','Vickie','Emily','Moptra','Riptra','Rushika','Melon','David']

for(let i = 0; i < names.length; i++){
    console.log(`Visit my friend: ${names[i]}`);
}
for (let name of names){
    console.log(name);
}


for(let row of seatingChart){
    for(let student of row){
        console.log(student);
    }
}

for(let char of "HEllo World"){
    console.log(char)
}

//to eterate over an object dictionary{}, print names

const testScores = {
    keenam: 80,
    damon: 30,
    kim: 44,
    dwayne: 77,
    jackie: 23
}
for(let name in testScores){
    console.log(name);
    console.log(testScores[name])
    // console.log(Object.keys(testScores));
}

console.log(Object.values(testScores));
console.log(Object.keys(testScores));
console.log(Object.entries(testScores));

let total = 0
let toLength = Object.values(testScores);
for(let score of Object.values(testScores)){
    total += score
}
console.log(total)
console.log(`Average is: ${total/toLength.length}`);