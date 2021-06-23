// Click event listener to prompt 'prompt' questions when element "#generate" button is pushed.
document.querySelector("#generate").addEventListener("click", writePW);

// Arrays of numbers, symbols, and characters used in password generation
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">","?"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that are defined by user
var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmUpperChar;
var confirmLowerChar;

// Prompt appears, asking users how many characters they would like in the password. This starts the prompt sequence and will roll through using "ok" to confirm and "cancel" to skip.
function generatePW() {
  var confirmLength = (prompt("How many characters do you want your password to be?"));

// Loop back if answer is outside the parameters.
while(confirmLength <= 7 || confirmLength >= 129) {
  alert("Password length must be between 8-128 characters. Please enter the correct length.");
  var confirmLength = (prompt("How many characters would your password to be?"));
  } 

// User will define the desired variables (symbols, numbers, upper and lowercase letters).
  var confirmSymbols = confirm("Click OK if you want to include symbols in your password.");
  var confirmNumbers = confirm("Click OK if you want to include numbers in your password.");    
  var confirmLowerChar = confirm("Click OK if you want to to include lowercase letters in your password.");
  var confirmUpperChar = confirm("Click OK if you want to include uppercase letters in your password.");
 // If they opt out of all of the options, they must select atleast one.
while(confirmUpperChar === false && confirmLowerChar === false && confirmSymbols === false && confirmNumbers === false) {
  alert("You must choose at least one of the previous options to continue.");
  var confirmSymbols = confirm("Click OK to confirm that you want to include symbols.");
  var confirmNumbers = confirm("Click OK to confirm that you want to include numbers.");    
  var confirmLowerChar = confirm("Click OK to confirm that you want to include lowercase letters.");
  var confirmUpperChar= confirm("Click OK to confirm that you want to include uppercase letters.");   
  } 
// This section will assign actions to each if the criteria is selected
  var passwordChars = []
      
    if (confirmSymbols) {
      passwordChars = passwordChars.concat(symbols)
    }
    if (confirmNumbers) {
      passwordChars = passwordChars.concat(numbers)
    } 
    if (confirmLowerChar) {
      passwordChars = passwordChars.concat(lowerChar)
    }
    if (confirmUpperChar) {
      passwordChars = passwordChars.concat(upperChar)
    }
      console.log(passwordChars)

//Password string is empty since the variable is to be filled based on parameters
  var randomPW = ""
// This will present list based based on input password length and randomized selected character types. Adds 1 to each until value ceiling (128) is reached (based on variable of 'confirmLength' on line 25)
  for (var i = 0; i < confirmLength; i++) {
    randomPW = randomPW + passwordChars[Math.floor(Math.random() * passwordChars.length)];
    console.log(randomPW)
    }
    return randomPW;
}
// End of generation.

// Function to actually write and place password in "#password" element area.
function writePW() {
  var password = generatePW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}