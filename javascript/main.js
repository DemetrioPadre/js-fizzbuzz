const cardsRow = document.getElementById('cards-row');

// 1.scriviamo un ciclo for che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let result;
    //se il contatore è multiplo di 15 stampa fizzbuzz
    if (i % 15 == 0) {

        result = 'fizzbuzz';
        const box = `<div class="card d-flex bg-warning "> ${result}</div> `;
        cardsRow.innerHTML += box;
    }
    // altrimenti se il contatore è multiplo di 5 stampa buzz
    else if (i % 5 == 0) {
        result = 'buzz';
        const box = `<div class="card d-flex bg-primary"> ${result}</div> `;
        cardsRow.innerHTML += box;




    } // altrimenti se il contatore è multiplo di 3 stampo fizz
    else if (i % 3 == 0) {
        result = 'fizz';
        const box = `<div class="card d-flex bg-danger "> ${result}</div> `;
        cardsRow.innerHTML += box;

    } else {
        result = i;
        const box = `<div class="card d-flex  "> ${result}</div> `;
        cardsRow.innerHTML += box;


    }

}