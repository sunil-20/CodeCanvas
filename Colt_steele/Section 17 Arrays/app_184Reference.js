let nums = [1,2,3];
let numsCopy = nums;
console.log(nums);
console.log(numsCopy);
nums.push(4);
console.log(nums);
console.log(numsCopy);
numsCopy.pop();
//nums change as they are linked.
console.log(nums);
console.log(nums === numsCopy);


// 186 Arrays and Const

const PI = 3.1416;
//can't change the constant.
 PI+= 1
console.log(PI)
const nums = [1,2,3];
nums.push(44);
//we can alter but we can't entirely assign with same name.
nums = [1,2,3,44];
console.log(nums);

//Nested arrays

const GBoard = [['X','O','X'],['O','NULL','X'],['O','O','X']];
console.log(GBoard);
console.log(GBoard[1][1])