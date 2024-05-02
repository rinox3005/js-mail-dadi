'use strict';

//************Gioco dei dadi************//

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//************Soluzione semplice************//

// -- Utilizzo un randomizer per randomizzare da 1 a 6 e ne assegno il valore ad una variabile userRoll

const userRoll = Math.floor((Math.random() * 6) + 1);

console.log('User Roll: ', userRoll);

// -- Utilizzo un randomizer per randomizzare da 1 a 6 e ne assegno il valore ad una variabile computerRoll

const computerRoll = Math.floor((Math.random() * 6) + 1);

console.log('Computer Roll: ', computerRoll);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// -- SE userRoll > computerRoll stampo in pagina User Wins

if (userRoll > computerRoll) {

    console.log('User Wins');

    // -- ALTRIMENTI SE userRoll < computerRoll stampo in pagina Computer Wins
} else if (userRoll < computerRoll) {

    console.log('Computer Wins');

    // -- ALTRIMENTI stampo in pagina Draw
} else {

    console.log('Draw');
}
