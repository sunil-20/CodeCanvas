//var generateName = require("sillyname");
// const superheroes = require("superheroes")
import generateName from "sillyname";
import superheroes from "superheroes";

//generating silly name
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

//generating superheroes
const name = superheroes.random();
console.log(`I am  ${name}!`)