﻿let score = 0;
let timeRemaining = 30;
let timerInterval;


document.addEventListener("DOMContentLoaded", () => {
  startGame();
});


function startGame() {
  timerInterval = setInterval(updateTimer, 1000);
  moveTarget();
}


function registerHit() {
  score++;
  document.getElementById("score").innerText = "Score: " + score;
  moveTarget();
}


function moveTarget() {
  const gameContainer = document.getElementById("game-container");
  const target = document.getElementById("target");


  const x = Math.random() * (gameContainer.clientWidth - target.clientWidth);
  const y = Math.random() * (gameContainer.clientHeight - target.clientHeight);


  target.style.left = x + "px";
  target.style.top = y + "px";
}


function updateTimer() {
  timeRemaining--;
  document.getElementById("timer").innerText = "Time: " + timeRemaining;


  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    alert("Game Over! Your score is: " + score);
  }
}
