// Assignment Code
var generateBtn = document.querySelector("#generate");
var passCharUppr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passCharLwr = passCharUppr.toLowerCase()
var passNum = "0123456789"
var passSpec =  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var passPool = ''
userPass = []

// Write password to the #password input
function writePassword() {
 
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var passLength =  prompt("choose Password Length between 8 and 128");
  var promptUpper = prompt("UpperCase Y/N")
  var promptLower = prompt("LowerCase Y/N")
  var promptNum = prompt("Numbers Y/N")
  var promptSpecial = prompt("Special Characters Y/N")

  // Prompt for length
  if(passLength >= 8 && passLength <= 128){
    alert('correct')
  //passLength = passLength
   console.log(passLength)
  }else if(passLength < 8 || passLength > 128 || typeof(passLength)!== "number"){
  alert("please enter Length within range")
   passLength = 0
    console.log("REDO")
  }else{
    //return;
  }

  // Prompt for uppercase
  if(promptUpper === "Y" || promptUpper === "y"){
   passPool = passPool.concat(passCharUppr)
   console.log(passPool)
  }else{
    console.log("UPRwrong")
  }
  // Prompt for Lowercase
   if(promptLower === "Y" || promptLower === "y"){
   passPool = passPool.concat(passCharLwr)
   console.log(passPool)
  }else{
    console.log("LWRwrong")
  }
  // Prompt for Numbers
   if(promptNum === "Y" || promptNum === "y"){
   passPool = passPool + passNum
   console.log(passPool)
   }else{
     console.log("NUmWrong")
  }
  // Prompt for Special Characters
   if(promptSpecial === "Y" || promptSpecial === "y"){
   passPool = passPool + passSpec
   console.log(passPool)
   }else{
     console.log("specwrong")
  }

  //loop thru userpass array per user input password length
 for(var i = 0; i < passLength; i++){
    userPass.push(passPool[Math.floor(Math.random()* passPool.length)])
  };
 
  //log out password
  //password = generatePassword();

  /*function generatePassword() {
   if(userPass !== undefined){
    var text ="password: ".concat(...userPass)
     document.getElementById("password").innerHTML = text
    }*/

//password = generatePassword();
console.log(userPass)
alert("password: ".concat(...userPass))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
