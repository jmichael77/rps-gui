// paper beats rock

// scissor beats paper

// rock beats scissor

var button = document.getElementById("calculate");

button.addEventListener("click", function() {
  var player = document.getElementById("input").value;

  console.log(player);

  var choices = ["Rock", "Paper", "Scissors"];

  var computer = choices[Math.floor(Math.random() * 3)];

  var output = ["You Win!", "You Lose!", "Draw"];

  if (player===computer){
  document.getElementById("rainbow").innerText = output[2];
  console.log("Draw!");
  } else if (player==="Rock" && computer === "Scissors"|| 
    player === "Paper" && computer==="Rock"||
    player==="Scissors"&&computer==="Paper") {
    document.getElementById("rainbow").innerText = output[0];
    console.log("You Win!");
    } else if (player === "") {
    document.getElementById("input").placeholder = "Please Enter Some Text!";
    } else {
    document.getElementById("rainbow").innerText = output[1];
    console.log("You Lose!");
    }

  document.getElementById("user-h2").innerText = player;

  document.getElementById("cpu-h2").innerText = computer;

  if (player === "") {
     document.getElementById("cpu-h2").innerText = "";
  }

});