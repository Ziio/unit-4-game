
var goalNum = Math.floor((Math.random() * 100) + 19);
var totalScore = 0;
var win = 0;
var lose = 0;
var blue1 = Math.floor((Math.random() * 12) + 1);
var green1 = Math.floor((Math.random() * 12) + 1);
var red1 = Math.floor((Math.random() * 12) + 1);
var yellow1 = Math.floor((Math.random() * 12) + 1);

var reset = function() {
    goalNum = Math.floor((Math.random() * 100) + 19);
    totalScore = 0;
    blue1 = Math.floor((Math.random() * 12) + 1);
    green1 = Math.floor((Math.random() * 12) + 1);
    red1 = Math.floor((Math.random() * 12) + 1);
    yellow1 = Math.floor((Math.random() * 12) + 1);
    $(".total").text("Your Score: " + totalScore);
    $(".goal").text("Try to Match: " + goalNum);
    console.log(goalNum);
}

$(document).ready(function() {
    $(".total").text("Your Score: " + totalScore);
    $(".goal").text("Try to Match: " + goalNum);
    console.log(goalNum);

    $(".winner").text("Wins: " + win);
    $(".loser").text("Losses: " + lose); 


    $("#blue").click(function() {
        totalScore = totalScore + blue1;
        console.log("Score = " + totalScore);
        $(".total").text("Your Score: " + totalScore);

        if (totalScore == goalNum) {
            alert("YOU WIN!");
            win++;
            $(".winner").text("Wins: " + win);
            reset();
        }
        
        else if (totalScore > goalNum) {
            alert("YOU LOSE");
            lose ++;
            $(".loser").text("Losses: " + lose); 
            reset();
        }

    });


    $("#green").click(function() {
        totalScore = totalScore + green1;
        console.log("Score = " + totalScore);
        $(".total").text("Your Score: " + totalScore);

        if (totalScore == goalNum) {
            alert("YOU WIN!");
            win++;
            $(".winner").text("Wins: " + win);
            reset();
        }
        
        else if (totalScore > goalNum) {
            alert("YOU LOSE");
            lose ++;
            $(".loser").text("Losses: " + lose);
            reset();
        }

    });


    $("#red").click(function() {
        totalScore = totalScore + red1;
        console.log("Score = " + totalScore);
        $(".total").text("Your Score: " + totalScore);

        if (totalScore == goalNum) {
            alert("YOU WIN!");
            win++;
            $(".winner").text("Wins: " + win);
            reset();
        }
        
        else if (totalScore > goalNum) {
            alert("YOU LOSE");
            lose ++;
            $(".loser").text("Losses: " + lose);
            reset();
        }

    });


    $("#yellow").click(function() {
        totalScore = totalScore + yellow1;
        console.log("Score = " + totalScore);
        $(".total").text("Your Score: " + totalScore);

        if (totalScore == goalNum) {
            alert("YOU WIN!");
            win++;
            $(".winner").text("Wins: " + win);
            reset();
        }
        
        else if (totalScore > goalNum) {
            alert("YOU LOSE");
            lose ++;
            $(".loser").text("Losses: " + lose);
            reset();
        }

    });


});

