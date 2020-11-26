alert("\t\tBenvenuto nel gioco del campo minato.\nLa regola del gioco è solo una: NON BECCARE LE BOMBE");

/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

var x;
var level = -1;
while(level < 0 || level > 2){

    level = Number(prompt("Scegli il livello di difficoltà 0 / 1 / 2")); 
    switch (level) {
        case 0:
            x = 100;
            break;
        case 1:
            x = 80;
            break;
        case 2:
            x = 50;
            break;
        default:
            alert("Attenzione per scegliere il livello devi inserire un numero da 0 a 2");
            break;
    }
}
alert("Hai scelto il livello " + level + ": Dovrai evitare " + 16 + " bombe " + "su " + x + " caselle."+"\n\t\t\t\tBuona Fortuna!");

// Il computer deve generare 16 numeri casuali tra 1 e 100.    
// I numeri non possono essere duplicati
var numberPc = [];

while(numberPc.length<16){
    numeriRandom = Math.floor(Math.random() * x) + 1;
    if(!(numberPc.includes(numeriRandom))){
        numberPc.push(numeriRandom);
    }
}
console.log(numberPc);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

var numberPlayer = [];

while(numberPlayer.length< (x - 16)){

   var number = Number(prompt("Inserisci un numero da 1 a " + x));
//CONTROLLO ISNAN
    while (isNaN(number)){
        alert("Attenzione, inserisci un numero da 1 a " + x);
        number = Number(prompt("Inserisci un numero da 1 a " + x + " in Cifre"));
    }

    if (numberPc.includes(number)){
        alert("BOOOOMMMMMMM HAI BECCATO UNA MINA..");
/* 
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */
        alert("Hai evitato le mine " + numberPlayer.length + " volte su " + (x - 16) + " posti sicuri");
        alert("Se vuoi giocare ancora aggiorna la pagina!")
        break;
    }
    
    if(!(numberPlayer.includes(number)) && number <= x && number > 0){
        numberPlayer.push(number);
    }else {
        alert("Hai già inserito questo numero, oppure non è compreso tra 1 e " + x + ", prova con un altro numero");
    }
/*
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
*/
    if(numberPlayer.length > (x - 17)){
        alert("Bravoooo hai VINTO, sei riuscito a evitare tutte le Bombe");
        alert("Se vuoi giocare ancora aggiorna la pagina!");
    }
}
console.log(numberPlayer);


//Play Again
/* var playing = true;

var keepPlaying = prompt("Vuoi continuare a giocare? [S]/[N]")
if (keepPlaying == "N"){
playing = false;
} */