// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Ask the user to pick even or odd
const userChoice = prompt("Scegli pari o dispari")
// Ask the user a number between 1 and 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
// Result number
const sommaNumeri = userNumber + genRandomNumb(1,5);

// Function that generates a random number between 1 and 5
function genRandomNumb(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
}

// Function that checks if the result number is even or odd
const userNumberEvenOrOdd = isEvenOrOdd(userNumber);

function isEvenOrOdd() {
    let evenOrOdd;

    if (sommaNumeri % 2 === 0) {
        evenOrOdd = "pari";
    } else {
        evenOrOdd = "dispari";
    }

    return evenOrOdd;
}

// Check if the user picks the winner choice
if (userChoice === userNumberEvenOrOdd) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}
