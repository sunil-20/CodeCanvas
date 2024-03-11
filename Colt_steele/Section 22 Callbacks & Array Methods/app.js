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