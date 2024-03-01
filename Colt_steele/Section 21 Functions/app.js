let totalEggs= 0;
function collectEggs(){
    totalEggs = 7;
}
collectEggs();
console.log(totalEggs);

let bird = "Scarlet Macaw";
function birdWatch(){
    // let bird = "Great Blue Heron";
    console.log(bird);
}
birdWatch()

let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    var msg = "HIII!";
}
console.log(radius);
console.log(PI);
console.log(msg);

for (var i=0; i< 5; i++){
    var msg = "ASSSSSSSSDDDDKKK";
    console.log(msg)
}
console.log(msg)
console.log(i)


function bankRobbery(){
    const heroes = ['Spiderman','Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp(){
        for (let hero of heroes){
         console.log(`Please help us, ${hero.toUpperCase()}`)   
        }
    }
    cryForHelp();
}


bankRobbery()

function add(x,y){
    return x+y;
}
console.log(add(4, 5))


const square = function(x){
    return x*x;
}
square()

let greet = function(){
    console.log("HI!")
}
greet()

function callTwice(func){

    func();
    func();
}

function callTenTimes(f){
    for (let i = 0; i <10; i++){
        f()
    }
}
function rollDie(){
    const roll=Math.floor(Math.random()*6)+1
    console.log(roll)
}
callTwice(rollDie)
callTenTimes(rollDie)

// factory functions
function makeBetweenFunc(min, max){
    return function(num){
        return num>= min && num<= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult= makeBetweenFunc(19,64);
const senior= makeBetweenFunc(65, 120);
console.log(senior(66))

// Defining methods
const myMath={
    PI: 3.14159,
    square: function(num){
        return num*num},
    cube: function(num){
        return num**3;
    }
}
console.log(myMath.PI);
console.log(myMath.square(5));
console.log(myMath.cube(3));
// can be accessed as objects:
console.log(myMath["cube"](4));
// cube_ans=myMath["cube"](4);
// console.log(cube_ans);

// we don't need function keyword
const myMath2={
    PI: 3.141599999999,
    square2(num){
        return num*num},
    cube2(num){
        return num**3;
    }
}
console.log(myMath2.PI)

const square={
    area(x){
        return x**2
    },
    perimeter(x){
        return 4*x
    }
}
console.log(square.area(10))

// this keyword in java script
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log("MEOW MEOW MEOW");
        console.log(`${this.name} says MEOW`)
    }
}
cat.meow()


const hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount+=1;
        return "EGG";
        
    }
};

// Try Catch statement 
try{
    hello.toUpperCase();
}catch{
    console.log("ERRRRROOOORRR!!!!")
}
console.log("AFTER");
// ++++++++++++++++++++++++++++++++
function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch(e){
        console.log(e)
        console.log("please pass a string next time.")
    }
}
yell(12345678)