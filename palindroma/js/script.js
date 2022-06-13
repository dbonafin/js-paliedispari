// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Ask the user a word that will be checked by our program
const userWord = prompt("Inserisci una parola");
// The condition of the function
const palindromeOrNot = isPalindrome(userWord);

// Logic process of the function for check if the word is palindrome or not

function isPalindrome() {
    // Two elements to compare
    // One at the start and the other one at the end of the string
    i = 0; 
    j = userWord.length - 1;

     // Increment first element and decrement the other one
    while (i < j) {
        const forwardProgression = userWord.charAt(i++);
        const backwardProgression = userWord.charAt(j--);

        // If they are not equals the return is false in console
        if (forwardProgression !== backwardProgression) {
            return false;
        }

    }
    // If they are equals the return is true in console
    return true;
}

// Output result in console
console.log(palindromeOrNot);


