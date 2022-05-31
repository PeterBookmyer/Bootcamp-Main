var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Hip hop hibby to the hibbity hip hip hop and you dont stop rocking to the bang bang boogity beat';
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    //
    timeLeft--
    timerEl.textContent = timeLeft + "seconds remaining";

    if (timeLeft===0){
      clearInterval(timeInterval);
      displayMessage();
    }
  },1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
