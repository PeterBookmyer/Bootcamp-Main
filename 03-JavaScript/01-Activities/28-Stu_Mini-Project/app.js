var userStatsWins=0
var userStatsLoss=0
var userStatsTie=0
var gamesPlayed=0
var computerSelection = ["R","P","S"];
var playGame = confirm("Would you like to play rock paper scissors?");


while (playGame) {


var userChoice=prompt("Please Enter R, P, or S");

var random = computerSelection [Math.floor(Math.random() * computerSelection.length)];
console.log (random)

alert("computer chose " + random);

console.log(userChoice)
console.log(random)


if (userChoice ==="R" && random ==="S") {
userStatsWins++
gamesPlayed++
alert ("You Win!")
}

else if (userChoice ==="P" && random ==="S") {
userStatsLoss++
gamesPlayed++
alert ("You Loss!")
}

else if (userChoice ==="S" && random ==="S") {
userStatsTie++
gamesPlayed++
alert ("You Tie!")
}

else if (userChoice ==="R" && random ==="P") {
userStatsLoss++
gamesPlayed++
alert ("You Loss!")
}

else if (userChoice ==="P" && random ==="P") {
userStatsTie++
gamesPlayed++
alert ("You Tie!")
}

else if (userChoice =="S" && random ==="P") {
userStatsWins++
gamesPlayed++
alert ("You Win!")
}

else if (userChoice ==="R" && random ==="R") {
userStatsTie++
gamesPlayed++
alert ("You Tie!")
}

else if (userChoice ==="P" && random ==="R") {
userStatsWins++
gamesPlayed++
alert ("You Win!")
}

else if (userChoice ==="S" && random ==="R") {
userStatsLoss++
gamesPlayed++
alert ("You Loss!")
}

else {
    alert ("Please enter R,P,S")
}


alert("Games Played:" + gamesPlayed + " Wins:" + userStatsWins + " Losses:" + userStatsLoss + " Ties:" + userStatsTie);

playGame=confirm("Would you like to play again?");
}