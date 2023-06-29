//document.querySelectorAll('img').source = "images\dice6.png";

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomsourcePath01 = "images/dice" + randomNumber1 + ".png";

var images01 = document.querySelectorAll('img')[0];
images01.setAttribute('src', randomsourcePath01);



var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomsourcePath02 = "images/dice" + randomNumber2 + ".png";

var images02 = document.querySelectorAll('img')[1];
images02.setAttribute('src', randomsourcePath02);


if (randomNumber1 > randomNumber2){
      document.querySelector('h1').innerHTML = "Player01 wins";
}
else if(randomNumber2 > randomNumber1)
{
      document.querySelector('h1').innerHTML = "Player02 wins";     
}
else{
      document.querySelector('h1').innerHTML = "draw";
}





