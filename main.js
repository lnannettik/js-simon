// CHECH
console.log(`JS OK`);


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




let numeriRandom = [];

let numeriUtente = [];

// genera i numeri iniziali usando la funzione getRandomNumber()
for (let i = 0; i < 5; i++) {
    numeriRandom.push(getRandomNumber())
}    

document.getElementById('display').innerHTML = `i tuoi numeri sono ${numeriRandom}`; 


// timer 30 sec
const countDown = document.getElementById('countDown');
let second = 5; // **********  30


const timer = setInterval (() => {

    // se il timer è < 3 cambia lo sfondo in red
    if((second <= 3) && (second > 0)) {
        document.querySelector('.body').classList.add('bgc-red')

        // elimina lo sfondo red dopo 30 sec
        const timerScnd = setTimeout (() => {
            document.querySelector('.body').classList.remove('bgc-red')
        }, 500);
    }

    // se il timer arriva a 0 fermati
    if(second === 0) {
        // stop the count
        clearInterval(timer)
        // add .d-none to #counDown
        document.getElementById('countDown').classList.add('d-none')
        // add .d-none to #display
        document.getElementById('display').classList.add('d-none')


        // l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()

        let numeriUtente = []

        for (let i = 0; i < 5; i++) {
            // let numeriUtente = []
            const insert = parseInt(prompt('Te li ricordi? Inserisci uno alla volta i numeri che ti ricordi!'))
            numeriUtente.push(insert)
            
            console.log(insert)
        }
        
        console.log(numeriUtente)


        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

        
        
    } else {
        // mostra il conteggio
        countDown.innerText = second;
        // sottrai 1 a second
        second--;
    }     
    
}, 1000);    




// ********************
// FUNZIONI
// ********************

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

