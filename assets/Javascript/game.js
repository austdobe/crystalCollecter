var randNum = "";
var score = 0;
var cryst1="";
var cryst2="";
var cryst3="";
var cryst4="";
var winCounter=0;
var lossCounter=0;
    
function startGame(){
    // reset game
    score = 0;
   randNum = Math.floor(Math.random()* 120) + 19;
   console.log(randNum);
   cryst1 = Math.floor(Math.random()* 12) + 1;
   cryst2 = Math.floor(Math.random()* 12) + 1;
   cryst3 = Math.floor(Math.random()* 12) + 1;
   cryst4 = Math.floor(Math.random()* 12) + 1;
    
    document.getElementById("randomNum").innerHTML = randNum;
    document.getElementById("score").innerHTML = score;
    document.getElementById("win").innerHTML=winCounter;
    document.getElementById("loses").innerHTML = lossCounter;
    console.log(" This is 1: " + cryst1)
    console.log(" This is 2: " + cryst2)
    console.log(" This is 3: " + cryst3)
    console.log(" This is 4: " + cryst4)

    $("#crystal1").click(function(){
        score += cryst1;
        document.getElementById("score").innerHTML=score;
        checkscore();
    });
    $("#crystal2").click(function(){
        score += cryst2;
        document.getElementById("score").innerHTML = score;
        checkscore();
    });
    $("#crystal3").click(function(){
        score += cryst3;
        document.getElementById("score").innerHTML = score;
        checkscore();
    });
    $("#crystal4").click(function(){
        score += cryst4;
        document.getElementById("score").innerHTML = score;
        checkscore();
    });
}
function checkscore(){
    if(score==randNum){
        winCounter++;
        alert("You win!")
        document.getElementById("win").innerHTML=winCounter;
        startGame();
    }else if(score > randNum){
        lossCounter++;
        alert("Try again!")
        document.getElementById("loses").innerHTML=lossCounter;
        startGame()
    };
}
startGame();






