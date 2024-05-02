'use strict';

//************Mail************//

// Chiedi all’utente la sua email

// -- creo una variabile userEmail, chiedo all'utente di inserire la sua mail tramite prompt ed assegno quel valore alla variabile

const userEmail = prompt('Enter e-mail:');

// controlla che sia nella lista di chi può accedere

// -- creo una variabile al cui interno é presente un array contenente la lista di email autorizzate

const authorizedEmails = ['alan.damario@gmail.com', 'alessandro.barate@libero.it', 'andrea.vigna@gmail.com', 'peppe.rinox@gmail.com'];

console.log('Authorized Emails: ', authorizedEmails)
console.log('Email used to access: ', userEmail)

// -- confronto con un ciclo la mail appena inserita dall'utente con quelle presenti all'interno dell'array

// -- creo una variabile booleana emailValidation per fare un ckeck del login e la setto su false
let emailValidation = false;

// -- confronto con un ciclo for la mail appena inserita dall'utente con quelle presenti all'interno dell'array
for (let i = 0; i < authorizedEmails.length; i++) {

    if (userEmail === authorizedEmails[i]) {
        emailValidation = true;
        break;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.

// -- SE il valore di emailValidation é true stampo in console "User Verified. Loading..."
if (emailValidation === true) {
    console.log('User Verified. Loading...');

    // -- ALTRIMENTI é false e stampo in console "Email not verified"
} else {
    console.log('Email not verified');
}