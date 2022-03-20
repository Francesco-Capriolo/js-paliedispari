let namePalin = prompt('inserisci una parola palindroma');

while (namePalin == "" || !isNaN(namePalin) || namePalin == null) {
    namePalin = prompt('inserisci una parola palindroma');

}

function validatePalin(namePalin) {

    // inizializzare una variabile per fare il ciclo for 
    const len = namePalin.length;

    // uso il ciclo for per tutta la lunghezza della parola
    for (let i = 0; i < len; i++) {

        // vediamo se è una parola palindroma  
        if (namePalin[i] !== namePalin[len - 1 - i]) {
            console.log(namePalin + " non è una parola palindroma");
            return false;
        } else {
            console.log(namePalin + " è una parola palindroma");
        }
    }
    return true;
}

const word = validatePalin(namePalin);
console.log(word);

//oppure in questo modo

/* function isPalindromeInPlace(stringToCheck) {
    let reversedString = "";

    for (let i = stringToCheck.length - 1; i >= 0; i--) {
        reversedString += stringToCheck.charAt(i) //  reversedString += stringToCheck[i]
    }

    if (reversedString == stringToCheck) {
        return true;
    }

    // come se scrivessi l'else poiché il return è definitivo
    return false;
}

function isPalindromeByArray(stringToCheck) {
    return (stringToCheck.split('').reverse().join('') == stringToCheck);
    // let arrayDaStringa = stringToCheck.split("");
    // console.log(arrayDaStringa);
    // arrayDaStringa = arrayDaStringa.reverse();
    // console.log(arrayDaStringa);
    // arrayDaStringa = arrayDaStringa.join("");
    // console.log(arrayDaStringa);
} */

// devo verificare che la scritta userChoice o sia 'odd' oppure sia 'even'
let OddorEven = prompt("decidi pari o dispari?");

while (OddorEven != "pari" && OddorEven != "dispari") {
    OddorEven = prompt("decidi pari o dispari?");
}

//creamo una funzione per il pari o dispari
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

//creamo una funzione per un numero randomico dal computer
function randomComp(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

const compNumber = randomComp(0, 100);

// generiamo un numero dal prompt e anche random dal computer
const randomNumber = parseInt(prompt("inserisci un numero"));

function checkEven(randomNumber, compNumber) {
    return isEven(randomNumber + compNumber);
}

if (OddorEven == (checkEven(isEven))) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

const sumNumber = checkEven(randomNumber, compNumber);
console.log(sumNumber);


// devo verificare che la scritta userChoice o sia 'odd' oppure sia 'even'

/* let userChoice = "";

while (userChoice != 'even' && userChoice != 'odd') {
    userChoice = prompt('Odd or even?').toLowerCase().trim();
}

let userNumber = 0;

while ((userNumber < 1 || userNumber > 5) || isNaN(userNumber)) {
    userNumber = parseInt(prompt('Insert a number between 1 and 5').trim());
}

const aINumber = randomInteger(1, 5);
console.log(aINumber);
const sum = aINumber + userNumber;

if ((userChoice == 'even' && isEven(sum)) ||
    (userChoice == 'odd' && !isEven(sum))) {
    console.log('hai vinto!', ' la somma è: ', sum);
} else {
    console.log('hai vinto!', ' la somma è: ', sum);
} */

// funzione randomica

/* function randomInteger(minimumValue, maximumValue) {
    if (isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue))) {
        console.error('randomInteger(min, max) needs two numbers as argument');
    }
    return (Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
}

//funzione pari o dispari semplificata

/**
 * Function that checks if the given number is even.
 *
 * @param {*} number the number to check
 * @returns true if the number is even, false otherwise.
 */
/* function isEven(number) {
    return number % 2 === 0;
    // if ( number % 2 === 0 ){
    //    return true;
    // }
    // return false;
} */