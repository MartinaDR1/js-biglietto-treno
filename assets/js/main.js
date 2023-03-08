// Chiedere all'utente numero di chilomentri da percorrere
const km = Number(prompt('Quanti km devi percorrere?'));
console.log(km);

// Chiedere all'utente l'età
const userAge = Number(prompt('Quanti anni hai?'));
console.log(userAge);

// Valutare il prezzo del biglietto sulla base ai km (0.21 € al km)
let priceTotal = km * 0.21;

// Applicare sconto del 20% per i minorenni e del 40% per gli over65

if(userAge < 18){
    const under18 = priceTotal * 20 / 100;
    priceTotal = priceTotal - under18;
} else if (userAge >= 65){
    const over65 = priceTotal * 40 / 100;
    priceTotal = priceTotal - over65;
}

// Stampare risultato in pagina
let resultPriceTotal = priceTotal.toFixed(2)
console.log(resultPriceTotal);
const priceTotalTrain = document.getElementById('priceTrain');
priceTotalTrain.innerHTML = `Ciao, il prezzo del tuo biglietto è di: ${resultPriceTotal} €`

