// console.log(
//   "This is your playground, experiment with JS code and check the console"
// );

// const students = [{ name: "Alan" }, "Evan", "Ana"];

// const head = ([first, ]) => first;
// console.log(head(students)); // { name: "Alan"}

// const tail = ([, ...rest]) => rest;
// console.log(tail(students)); // ["Evan", "Ana"]

// const init = (array) => array.slice(0, -1);
// console.log(init(students)); // [{ name: "Alan" }, "Evan"]

// //const last = array => array[array.length - 1];
// const last = (array) => array.slice(-1).pop();
// console.log(last(students)); // "Ana"

// const concat = (a, b) => [...a, ...b];
// console.log(concat(students, students));

// //const multiConcat = (...array) => Array.prototype.concat(...array);
// const multiConcat = (...array) => array.flat();

// function clone(source) {
//   return { ...source };
// }

// function merge(source, target) {
//   return clone({ ...target, ...source });
// }

// // Por ejemplo, dados estos 2 objetos:
// const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
// const b = { name: "Luisa", age: 31, married: true };

// // El resultado de mezclar a sobre b sería:
// const result = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// console.log(merge(a, b));

// function isBookRead(books, titleToSearch) {
//     const found = books.find(book => book.title == titleToSearch);
//     return found?.isRead ?? false;
// }

// // Ejemplo:
// const books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// TYPESCRIPT VERSION
// type Book = { title: string, isRead: boolean };
// type BookRead = (books: Array<Book>, titleToSearch: string) => boolean;

// const books = [
//   { title: "Harry Potter y la piedra filosofal", isRead: true },
//   { title: "Canción de hielo y fuego", isRead: false },
//   { title: "Devastación", isRead: true },
// ];

// const isBookRead: BookRead = (books, titleToSearch) =>
//   books.find((book) => book.title == titleToSearch)?.isRead ?? false;

// console.log(isBookRead(books, "Devastación")); // true
// console.log(isBookRead(books, "Canción de hielo y fuego")); // false
// console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("************** DELIVERABLE 05 *********************");

// Slot Machine

class SlotMachine {

    constructor() {
        this.coinCounter = 0;
    }

    play() {
        this.coinCounter++;
        (this.randomBoolean() && this.randomBoolean() && this.randomBoolean()) === true ?
         console.log("Congratulations!!!. You won " + this.coinCounter + " coins!!") : 
         console.log("Good luck next time!!");
    }

    randomBoolean() {
        return Math.random() >= 0.5;
    }
    
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
console.log(surnameFunction.call(person));
