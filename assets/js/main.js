// Chiedere all'utente numero di chilomentri da percorrere
const km = Number(prompt('Quanti km devi percorrere?'));
console.log(km);

// Chiedere all'utente l'età
const userAge = Number(prompt('Quanti anni hai?'));
console.log(userAge);

// Valutare il prezzo del biglietto sulla base ai km (0.21 € al km)
const priceTotal = Math.abs (km * 0.21);
const resultPriceTotal = priceTotal.toFixed(2)
console.log(resultPriceTotal);

// Applicare sconto del 20% per i minorenni e del 40% per gli over65
const under18 = Math.abs ((priceTotal * 20) / 100);
const discountTotalUnder18 = Math.abs (priceTotal - under18);
const resultUnder18= discountTotalUnder18.toFixed(2);
console.log(resultUnder18);

// Applicare sconto del 40% per gli over65
const over65 = Math.abs ((priceTotal * 40) / 100);
const discountTotalOver65 = Math.abs (priceTotal - over65);
const resultOver65= discountTotalOver65.toFixed(2);
console.log(resultOver65);

// Stampare risultato in pagina
if(userAge < 18){
    const priceTotalTrain = document.getElementById('priceTrain');
    priceTotalTrain.innerHTML = `Ciao, il prezzo del tuo biglietto è di: ${resultUnder18} €`
} else if (userAge >= 65){
    const priceTotalTrain = document.getElementById('priceTrain');
    priceTotalTrain.innerHTML = `Ciao, il prezzo del tuo biglietto è di: ${resultOver65} €`
} else {
    const priceTotalTrain = document.getElementById('priceTrain');
    priceTotalTrain.innerHTML = `Ciao, il prezzo del tuo biglietto è di: ${resultPriceTotal} €`
}


