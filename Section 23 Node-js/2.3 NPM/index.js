//var generateName = require("sillyname");
// const superheroes = require("superheroes")
import generateName from "sillyname";
import superheroes from "superheroes";


var sillyName = generateName();
// var superheroes = superheroes.all();
const name = superheroes.random();
console.log(`My name is ${sillyName}.`);
console.log(`I am  ${name}!`)