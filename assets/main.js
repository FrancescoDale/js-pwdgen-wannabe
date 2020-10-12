var userName;
var userSurname;
var userColor;

var userName = prompt(' inserire Nome: ');
var userSurname = prompt( ' inserire Cognome: ');
var userColor = prompt(' qual è il tuo colore preferito? :');

document.getElementById('pwd').innerHTML = document.getElementById('pwd').innerHTML + userName + userSurname + userColor + 20;
