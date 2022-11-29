var startbtn = document.getElementById("start");
var timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
const square = document.querySelectorAll(".square");
const reset = document.getElementById("reset");
const grid = document.getElementById("grid");
let moleInterval;
let scoreCounter = 0;
let gameTimer;
let gameTimeCount = 15;
let gamestarted = false;
const showMole = `<img src="https://w7.pngwing.com/pngs/447/597/png-transparent-whac-a-mole-crappy-flappy-moles-android-video-game-android-mammal-carnivoran-vertebrate-thumbnail.png" id="mole-img"></img>`;

const randomMole = () => {
  let mole = document.querySelector(".mole");
  mole.classList.remove("mole");
  mole.innerHTML = "";
  let randomSquare = square[Math.floor(Math.random() * square.length)];
  randomSquare.classList.add("mole");
  randomSquare.innerHTML = showMole;
};

const startGame = () => {
  if (!gamestarted) {
    gamestarted = true;
    scoreCounter = 0;
    moleInterval = setInterval(() => {
      randomMole();
    }, 1000);

    gameTimer = setInterval(() => {
      gameTimeCount--;
      timeLeft.innerHTML = gameTimeCount + "s";
      checkGameTimer();
    }, 1000);
  }
};

const checkGameTimer = () => {
  if (gameTimeCount === 0) {
    clearInterval(gameTimer);
    clearInterval(moleInterval);
    gamestarted = false;
    gameTimeCount = 15;
  }
};

const scoreCount = () => {
  if (gamestarted) {
    scoreCounter++;
    score.innerHTML = scoreCounter;
  }
};

const resetGame = () => {
  clearInterval(moleInterval);
  clearInterval(gameTimer);
  scoreCounter = 0;
  gameTimeCount = 15;
  timeLeft.innerHTML = gameTimeCount + "s";
  score.innerHTML = scoreCounter;
  gamestarted = false;
};

startbtn.addEventListener("click", startGame);
grid.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("mole")) {
    scoreCount();
  }
});

reset.addEventListener("click", resetGame);
