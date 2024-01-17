//Single thread
const multiply= (x, y) => x*y;
const square = x => multiply(x,x);
const isRightTriangle = (a,b,c) => (
    square(a) + square(b)===square(c)
)
console.log(isRightTriangle(3,4,6))

//ajax implementation // hand off task to browser for help
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
