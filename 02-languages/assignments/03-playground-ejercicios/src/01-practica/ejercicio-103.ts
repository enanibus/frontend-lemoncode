console.log("************** PRACTICE 103 *********************");
function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

function g(input) {
    let result;
    input === null ? result = "" : (input === undefined ? result = "Unknown" : result = input);
    return result;
}

function h(input) {
  let result;
  result = (input === undefined ? "Unknown" : input) || "";
  return result;
}

console.log(f(null));
console.log(f(undefined));
console.log(f("Pepe"));

console.log(g(null));
console.log(g(undefined));
console.log(g("Pepe"));

console.log(h(null));
console.log(h(undefined));
console.log(h("Pepe"));


