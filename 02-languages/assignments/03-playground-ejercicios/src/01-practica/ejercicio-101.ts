console.log("************** PRACTICE 101 *********************");
function biggestWord(phrase) {
    const string = phrase.split(" ");
    return string.sort((a, b) => b.length - a.length)[0]
}
console.log(biggestWord("Pepe es una malísima influenc")); // "malísima"
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
