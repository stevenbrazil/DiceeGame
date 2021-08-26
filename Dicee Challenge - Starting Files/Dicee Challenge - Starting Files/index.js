var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImg1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);


if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
    document.querySelector("#head").style.color = "orange"; 
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
    document.querySelector("#head").style.color = "rgb(209, 56, 107)"; 
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!☠️";
    document.querySelector("#head").style.color = "red";
}