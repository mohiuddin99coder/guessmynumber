const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (secret) {
  document.querySelector(".number").textContent = secret;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const numberWidth = function (width) {
  document.querySelector(".number").style.width = "15rem";
};
const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const secretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let result = secretNumber();
let score = 20;
let highScore = 0;

// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  }
  // When player wins
  else if (guess === result) {
    displayMessage("🎉 Correct Number");
    displayNumber(result);
    numberWidth("30rem");
    changeBackground("darkGreen");
    if (highScore < score);
    {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== result) {
    if (score > 1) {
      displayMessage(guess > result ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }

  // //When guess is too high
  // else if (guess > result) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // //when guess is too low.
  // else if (guess < result) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  result = secretNumber();
  score = 20;

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  displayNumber("?");
  displayScore(score);
  changeBackground("#222");
  numberWidth("15rem");
});
