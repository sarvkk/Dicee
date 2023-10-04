
// var randomnumber1=Math.random(); 
// randomnumber1=6*randomnumber1; 
// randomnumber1=Math.floor(randomnumber1)+1;

// var randomnumber2=Math.random(); 
// randomnumber2=6*randomnumber2; 
// randomnumber2=Math.floor(randomnumber2)+1;

// document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");
// document.querySelector(".img1").setAttribute("alt","dice"+randomnumber1);
// document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");
// document.querySelector(".img2").setAttribute("alt","dice"+randomnumber2);       
// document.querySelector("h1").innerHTML="Player "+winner+" wins!";
// if(randomnumber1>randomnumber2){
//     var winner="1";    
//     document.querySelector("h1").innerHTML="Player "+winner+" wins!";     
// }else if(randomnumber1<randomnumber2){
//     var winner="2";     
//     document.querySelector("h1").innerHTML="Player "+winner+" wins!";   
// }
// else{
    
//     document.querySelector("h1").innerHTML="draw";
// }
var randomnumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+randomnumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomnumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins🚩";
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW🤝";
}