console.log("************** DELIVERABLE 04 *********************");

// Read Books

// Javascript version
function isBookRead(books, titleToSearch) {
  const found = books.find((book) => book.title == titleToSearch);
  return found?.isRead ?? false;
}

// Ejemplo:
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Typescript version
type Book = { title: string; isRead: boolean };
type BookRead = (books: Array<Book>, titleToSearch: string) => boolean;

const isBookRead2: BookRead = (books, titleToSearch) =>
  books.find((book) => book.title == titleToSearch)?.isRead ?? false;

console.log(isBookRead2(books, "Devastación")); // true
console.log(isBookRead2(books, "Canción de hielo y fuego")); // false
console.log(isBookRead2(books, "Los Pilares de la Tierra")); // false
