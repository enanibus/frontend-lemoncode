console.log("************** PRACTICE 104 *********************");

function clone(source) {
  return { ...source };
}

function merge(source, target) {
  return clone({...target, ...source });
}

// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
const result = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(merge(a, b));



