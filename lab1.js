function submitClicked() {
  var i = document.querySelector(".userinput").value;
  console.log(i);
  var k = validateInput(i);
  if(k ===  false ){
    alert("your input should either be rock, paper or scissors");
  }
  else{
    getResult(i);
  }
};

function getComputerChoise(){
  var choiseArray = ["rock", "paper", "scissors"];
  var compChoise = choiseArray[Math.floor(Math.random()*choiseArray.length)];
  return compChoise;
}

function getResult(userInput){
  var resultText;
  var generated;
  generated = getComputerChoise();
  if(userInput === generated){
    resultText = "are in a tie";
  }else
  if(userInput === "rock" && generated === "scissors"){
    resultText = "won";
  }
  if(userInput === "rock" && generated === "paper"){
    resultText = "lose";
  }
  if(userInput === "paper" && generated === "scissors"){
    resultText = "lose";
  }
  if(userInput === "paper" && generated === "rock"){
    resultText = "won";
  }
  if(userInput === "scissors" && generated === "rock"){
    resultText = "lose";
  }
  if(userInput === "scissors" && generated === "paper"){
    resultText = "won";
  }

  document.querySelector(".result").textContent = "you "+resultText ;
}

function validateInput(userInput){
  if(userInput === "scissors" || userInput === "rock" || userInput === "paper"  ){
    return true;
  }else {
    return false;
  }
}
