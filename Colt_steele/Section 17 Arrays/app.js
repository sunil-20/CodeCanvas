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
let dogs = ["rusty", "tommy"]
console.log(cats.concat(dogs));

//includes
console.log(cats.includes("blue"));
//indexOf => nothing(-1), first(0) and second(1)
console.log(cats.indexOf('rusty'));
console.log(dogs.indexOf('rusty'));
console.log(dogs.indexOf('tommy'));

//reverse
console.log(cats.concat(dogs).reverse())

//slice
let colors = ['white','orange','yellow','green','blue','indigo','violet','purple'];
console.log(colors.slice(3));
//includes starts not include stop
console.log(colors.slice(2,4));
//using -ve index
console.log(colors.slice(-2));

//splice() removing or replacing array
let update_color = colors.splice(5,1);
console.log(update_color);
colors.splice(1,0,"red-orange");
console.log(colors);
colors.splice(3,0,"blue-sky","sky-blue");
console.log(colors);

//sort array.sort()
console.log(colors.sort());

