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

//verifica presenza email
let emailValidation = false;

// check presenza email
for (let i = 0; i < authorizedEmails.length; i++) {

    if (userEmail === authorizedEmails[i]) {
        emailValidation = true;
        break;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.

// -- SE la mail é presente all'interno dell'array stampo in pagina "User Verified. Loading..."
if (emailValidation === true) {
    console.log('User Verified. Loading...');

    // -- ALTRIMENTI SE la mail non é presente stampo in pagina "Email not verified"
} else {
    console.log('Email not verified');
}