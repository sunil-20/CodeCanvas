//Single thread
const multiply= (x, y) => x*y;
const square = x => multiply(x,x);
const isRightTriangle = (a,b,c) => (
    square(a) + square(b)===square(c)
)
console.log(isRightTriangle(3,4,6))

// //ajax implementation // hand off task to browser for help
console.log("Now sending request to server!")
setTimeout(()=>{
    console.log("After the time out I am here.....")
}, 2000)

let num = 0;
while (num <50){
    console.log("I am printed before time out... ");
    num++;
    if(num === 49){
        console.log("SECOND LAST PRINT")
    }
}

// timeout for background colors
setTimeout(()=>{
    document.body.style.backgroundColor = 'red';
    setTimeout(()=>{
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                },1000)
            },1000)
        },1000)
    },1000)
}, 1000)

const delayedColorChange = (color, delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red',1000)
.then(() => delayedColorChange('orange',1000))
.then(() => delayedColorChange('yellow',1000))
.then(() => delayedColorChange('green',1000))
.then(() => delayedColorChange('blue',1000))
.then(() => delayedColorChange('indigo',1000))
.then(() => delayedColorChange('violet',1000))

// using await keyword

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('violet', 1000)
    return"AlL DONE!"


}
rainbow().then(() => console.log("END OF RAINBOW!"))