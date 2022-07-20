// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowers = "abcdefghijklmnopqrstuvwxyz";
var Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!@#$%^&*"
var numbers = "1234567890"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value =  "";
  passwordText.value = password; 
}
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How long is the password")
  var Uppercase = confirm("Would you like Uppercase letters");
  var lowercase = confirm("Would you like lowercase letters");
  var number = confirm("Do you want numbers in your password");
  var specialCharecter = confirm("do you want special charecters")
  var charecterSet = "";
  // check if number 
  console.log(isNumeric(passwordLength))
  // check if passwordlengh >= 8or <=128
  if (passwordLength <= "128") {
    console.log(passwordLength)
  }
  if (Uppercase) {
    charecterSet += Uppers
  }
  if (lowercase = "yes") {
    charecterSet +=lowers 
  }
  if (specialCharecter = "yes") {
    charecterSet += specials 
  } 
  if (number) {
    charecterSet += numbers 
  }
  for(let i = 0; i<passwordLength; i++ ) {
    password += charecterSet[Math.floor(Math.random()* charecterSet.length)]
  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);