const check = document.querySelector(".check");
const msg = document.querySelector(".message");
const reset = document.querySelector("#restart");

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

check.addEventListener("click", numCheck);
reset.addEventListener("click", restart);

function numCheck() {
  const guess = Number(document.getElementById("userNum").value);

  if (!guess) {
    msg.textContent = "no number";
  } else if (guess == secretNumber) {
    document.getElementById("secretNum").textContent = secretNumber;
    document.querySelector("#section").classList.add("bg-change");
    msg.textContent = "correct Number";
    highScore();
  } else if (guess > secretNumber) {
    highValue();
  } else if (guess < secretNumber) {
    lowValue();
  }
}

function highValue() {
  if (score > 1) {
    msg.textContent = "number is too high";
    score--;
    document.querySelector(".score").textContent = score;
    document.getElementById("userNum").value = "";
  } else {
    msg.textContent = "You Lost the game";
    document.querySelector(".score").textContent = 0;
    document.querySelector("#section").classList.add("over");
  }
}

function lowValue() {
  if (score > 1) {
    msg.textContent = "number is too low";
    score--;
    document.querySelector(".score").textContent = score;
    document.getElementById("userNum").value = "";
  } else {
    msg.textContent = "You Lost the game";
    document.querySelector(".score").textContent = 0;
    document.querySelector("#section").classList.add("over");
  }
}

function highScore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

function restart() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.getElementById("secretNum").textContent = "?";
  document.getElementById("userNum").value = "";
  document.querySelector("#section").classList.remove("bg-change");
  document.querySelector("#section").classList.remove("over");
}
