// document.querySelector('button').addEventListener('click',function(){
//     alert("CLICK");
// });

// getting the information about the event
document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt);
});
//adding keydown
const input = document.querySelector('input');
input.addEventListener('keydown', function(){
    console.log("KEYDOWN");
});
//key up
input.addEventListener('keyup', function(){
    console.log("KEYUP");
});
//key and code
input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);
});

window.addEventListener('keydown', function(e){
    switch (e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
})