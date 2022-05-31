//visualizzo in html 5 numeri random
//avvio un timer di 30 secondi
let numeriRandom = document.getElementById("numeriRandom");
let secondsLeft = 31;

const secondsTimer = setInterval(function() {
    secondsLeft--;
    timer30Seconds.innerHTML = `<span>00.00.${secondsLeft}</span>`;
    if (secondsLeft === 0) {
        //nascondo i numeri dopo 30 secondi
        document.getElementById("numeriRandom").style.display='none';
        //tramite un prompt, l'utente deve inserire i numeri che ha visto precedentemente, uno alla volta
        const userNumber = prompt("Inserisci i 5 numeri mostrati in precedenza, uno alla volta e separati da una virgola");
    }
    if (secondsLeft === 0) {
        clearInterval(secondsTimer);
    }
}, 1000);

//dopo aver inserito i 5 numeri, il software dice quanti e quali numeri da indovinare sono stati individuati






