randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomDiceImage1 = "dice" + randomNumber1 + ".png";
randomDiceImage2 = "dice" + randomNumber1 + ".png";

randomImageSource1 = "images/" + randomDiceImage1;
randomImageSource2 = "images/" + randomDiceImage2;


image1 = document.querySelectorAll("img")[0];
image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else {
    document.querySelector("hq").innerHTML = "Draw!"
}