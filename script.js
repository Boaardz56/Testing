//getting into button
var generateBtn = document.querySelector("#generate");

//Create array of variables for globals
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*-=_";
var passUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "_"];
var totalPassChar = ["passUpperChar" + "passLowerChar" + "passSpecial" + "passNumbers"];
var randomSet = new Random();
var passCriteria = [];

//initialize random functions array
let password = {};
let randomChar = "";
// let totalPassword;

//builing password
function generatePassword() {

  //prompt to ask how many character user wants for min and max range
var numberOfChar = prompt("Enter a number of character between 8-128");

 if (numberOfChar <=8 && numberOfChar <=128) {
   alert("Password length must be between 8-128 characters");
 }
   
  //prompt to ask what other values they want
    var confirmUpper = confirm("Do you want uppercase letters?");
    var confirmLower = confirm("Do you want lowercase letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecial = confirm("Do you want special characters?");

    console.log("All questions asked");
  // define generators
 


  var upperCaseGenerator


   // add in conditional statements
   if (confirmUpper === true) {
      var upper = upperCaseGenerator[]
      totalPassword += passCriteria.concat(passUpperChar);
     }

    if (confirmLower === true) {
      var lower = lowerCaseGenerator[]
      totalPassword += passCriteria.concat(passLowerChar);
     }

    if (confirmNumbers === true) {
      var number = numberGenerator()
      totalPassword += passCriteria.concat(passNumbers);
    }
    
    if (confirmSpecial === true) {
      var symbol = symbolGenerator()
       totalPassword += passCriteria.concat(passSpecial);
    }

    console.log("Password so far:" + totalPassword);
    
    else {

      return false
    }
 
  }

  
  //return random char; 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
