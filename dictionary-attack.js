var wordsList = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// function init() {
//
//
//
// var wordsFile = "https://raw.githubusercontent.com/angelahuqing/senators-project/master/dictionary.txt";
// $.get(wordsFile, function(data) {
// document.getElementById("btnSubmit").disabled = true;
// wordsList = data.split('\n');
// document.getElementById("btnSubmit").disabled = false;
// });
// }
//
// window.onload = init;


function checkPassword() {
  var word = document.getElementById("pw").value;
  var x = false;
  var output = ""
  for (var i=0; i < wordsList.length; i++) {
    if (word == wordsList[i]){
      x=true;
      break;
    } else {
      output = wordsList[i]
    }
  }
  if (x==false) {
      document.getElementById("results").innerHTML = output;
  }
  else {
    document.getElementById("results").innerHTML = "Weak Password";
  }
}

// get user input
// replace character
// loop
// compare elements
// change boolean value to true
// print result
