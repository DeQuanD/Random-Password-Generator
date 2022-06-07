// Assignment Code
var generateBtn = document.querySelector("#generate");
var passCharUppr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passCharLwr = passCharUppr.toLowerCase()
var passNum = "0123456789"
var passSpec =  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var passPool = ''
//userPass = []

// Write password to the #password input
function writePassword() {
  var userPass = []
  var passwordText = document.querySelector("#password");
  var passLength =  prompt("Choose Password Length between 8 and 128");
  var promptUpper = prompt("Do you want to include UPPERCASE letters? Y or N")
  var promptLower = prompt("Do you want to include LOWERCASE letters? Y or N")
  var promptNum = prompt("Do you want to include NUMBERS? Y or N")
  var promptSpecial = prompt("Do you want to include SPECIAL CHARACTERS? Y or N")

  // Prompt for length
  if(passLength >= 8 && passLength <= 128){
    //alert('correct')
   console.log(passLength)
  }else if(passLength < 8 || passLength > 128 || typeof(passLength)!== "number"){
  alert("please enter Length within range")
   passLength = 0
    console.log("REDO")
  }else{
  }

  // Prompt for uppercase
  if(promptUpper === "Y" || promptUpper === "y"){
   passPool = passPool.concat(passCharUppr)
   console.log(passPool)
  }else{
  }

  // Prompt for Lowercase
   if(promptLower === "Y" || promptLower === "y"){
   passPool = passPool.concat(passCharLwr)
   console.log(passPool)
  }else{
  }

  // Prompt for Numbers
   if(promptNum === "Y" || promptNum === "y"){
   passPool = passPool + passNum
   console.log(passPool)
   }else{
  }

  // Prompt for Special Characters
   if(promptSpecial === "Y" || promptSpecial === "y"){
   passPool = passPool + passSpec
   console.log(passPool)
   }else{
  }

  //loop thru userpass array per user input password length
 for(var i = 0; i < passLength; i++){
    userPass.push(passPool[Math.floor(Math.random()* passPool.length)])
  };

  //log out password
  passwordText.innerHTML = userPass.join('');
//console.log(userPass)
//alert("password: ".concat(...userPass))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
