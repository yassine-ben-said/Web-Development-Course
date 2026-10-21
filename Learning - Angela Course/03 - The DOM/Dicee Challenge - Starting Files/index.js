// ============    Dice1   =================

// 1. Generate a random number between 1 and 6 (dice)
let number1 = Math.random()*6;
number1 = Math.floor(number1)+1;

// 2. Select the image element by class name (dice1)
let dice1 = document.querySelector(".img1");

// 3. change the attribute src of the image element
dice1.setAttribute("src","./images/dice" + number1 + ".png")

// ============    Dice2   =================

let number2 = Math.random()*6;
number2 = Math.floor(number2)+1;

let dice2 = document.querySelector(".img2");

dice2.setAttribute("src","./images/dice" + number2 + ".png")

// ==============   winner    ===================
let heading = document.querySelector("h1");
if (number1 > number2) {
    heading.textContent = "🚩 Player 1 wins !"
}
else if (number1 < number2) {
    heading.textContent = "🚩 Player 2 wins !"
}
else{
    heading.textContent = "Draw !"
}