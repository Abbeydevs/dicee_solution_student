let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDice = "dice" + randomNumber1 + ".png";

let randomImage = "images/" + randomDice;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

let result = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  result.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  result.innerHTML = "Player 2 Wins!";
} else {
  result.innerHTML = "Draw!";
}
