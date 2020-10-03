// for dice 1
var randomNumber1 = Math.floor((Math.random()*6 + 1));
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;  //images/dice1-6.png

var image1 = document.querySelectorAll("img")[0] ;
image1.setAttribute("src", randomImageSource1);

// for dice 2
var randomNumber2 = Math.floor((Math.random()*6 + 1));
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  //images/dice1-6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !!!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins !!! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩 !!! Draw !!! 🚩";
}
