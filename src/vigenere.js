var vigenere = {};
var helper = {};

vigenere.encode = function(message, keyword) {
  var alphabet = helper.alphabet(); //get the alphabet
  var customKey = helper.keywordResize(message, keyword); //get the keyword, normalized for the length of the message
  var splitMsg = message.split("");

  var encodedLetters = splitMsg.map(function(element, index){
    var msgLetterPosition = alphabet.indexOf(element); //finds the index of each letter in the message
    var keywordLetterPosition = alphabet.indexOf(customKey[index]); //finds the index of each letter in the customKey
    var encodedLetterPosition = msgLetterPosition + keywordLetterPosition; //adds the index of message & customKey index together and 'circles' back if greater than alphabet
    if(encodedLetterPosition > alphabet.length) encodedLetterPosition -= alphabet.length; //if new key is greater than the alphabet it subtracts the length of the alphabet
    return alphabet[encodedLetterPosition]; //returns the new encoded letter
  })

  return encodedLetters.join(""); //joins the array of encoded letters back together

}

vigenere.decode = function(message, keyword) {
  //var declaration
  var alphabet = helper.alphabet();
  var customKey = helper.keywordResize(message, keyword);
  var splitMsg = message.split("");
  //mapping decoded message
  var decodedLetters = splitMsg.map(function(element, index){
    var letterIndex = alphabet.indexOf(element) - alphabet.indexOf(customKey[index]);
    if(letterIndex < 0) letterIndex += alphabet.length;
    return alphabet[letterIndex];
  });
  return decodedLetters.join("");
}

//Adjusts the side of the keyword to match the size of the message
helper.keywordResize = function(message, keyword) {
  var result = "";
  var splitMsg = keyword.split("");
  for (var i = 0; i < message.length; i++ ) {
    var position = i % keyword.length;
    result += splitMsg[position];
  }
  return result;
}

//Returns the alphabet as an array
helper.alphabet = function(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("")
  return alphabet;
}