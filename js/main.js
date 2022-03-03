/* const namePalin = prompt('inserisci una parola palindroma');

while (namePalin == "" || !isNaN(namePalin) || namePalin == null) {
    let namePalin = prompt('inserisci una parola palindroma');

    namePalin++;
}
 */
// accept the string or number from the prompt  
const namePalin = prompt('inserisci una parola palindroma');

function validatePalin(namePalin) {

    // inizializzare una variabile per fare il ciclo for 
    const len = namePalin.length;

    // uso il ciclo for per tutta la lunghezza della parola
    for (let i = 0; i < len / 2; i++) {

        // vediamo se è una parola palindroma  
        if (namePalin[i] !== namePalin[len - 1 - i]) {
            alert('Non è una parola palindroma');
        }
    }
    console.log(namePalin + " è una parola palindroma");
}

const value = validatePalin(namePalin);

console.log(value);