
function giocoDadi() {
    
    // Variabile per numero di tiri
    let tiri = prompt("Quanti tiri devono essere effettuati per ogni giocatore?");
    
    // Variabili per i punteggu
    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;
    
    // Ciclo for per punteggio random
    for (let i = 0; i < tiri; i++) {
        punteggioGiocatore1 += Math.floor(Math.random() * 6) + 1;
        punteggioGiocatore2 += Math.floor(Math.random() * 6) + 1;
    }
    
    // Punteggi giocatori
    console.log("Punteggio Giocatore 1: " + punteggioGiocatore1);
    console.log("Punteggio Giocatore 2: " + punteggioGiocatore2);
    
    // Chi ha vinto?
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log("Il Giocatore 1 ha vinto!");
    } else if (punteggioGiocatore1 < punteggioGiocatore2) {
        console.log("Il Giocatore 2 ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}

giocoDadi();