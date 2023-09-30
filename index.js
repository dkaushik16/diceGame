var ran1= Math.floor(6*Math.random())+1;
var ran2= Math.floor(6*Math.random())+1;
//setting first image
 switch(ran1){
    case 1:
      document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
         break;
    case 3: 
     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
     break;

    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png"); 
         break;

      case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");  
         break;
      case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");            

 }

//setting second image
 switch(ran2){
    case 1:
      document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
         break;
    case 3: 
     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
     break;

    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png"); 
         break;

      case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");  
         break;
      case 6:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");            

 }

 if(ran1> ran2)
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
 
 else if(ran2> ran1)
   document.querySelector("h1").innerHTML="Player 2 Wins!!";

   else 
   document.querySelector("h1").innerHTML="Draw!!";

 
