console.log("************** PRACTICE 105 *********************");

// Deep Equal

// Apartado A
const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

// Implementation 1 - No nested objects
function isEqual(a, b) {
  for (var p in a) {
    if (a.hasOwnProperty(p)) {
      if (a[p] !== b[p]) {
        return false;
      }
    }
  }
  for (var p in b) {
    if (b.hasOwnProperty(p)) {
      if (a[p] !== b[p]) {
        return false;
      }
    }
  }
  return true;
}

// Implementation 2
function isEqual2(a, b) {
  return Object.entries(a).toString() === Object.entries(b).toString();
}

// Implementation 2 - Nested objects
function isEqual3(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual(user, clonedUser)); // true
console.log(isEqual2(user, clonedUser)); // true
console.log(isEqual3(user, clonedUser)); // true

// Apartado B
const user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
const clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === "function") {
    return a.toString() === a.toString();
  }

  if (a instanceof Object && b instanceof Object) {
    if (properties(a) !== properties(b)) {
      return false;
    }
    for (let p in a) {
      if (!isEqual(a[p], b[p])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}

function properties(obj) {
  let numProps = 0;
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
        numProps++;
    }
  }
  return numProps;
}

console.log(isDeepEqual(user2, clonedUser2)); // true
