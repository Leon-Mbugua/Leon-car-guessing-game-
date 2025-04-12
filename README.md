# Leon-car-guessing-game-
This is a guessing game about cars ,who doesn't like cars anyway?? Enjoy🥳
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Car Guessing Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f2f2f2;
      text-align: center;
      padding: 50px;
    }
    input, button {
      padding: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h1>Car Guessing Game</h1>
  <p>Guess the car brand I'm thinking of:</p>
  <input type="text" id="guessInput" placeholder="Type car brand">
  <button onclick="checkGuess()">Guess</button>
  <p id="result"></p>

  <script>
    const carBrands = ["Toyota", "Honda", "BMW", "Mercedes", "Nissan", "Ford"];
    const answer = carBrands[Math.floor(Math.random() * carBrands.length)].toLowerCase();
    let attempts = 3;

    function checkGuess() {
      const guess = document.getElementById("guessInput").value.toLowerCase();
      const result = document.getElementById("result");

      if (guess === answer) {
        result.textContent = "Correct! You guessed it!";
      } else {
        attempts--;
        if (attempts > 0) {
          result.textContent = `Wrong! You have ${attempts} attempt(s) left.`;
        } else {
          result.textContent = `Game Over! The correct answer was: ${answer}`;
        }
      }
    }
  </script>

</body>
</html>
