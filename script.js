// Assignment code here

var selectToolTip = document.getElementById(tooltip);





var lowercase
var uppercase
var numeric
var special

function generatePass() {
  var passlength = Number(window.prompt("Choose a password length between 8 and 128 characters.", 8));
  if (passlength >= 8 && passlength <= 128) {
    var lowercase = window.confirm("Should your password include lowercase?");
    var uppercase = window.confirm("Should your password include uppercase?");
    var numeric = window.confirm("Should your password include numeric values?");
    var special = window.confirm("Should your password include special characters?");
  } else {
    alert("Please choose a password between 8 and 128 characters");
  }
  var specials = ` !@#$%^&*()-_+={}[]|\/:;"'<>,.?`;
  var upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerletters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var passletters = "";
  if (lowercase == true) {
    passletters += lowerletters;
  } else { var passletters = upperletters;}
  if (numeric == true) {
    passletters += numbers;
  } else {};
  if (special == true) {
    passletters += specials;
  } else {};

var pass = "";
 for (var i = 0; i < passlength; i++) {
  var char = Math.floor(Math.random()
  * passletters.length + 1);

pass += passletters.charAt(char);  
 }

document.getElementById("password").innerHTML = pass;

};

  console.log(passlength);
  console.log(lowercase);
  console.log(uppercase);
  console.log(numeric);
  console.log(special);

  document.getElementById("generate").onclick() = generatePass()



 


