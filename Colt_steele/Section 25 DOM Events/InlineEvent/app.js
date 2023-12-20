const btn = document.querySelector('#v2');
btn.onclick = function(){
    console.log("You clicked me!")
    console.log("I hope it worked!!")
}
function scream(){
    console.log("AAAAAAAAAAAAAAAAHHHHHHHHHHHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
//passing scream instead of annonymous function
btn3.addEventListener('click',scream,{once: true});

btn3.addEventListener('click', function(){
    alert("Clickedkkkkkk!")
})


function twist(){
    console.log("Twist");
}
function shout(){
    console.log("Shout");
}
const v4btn = document.querySelector('#v4');
// v4btn.onclick = shout;
// v4btn.onclick = twist;
//using event listener
v4btn.addEventListener('click', twist,{once:true});
v4btn.addEventListener('click', shout);

const btnHello = document.querySelector("#hello");
const btnGoodbye = document.querySelector('#goodbye');

btnHello.addEventListener('click', function(){
    console.log("hello");
});
btnGoodbye.addEventListener('click', function(){
    console.log("goodbye");
});

//using arrow function
btnHello.addEventListener('click', () => console.log("hello"));
btnGoodbye.addEventListener('click', () => console.log("goodbye"));
