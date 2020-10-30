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
    document.getElementById('rand').innerHTML = 'Numeri generati: ' + numberSoftware;

    // Dopo 30 secondi l'utente deve inserire i numeri dell'alert
    setTimeout(function (){

      // Chiedere 5 volte all'utente di inserire un numero da 1 a 50

      while (user.length < size) {
        var insertNumber = parseInt( prompt('inserisci il ' + (user.length + 1) + ' numero'));

        while (isNaN(insertNumber) ) {
          insertNumber = parseInt( prompt('inserisci il ' + (user.length + 1) + ' numero'));
        }
        if (! user.includes(insertNumber)) {
          user.push(insertNumber);
        }
        else {
          alert('numero già inserito')
        }
      }
      // collezione numeri giusti
      var remembered = [];
      for (var i = 0; i < user.length; i++) {
        if (numberSoftware.includes(user[i])) {
          remembered.push(user[i])
        }
      }
      // risultato
      alert('Risultati\n' + 'lista :\n ' + numberSoftware + '\nLista Utente : \n' + user + '\nIndovinati ' + remembered.length + ' numeri\n' + remembered );
      document.getElementById('user').innerHTML = 'Numeri utente: ' + user;
      document.getElementById('result').innerHTML = 'Risultati' + ' lista : ' + numberSoftware + ' Lista Utente : ' + user + ' Indovinati ' + remembered.length + ' numeri: ' + remembered;
  }, 3000)

      }); // <-- end doc ready

      // Function numeri random
      function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
