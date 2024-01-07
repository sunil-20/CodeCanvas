console.log("I am connected");
//creating array
let myArray = [1, 44, "dog", 4.5, "rad"];
//accessing array
console.log(myArray[2]);
console.log(myArray[2][1]);
console.log(myArray[myArray.length-1]);
console.log(myArray[4]);

//updating array
myArray[4] = "red";
console.log(myArray[4]);

//push, pop, shift, unshift add /remove from begining or end

let movieLine = ['Jack', 'Jill', 'Roma'];
movieLine.push("Tom");
movieLine.pop();
movieLine.shift();
console.log(movieLine);

movieLine.unshift("Jack is out from here!");
console.log(movieLine);

//concat
let cats = ["blue", "kitty"]
let dogs = ["rusty", "Tommy"]
console.log(cats.concat(dogs));
