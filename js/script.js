// js

/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */


//variabili
const container = document.querySelector('.container');
const numCaselle = 100;


//ciclo for per generare i quadratini
for(let i = 0; i < numCaselle; i++){
    squareGenerator(i);
}







// funzioni

function squareGenerator(indexSquare){
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    square.style.width = genCssClass();
    square.style.height = genCssClass();
}

function genCssClass(){
    return `calc(100% / ${numCaselle})`;
}