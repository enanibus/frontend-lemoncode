console.log("************** DELIVERABLE 02 *********************");

// Concat

const students2 = [{ name: "Alan" }, "Evan", "Ana"];

// 1 - Concat
const concat = (a, b) => [...a, ...b];

console.log(concat(students2, students2));

// 2 - Multi-array concat version
//const multiConcat = (...array) => Array.prototype.concat(...array);
const multiConcat = (...array) => array.flat();

console.log(multiConcat(students2, students2, students2));