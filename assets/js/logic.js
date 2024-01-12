// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score

// variables for various screen assets
var startButtonEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("end-screen");
var timeEl = document.getElementById("time");

// define variables
var quizQuestions = [
    {
        question:  "Can you assign a anonymous function to a variable?",
        choices: ["true", "false"],
        correctAnswer: 0
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        choices: ["append()", "concat()", "attach()", "None of the above." ],
        correctAnswer: 1
    },
    {
        question: "All user-defined objects and built-in objects are descendants of an object called Object?",
        choices: ["true", "false"],
        correctAnswer: 0
    },
    {
        question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        choices: ["slice()", "split()", "replace()", "search()"],
        correctAnswer: 1
    },
    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        choices: ["global variable","local variable", "Both of the above","None of the above."],
        correctAnswer: 1
    },
    {
        question: "Which of the following function of Array object removes the first element from an array and returns that element?",
        choices: ["reverse()","shift()","slice()","some()"],
        correctAnswer: 2
    }
];
var gameTime;
var timeLeft = 30;
var currentQuestion = 0;

// startTheGame is called when start button clicked
function startTheGame(event) {
    // disable start button as game in progress
    event.preventDefault();
    startButtonEl.disabled = true;
    questionsEl.style = "display: block";
    goTimer();
}

// goTimer starts and stops the game timer and calls either gameWon or gameLost accordingly
function goTimer() {
    // gameTime = setInterval(function() {
    //     timeLeft--;
    //     timeEl.textContent = timeLeft;
    //     if (timeLeft >= 0) {
    //         displayQuestion();
    //     } 
    //     // Time over?
    //     if (timeLeft === 0) {
    //         clearInterval(gameTime);
    //         gameLost();
    //     }
    // }, 1000)
    displayQuestion();
}

function displayQuestion() {
    // get question-title element to display questions
    var questionEl = document.getElementById("question-title");
    var currentQuest = quizQuestions[currentQuestion];

    // build list of possible answers
    var currentChoices = "<ol>";
    questionEl.textContent = currentQuest.question;
console.log(currentQuest.choices.length);
    for (let i = 0; i < currentQuest.choices.length; i++) {
        currentChoices += "<li>"+ currentQuest.choices[i]+"</li>";
    }
    currentChoices +="</ol>"
console.log(": "+currentChoices);
    choicesEl.innerHTML = currentChoices;
    currentQuestion++;
}

function gameLost() {
    alert("You lost");
}

// Listen for the start button to be pressed to call startTheGame function 
startButtonEl.addEventListener("click", startTheGame);
