// Name variables to store each charsType Array of options

function generatePassword() {
    let uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '\'', '\"', ',', '.', '/', '<', '>', '?'];
  
  //Check in the console if button has been pressed
  console.log("Button pressed.")
  
  // User select Character length
    passwordLength = prompt("Please choose the number of characters for your password. (A minimum of 8 characters or a maximum of 128 characters)");
    if (passwordLength < 8 || passwordLength > 128){
      console.log("User input violates password length parameter. Prompted to re-enter");
      return "Please choose a valid number of characters.";
    }else{
      console.log("Selected characters: " + passwordLength);
    }
  
    //User selects if they want to use upper case letters.
    hasuppercaseChars = confirm("Do you want uppercase characters?");
    if (hasuppercaseChars){
      console.log("Uppercase characters accepted.");
    }else{
      console.log("Uppercase characters declined.");
    }
  
    //User selects if they want to use lower case letters.
    haslowercaseChars = confirm("Do you want lowercase characters?");
    if (haslowercaseChars) {
      console.log("Lowercase characters accepted.");
    }else{
      console.log("Lowercase characters declined.");
    }
  
    //User selects if they want to use numbers.
    hasnumericChars = confirm("Do you want to use numbers?");
    if (hasnumericChars) {
      console.log("Numbers accepted.");
    }else{
      console.log("Numbers characters declined.");
    }
    
  //User selects if they want to use special characters.
    hasspecialChars = confirm("Do you want special characters?");
    if (hasspecialChars) {
      console.log("Special characters accepted.");
    }else{
      console.log("Special characters declined.");
    }

  //Make sure at least one charstype is selected.
    if (!hasuppercaseChars && !haslowercaseChars && !hasnumericChars && !hasspecialChars) {
      console.log("No character types selected. User promted to choose again.")
      return "Please select at least one of the character types to continue.";
    };
  
    // Selection of Chartypes by user. Links(concatenates) whole array of the user 
    //selection on the emptyCharArr variable which contains an empty array.
    let emptyCharArr = [];
    
    if (hasuppercaseChars) {
      emptyCharArr = emptyCharArr.concat(uppercaseChars);
    }

    if (haslowercaseChars) {
      emptyCharArr = emptyCharArr.concat(lowercaseChars);
    }


    if (hasnumericChars) {
      emptyCharArr = emptyCharArr.concat(numericChars);
    }


    if (hasspecialChars) {
      emptyCharArr = emptyCharArr.concat(specialChars);
    }
  
    // Selection of random characters added, one by one in the generatedPassword variable
    let generatedPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      let indexSelector =[Math.floor(Math.random() * emptyCharArr.length)];
      generatedPassword += emptyCharArr[indexSelector];
      console.log("Password generated and displayed.")
    }
    return generatedPassword;
  };
  
  // Calls the #generate id to accept click inside the <button> element.
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);