In JavaScript, push, pop, shift, and unshift are methods used to manipulate arrays. These methods allow to add or remove elements from the beginning or end of an array. 

push():

`push(element1, element2, ..., elementN):`

The push method is used to add one or more elements to the end of an array.
Example:

```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange', 'grape');
// fruits is now ['apple', 'banana', 'orange', 'grape']
```

pop():

The pop method is used to remove the last element from the end of an array.
Example:
```javascript

let fruits = ['apple', 'banana', 'orange', 'grape'];
let removedFruit = fruits.pop();
// removedFruit is 'grape', fruits is now ['apple', 'banana', 'orange']
```
shift():

The shift method is used to remove the first element from the beginning of an array.
Example:
```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];
let removedFruit = fruits.shift();
// removedFruit is 'apple', fruits is now ['banana', 'orange', 'grape']
```
unshift():

`unshift(element1, element2, ..., elementN):`

The unshift method is used to add one or more elements to the beginning of an array.
Example:
```javascript
let fruits = ['banana', 'orange', 'grape'];
fruits.unshift('apple', 'kiwi');
// fruits is now ['apple', 'kiwi', 'banana', 'orange', 'grape']
```