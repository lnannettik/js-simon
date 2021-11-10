// CHECH
console.log(`JS OK`);


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




let numeriRandom = [];

let random = '';
// let numeriUtente = [];


for (let i = 0; i < 5; i++) {
    random += [getRandomNumber()];   
    numeriRandom.push('random')
    // console.log(random)   
    console.log(random)
}    


// timer 30 sec

const countDown = document.getElementById('countDown');
let second = 2; // **********  30


const timer = setInterval (() => {
    if(second === 0) {
        // stop the count
        clearInterval(timer)
        // add .d-none to counDown
        document.getElementById('countDown').classList.add('d-none')

    } else {
        // mostra il conteggio
        countDown.innerText = second;
        // sottrai 1 a second
        second--;
    } 
    
    // if((second <= 3) && (second > 0)) {
    //     const timerScnd = setInterval (() => {
    //         document.querySelector('.body').classList.add('bgc-red')
    //     } 
        
    //     , 500);
    
}, 1000);


// l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()

const insert = parseInt(prompt('Te li ricordi? Inserisci uno alla volta i numeri che ti ricordi! Primo...'))
console.log(insert)



// ********************
// FUNZIONI
// ********************

function getRandomNumber() {
    return Math.round(Math.random() * 100);
}

