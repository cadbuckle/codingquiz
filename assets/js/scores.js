// variables for various screen assets
var scoresListEl = document.getElementById("highscores");
var clearBtnEl = document.getElementById("clear");

renderHighScores();

function renderHighScores() {
  var savedScores;
  var scoresArray = [];

  // clear current scores display
  scoresListEl.innerHTML = "";

  // get current scores from local storage
  savedScores = localStorage.getItem("wk06-highscores");
  // parse return value to create array (if not empty)
  // and then iterate through through and display
  if (savedScores !== null) {
    // parse data from local storage to an array
    scoresArray = JSON.parse(savedScores);
    // loop through array to build html to display
    for (let i = 0; i < scoresArray.length; i++) {
      const currentItem = scoresArray[i];
      var li = document.createElement("li");
      li.textContent = currentItem;
      scoresListEl.appendChild(li);
    }
  }
}

// clear highscores
function clearScores() {
  localStorage.removeItem("wk06-highscores");
  renderHighScores();
}

// listeners
clearBtnEl.addEventListener("click", clearScores);
