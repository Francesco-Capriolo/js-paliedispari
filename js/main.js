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