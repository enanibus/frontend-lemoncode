console.log("************** DELIVERABLE 01 *********************");

// Array operations

const students = [{ name: "Alan" }, "Evan", "Ana"];

// 1 - Head
const head = ([first, ]) => first;

console.log(head([students])); // { name: "Alan"}

// 2 - Tail
const tail = ([, ...rest]) => rest;

console.log(tail(students)); // ["Evan", "Ana"]

// 3 - Init
const init = (array) => array.slice(0, -1);

console.log(init(students)); // [{ name: "Alan" }, "Evan"]

// 4 - Last
// const last = array => array[array.length - 1];
const last = (array) => array.slice(-1).pop();

console.log(last(students)); // "Ana"