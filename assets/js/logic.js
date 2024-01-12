// variables for various screen assets
var startDivEl = document.getElementById("start-screen");
var startButtonEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var timeEl = document.getElementById("time");
var finalScoreEl = document.getElementById("final-score");
var submitEl = document.getElementById("submit");

// define variables

var gameTime;
var timeLeft = 60;
var currentQuestion = 0;
var currentCorrectAnswer;
var liEls;

// startTheGame is called when start button clicked
function startTheGame(event) {
  event.preventDefault();
  // hide the start screen
  startDivEl.style = "display: none";
  // display the question area
  questionsEl.style = "display: block";
  // start the timer
  goTimer();
  // display first question
  displayQuestion();
}

// goTimer starts and stops the game timer and calls either gameWon or gameLost accordingly
function goTimer() {
  gameTime = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;
    // Time over?
    if (timeLeft === 0) {
      clearInterval(gameTime);
      gameEnd();
    }
  }, 1000);
}

// event to validate selected option against actual answer
function validSelection(event) {
  // if click target is not the same as correct answer?
  if (event.target.id != currentCorrectAnswer) {
    // incorrect so decrement time left
    timeLeft -= 10;
  }
  // display next question
  if (currentQuestion >= quizQuestions.length) {
    gameEnd();
  } else {
    displayQuestion();
  }
}

// this function displays the question
function displayQuestion() {
  // get question-title element to display questions
  var questionEl = document.getElementById("question-title");
  var currentQuest = quizQuestions[currentQuestion];

  // build list of possible answers
  var currentChoices = "<ol>";
  questionEl.textContent = currentQuest.question;
  for (let i = 0; i < currentQuest.choices.length; i++) {
    currentChoices += "<li id=" + i + ">" + currentQuest.choices[i] + "</li>";
  }
  currentChoices += "</ol>";
  choicesEl.innerHTML = currentChoices;
  liEls = document.querySelectorAll("li");
  currentCorrectAnswer = currentQuest.correctAnswer;
  currentQuestion++;
}

// gameEnd event
function gameEnd() {
  clearInterval(gameTime);
  finalScoreEl.textContent = timeEl.textContent = timeLeft;
  startDivEl.style = "display: block";
  questionsEl.style = "display: none";
  endScreenEl.style = "display: block";
}

// submit button

// Listen for the start button to be pressed to call startTheGame function
startButtonEl.addEventListener("click", startTheGame);

// add click listen to the list
choicesEl.addEventListener("click", validSelection);
