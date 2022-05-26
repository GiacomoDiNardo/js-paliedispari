const sceltaUtente = prompt("Scegli pari o dispari")
const numUtente = parseInt(prompt("Scegli un numero da 1 a 5"))


if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
    alert("valore inserito non valido")
}
//generiamo numero random da 1 a 5 per il computer

const numComputer = Math.floor(Math.random() * 5) + 1

const somma = numUtente + numComputer

console.log(somma);

function isPari(numero) {
    const result = numero % 2 === 0;
  
    return result;
}

if (sceltaUtente === "pari" && isPari(somma) === true) {
    console.log("utente vince");
} else if (sceltaUtente === "dispari" && isPari(somma) === false) {
    console.log("utente vince");
} else {
    console.log("computer vince");
}