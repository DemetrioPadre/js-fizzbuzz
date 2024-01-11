const cardsRow = document.getElementById('cards-row');
// 1.scriviamo un ciclo for che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //se il contatore è multiplo di 15 stampa fizzbuzz
    if (i % 15 == 0) {
        console.log('fizzbuzz');

    }
    // altrimenti se il contatore è multiplo di 5 stampa buzz
    else if (i % 5 == 0) {
        console.log('buzz');

    } // altrimenti se il contatore è multiplo di 3 stampo fizz
    else if (i % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }

    // cardsRow.innerHTML += `
    //     <div class="col-3">
    //         <div class="card" >
    //             <h3>card ${i}</h3>
    //         </div>
    //     </div>`;
    // 





}