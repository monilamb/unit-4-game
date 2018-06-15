console.log('Loaded js');

var gamenumber = 0;
var wins = 0;
var losses = 0;
var score = 0;
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;

function newgame (){
    number1 = Math.floor((Math.random() * 12) + 1);
    number2 = Math.floor((Math.random() * 12) + 1);
    number3 = Math.floor((Math.random() * 12) + 1);
    number4 = Math.floor((Math.random() * 12) + 1);
    gamenumber= Math.floor((Math.random() * 120) + 19);
    
    $("#randomNumber").text(gamenumber); 
}

function compare(){
    if (score == gamenumber)
    {
        wins++;
        $("#score").html("Wins: " +wins+ "<br> Losses: " + losses);
        score = 0;
        $("#totalscore").html(score); 
        newgame();
        
    }
    
    else if (score > gamenumber)
    {
        losses++;
        $("#score").html("Wins: " +wins+ "<br> Losses: " + losses);
        score = 0;
        $("#totalscore").html(score); 
        newgame();
        
    }
    };

if (wins == 0 && losses == 0)
{
    newgame();
}

$("#crystal1").on( "click" ,function(){
    
    score += number1;
    $("#totalscore").html(score); 
    compare();
    
});

$("#crystal2").on( "click" ,function(){
    score += number2;
    $("#totalscore").html(score); 
    compare();
});

$("#crystal3").on( "click" ,function(){
    score += number3;
    $("#totalscore").html(score); 
    compare();
});

$("#crystal4").on( "click" ,function(){
    score += number4;
    $("#totalscore").html(score); 
    compare();
});
