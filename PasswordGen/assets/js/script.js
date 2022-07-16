// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; 
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function charecterInclusion() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharecter = "!@#$%^&*"

}
 
function generatePassword() {
  var password = "";
  var passwordLength = prompt("how long is the password")
  var lowerLetters = prompt("would you like letters");
  var caps = prompt("do you want capital letters");
  var number = "Do you want numbers in your password";
  var specialCharecter = prompt("do you want special charecters")

  // check if number 
  console.log(isNumeric(passwordLength))
  // check if passwordlengh >= 8or <=128
  if (passwordLength <= "128") {
    return true
  }
  if (lowerLetters = "yes") {
    
   }
  if (specialCharecter = "yes") {

  }
  if (caps = "yes") {
    return generateRandomLetter()
  }
  if (number = "yes") return Math.floor(Math.random() * 100);
  console.log(passwordLength)
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);