console.log("************** DELIVERABLE 03 *********************");

// Clone Merge

// 1 - Clone
function clone(source) {
  return { ...source };
}

const original = {
  name: "Evan",
  surname: "Smith",
  country: {
    id: 21,
    name: "Spain",
    iso3: "SPA",
  },
};

console.log(original);

const copy = clone(original);

console.log(copy);
console.log(copy.country); // {id: 21,name: "Spain",iso3: "SPA"}
console.log(original.country === copy.country); // true

copy.country.id = 23;

console.log(original.country); // {id: 23,name: "Spain",iso3: "SPA"}
console.log(copy.country); // {id: 23,name: "Spain",iso3: "SPA"}

// 2 - Merge
function merge(source, target) {
  return clone({ ...target, ...source });
}

// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
const result = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log(result);
