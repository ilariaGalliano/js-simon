/****************
*
* Esercizio Simon
*
*****************/


  $(document).ready(function() {

    var numberSoftware = []; // dove vengono inseriti i numeri generati random
    var user = []; // dove vengono inseriti i numeri ricordati dall'utente
    var size = 5; // Numero di volte che vengono generati i numeri

    // uso funzione personalizzata
    var list = getRandomNum(1, 50);

    // Per non duplicare i numeri generati random
    while (numberSoftware.length < size) {
      var list = getRandomNum(1, 50);

      if (! numberSoftware.includes(list) ) {
          numberSoftware.push(list);
      }
    }
    console.log(numberSoftware);
    alert('I cinque numeri generati sono : ' + numberSoftware);


    // chiedere 5 volte all'utente il numero
    var askNumber = 5;

    // Dopo 30 secondi l'utente deve inserire i numeri dell'alert
    setTimeout(function (){

      // Chiedere 5 volte all'utente di inserire un numero da 1 a 50
      for (var i = 0; i < askNumber; i++) {

        var insertNumber = parseInt( prompt('inserisci un numero da 1 a 50'));

        while (user.includes(insertNumber) || isNaN(insertNumber) ) {
          var insertNumber = parseInt( prompt('No! inserisci un numero da 1 a 50'));
        }
        user.push(insertNumber);
        //console.log(user)
      }
    }, 30000)


    //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

    // if (numberSoftware === user) {
    //   console.log('i numeri corretti sono : ' + user);
    // }
    // else {
    //   console.log('i numeri inseriti sono sbagliati : ' + user);
    // }


 }); // <-- end doc ready

  // Function numeri random
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//document.getElementById('rand').innerHTML = 'Numeri generati: ' + numberSoftware;
