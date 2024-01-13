//printing the numbers sequence
//i++ = increment or  i+= 1
for (let i = 1; i <= 10; i++){
    console.log(i);
}

for (let i = 1; i<=10; i+= 1){
    console.log("Iam in the loop buddy!")
    console.log(i);
}

//printing even numbers
for(let i=2; i<=20; i+=2){
    console.log(i);
}

for (let i=100; i>=0; i-=10){
    console.log(String(i)+" times.")
}

//looping over arrays
//length is 5 but index is from 0-4
const animals = ["tiger","lion","cat","dog","bears"];
for(i=0; i< animals.length; i++){
    console.log(i+1, animals[i]);
 }
//reverse
for (let i = animals.length-1; i>=0; i--){
    console.log(animals[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

for(let i=0; i< people.length; i++){
    console.log(people[i].toUpperCase());
}

//nested loop
for(let i = 1; i <= 10; i++){
    console.log(`i is ${i}`);
    for (let j = 1; j<=3; j++){
        console.log(`      j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
// following code will print the array as it is.
for (let i = 0; i < seatingChart.length; i++){
    const seatLength = seatingChart[i];
    console.log(`Row #${[i+1]}`)
    for (let j = 0; j < seatLength.length; j++){
    console.log(seatLength[j]);}
}

// Nested loop to iterate over a 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(`Row #${i+1}`)
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
//while loop
let num = 1;
while(num<=10){
    console.log(num);
    num++;
}

// while loop with break
let input = prompt("Hey, say something!");
while(true){
    input = prompt(input);
    if(input.toLowerCase()=== "stop copying me") break;

}
console.log("Ok you win!")

//breaking in for loop after 100
for(let i = 0; i <1000; i++){
    console.log(i);
    if(i===100) break;
}