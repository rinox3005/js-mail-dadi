
//************Mail************//

Chiedi all’utente la sua email

-- creo una variabile userEmail, chiedo all'utente di inserire la sua mail tramite prompt ed assegno quel valore alla variabile

controlla che sia nella lista di chi può accedere

-- creo una variabile al cui interno é presente un array contenente la lista di email autorizzate

-- creo una variabile booleana emailValidation per fare un ckeck del login e la setto su false

-- confronto con un ciclo for la mail appena inserita dall'utente con quelle presenti all'interno dell'array

stampa un messaggio appropriato sull’esito del controllo.

-- SE il valore di emailValidation é true stampo in console "User Verified. Loading..."

-- ALTRIMENTI é false e stampo in console "Email not verified"



//************Gioco dei dadi************//

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//************Soluzione con array (anche no)************//

-- Creo una variabile che contiene un array con i numeri da 1 a 6

-- Utilizzo un randomizer per randomizzare da 0 a 5 la posizione da prendere che corrisponderá ad un valore da 1 a 6 per l'utente ed assegno il valore della posizione a una variabile userRoll

-- Utilizzo un randomizer per randomizzare da 0 a 5 la posizione da prendere che corrisponderá ad un valore da 1 a 6 per il computer ed assegno il valore della posizione a una variabile computerRoll

//************Soluzione semplice************//

-- Utilizzo un randomizer per randomizzare da 1 a 6 e ne assegno il valore ad una variabile userRoll

-- Utilizzo un randomizer per randomizzare da 1 a 6 e ne assegno il valore ad una variabile computerRoll

Stabilire il vincitore, in base a chi fa il punteggio più alto.

-- SE userRoll > computerRoll stampo in console User Wins

-- ALTRIMENTI SE userRoll < computerRoll stampo in console Computer Wins

-- ALTRIMENTI stampo in console Draw


