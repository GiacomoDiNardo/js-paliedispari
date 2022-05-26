const parolaUtente = prompt("Inserisci una parola");



function palindroma (parola) {
    const parolaRegular = [];
    const parolaReverse = [];

    const parolaScomposta = parola.split("");
    
    for(let i = 0; i < parolaScomposta.length; i++) {

        parolaRegular.push(parolaScomposta[i]);
        // console.log(parolaRegular);
    }

    for(let i = parolaScomposta.length; i >= 0; i--) {

        parolaReverse.push(parolaScomposta[i]);
        // console.log(parolaReverse);

    }

    if (parolaRegular.join("") === parolaReverse.join("")) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma");
    }
}

console.log(palindroma(parolaUtente));