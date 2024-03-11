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