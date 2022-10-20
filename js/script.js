// js

/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */


//variabili
const container = document.querySelector('.container');
const numCaselle = 100;
const inputBtn = document.getElementById('gioca');


inputBtn.addEventListener('click', function(){
    //ciclo for per generare i quadratini
    for(let i = 0; i < numCaselle; i++){
        squareGenerator(i);
    }
})





// funzioni

//crea quadrati
function squareGenerator(indexSquare){
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
    square.style.width = genCssClass();
    square.style.height = genCssClass();
    square.innerHTML = indexSquare + 1;
    square.addEventListener('click', clickSquare);
}

//imposta dimemensioni in base alla quantita
function genCssClass(){
    return `calc(100% / ${Math.sqrt(numCaselle)})`;
}

//cambia colore del quadrato al click
function clickSquare(){
    this.classList.add('square_click');
}