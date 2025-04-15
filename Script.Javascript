let currentCar;
let hintIndex = 0;

function startGame() {
  currentCar = cars[Math.floor(Math.random() * cars.length)];
  hintIndex = 0;
  document.getElementById("hint").innerText = currentCar.hints[hintIndex];
  document.getElementById("feedback").innerText = "";
  document.getElementById("guess").value = "";
}

function checkGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();

  if (guess === currentCar.brand.toLowerCase()) {
    document.getElementById("feedback").innerText = Correct! It's ${currentCar.brand}.;
  } else {
    document.getElementById("feedback").innerText = "Wrong guess. Try again!";
    if (hintIndex < currentCar.hints.length - 1) {
      hintIndex++;
      document.getElementById("hint").innerText = currentCar.hints[hintIndex];
    }
  }

  document.getElementById("guess").value = "";
}
