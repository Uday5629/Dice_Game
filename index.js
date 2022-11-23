var n = Math.random();
n = n * 6;
var RandomVariable = Math.floor(n) + 1;

var diceImageSource = "images/dice" + RandomVariable + ".png";

//selection
var diceImage = document.querySelectorAll("img")[0];

diceImage.setAttribute("src", diceImageSource);

var RandomVariable2 = Math.floor(Math.random() * 6) + 1;

var DiceImgSrc = "images/dice" + RandomVariable2 + ".png";

var diceimg2 = document.querySelectorAll("img")[1];

diceimg2.setAttribute("src", DiceImgSrc);
