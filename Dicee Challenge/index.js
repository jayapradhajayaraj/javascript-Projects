
var randamNum1 =Math.floor(Math.random()*6)+1;
var randamNum2 =Math.floor(Math.random()*6)+1;
console.log(randamNum1);
console.log(randamNum2);

   var selector1= document.querySelectorAll("img")[0];
   //var image1="./images/dice"+randamNum1+".png"
   var image111=selector1.setAttribute("src", "./images/dice"+randamNum1+".png");
   
   var selector2=  document.querySelectorAll("img")[1];
   var image2=  selector2.setAttribute("src","./images/dice"+randamNum2+".png");

  // change heading

  if(randamNum1===randamNum2)
  {
    document.querySelector("h1").setAttribute="Draw";
  }
  else {
    if(randamNum1>randamNum2){
        document.querySelector("h1").setAttribute="Player1 Wins";
    }
    else{
        document.querySelector("h1").setAttribute="Player1 Wins";
    }
  }

