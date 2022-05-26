const parolaUtente = prompt("Inserisci una parola");
const parolaDaSinistra = [];
const parolaDaDestra = [];

const parolaScomposta = parolaUtente.split("");

for(let i = 0; i < parolaScomposta.length; i++) {

    parolaDaSinistra.push(parolaScomposta[i]);
    console.log(parolaDaSinistra);
}

for(let i = parolaScomposta.length; i >= 0; i--) {

    parolaDaDestra.push(parolaScomposta[i]);
    console.log(parolaDaDestra);
    
}

if (parolaDaSinistra.join("") === parolaDaDestra.join("")) {
    console.log("la parola è plaindroma");
} else {
    console.log("la parola non è palindroma");
}

console.log(parolaDaDestra);
console.log(parolaDaSinistra);


