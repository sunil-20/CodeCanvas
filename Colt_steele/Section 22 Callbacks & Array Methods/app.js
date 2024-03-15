const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function(n){
    console.log(n*n)
});

nums.forEach(function(el){
    if(el%2===0){
        console.log(el)
    }
})

// using for let instead of forEach
for(let el of nums){
    console.log(el);
}


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})

//The following code only defines the function, doesn't execute it. We are not calling it.
const f = function(movie){

}

// Map methods simple example to multiply with 2
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//capitalize with arrow fx
const fruits = ['apple', 'banana', 'orange'];
const capitalizedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalizedFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']

//without arrow function
const capitalizedFruits2 = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

console.log(capitalizedFruits2); // Output: ['APPLE', 'BANANA', 'ORANGE']


//creating new array of movie titles.

const titles = movies.map(function(movie){
    return movie.title;
})
console.log(titles)

// converting to uppercase
const titles1 = movies.map(function(movie){
    return movie.title.toUpperCase();
})
console.log(titles1)

// using arrow function
const getTitleUpperCase = (movie) => {
    return movie.title.toUpperCase();
};

const titles_ar = movies.map(getTitleUpperCase);

console.log(titles_ar);

//returning scores only from the movies db
const scores = movies.map(function(movie){
    return movie.score;
})
console.log(scores)

//another example to select only first names.
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(fullName){
    return fullName.first;
})

console.log(firstNames);

// Arrow functions 
const add = function(x,y){
    return x + y;
}

const square = (x) =>{
    return x*x;
}

const sum = (x, y) =>{
    return x+y;
}

//with no arguments 

const rollDie = () =>{
    return Math.floor(Math.random()*6)+1
}
console.log(rollDie());

//another method without using parenthesis, just keyword
const square = num =>{
    return num**2;
}
console.log(square(3))


const greet = (x) =>{
    return `Hey ${x}!`
}

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"

//implicit return

// no return keyword used, implicitly it will return. No curly braces and single expression
const isEven = num =>(
    num % 2 === 0 
)
// one liner implicit return, one value very clear.
const isEven = num => num % 2 === 0; // no braces used.

const add = (a, b) => a+b;

//further map method
const newMovie = movies.map(movie =>(
    `${movie.title} - ${movie.score/10}`
))

console.log(newMovie)

//setTimeout and setInterval
setTimeout(()=>{
    console.log("Hello!!!")
}, 3000)
//-----------------------
console.log("Hello!!!.....");
setTimeout(() => {
    console.log("........are you still there?")
}, 3000)

console.log("Goodbye!!!")

//set interval 
// syntax: setInterval(function, delay);

// Start the interval and save the interval ID
const intervalId = setInterval(() => {
    console.log('Hello, world!');
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped.');
}, 5000);

const id = setInterval(()=>{
    console.log(Math.random())
}, 2000);

clearInterval(id)

//filter method
// creates a new array with all elements that pass the test implemented by the provided function.
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const odds = nums.filter(n=>{
    return n % 2 === 1;
})

const five_less=nums.filter(n=>{
    return n<5
})
console.log(five_less);
console.log(odds)

const goodMovies = movies.filter(movie=>{
    return movie.score > 80
})
//double mapping, first good movies, then the title of those movies.
const goodTitle = movies.filter(m=> m.score> 80).map(m => m.title);
console.log(goodTitle)


function validUserNames(usernames) {
    const names = usernames.filter(m=> {
        return m.length < 10;
   });
   return names;
   }

   console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));
   
   //some and every
   //every: if one is false, all is false.
   //some: if one is true, all is true.
   const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]
   console.log(exams.every(score=> score >= 75)) // return false because one(70) is less than 75.

   console.log(exams.some(score=> score >=75)) // return true because only one has to be true(here >= 75)

  
  
   function allEvens(numbers){
    return numbers.every(number=> number%2===0)
    
    }
    console.log([2, 10])

    //reduce method
    const total = exams.reduce((acc, crr)=>{
        return acc+crr;
    })
    console.log(total)

    //single line
    const total1 = exams.reduce((total, price)=> total+price)
    console.log(total1)

    // min and max 
    //min
    const minScore = exams.reduce((min, score)=>{
        if(score <min){
            return score
        }
        return min
    });
    console.log(minScore)

//max
const maxScore = exams.reduce((max, score)=> {
    if(score > max){
        return score;
    }
    return max;
});

console.log(maxScore)

//finding best movie

const bestRated = movies.reduce((bestMovie, currMovie)=>{
    if(currMovie.score > bestMovie){
        return currMovie;
    }
    return bestMovie;
})
console.log(bestRated);

//adding second argument

evens.reduce((sum, num)=> sum+num, 100) // 100 is added on top of the sum.

//keyword this
const person = {
    firstName: 'Tony',
    lastName: 'Robbins',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(fullName())

// using arrow function doesn't access the firstName and lastName( result: undefined, undefined)
// So, use regular function.
const person = {
    firstName: 'Tony',
    lastName: 'Robbins',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());
