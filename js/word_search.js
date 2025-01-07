const gridSize = 10;
const allWords = ["cat", "dog", "fish", "frog", "lion", "tiger", "bear", "apple", "banana", "grape", "cherry", "orange"];
let words = [];
let score = 0;
let timer = 60;

function generateDailyWords() {
  const today = new Date().toISOString().split("T")[0];
  const savedDate = localStorage.getItem("wordSearchDate");

  if (savedDate === today) {
    words = JSON.parse(localStorage.getItem("dailyWords"));
  } else {
    words = allWords.sort(() => 0.5 - Math.random()).slice(0, 5);
    localStorage.setItem("wordSearchDate", today);
    localStorage.setItem("dailyWords", JSON.stringify(words));
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  const interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerElement.textContent = `Time Left: ${timer}s`;
    } else {
      clearInterval(interval);
      alert(`Time's up! Your score: ${score}`);
      location.reload();
    }
  }, 1000);
}

function generateGrid() {
  generateDailyWords();

  const gridContainer = document.getElementById("grid-container");
  const wordList = document.getElementById("words-list");
  const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(" "));

  words.forEach((word) => {
    let placed = false;
    while (!placed) {
      const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
      const startRow = Math.floor(Math.random() * gridSize);
      const startCol = Math.floor(Math.random() * gridSize);
      if (canPlaceWord(grid, word, startRow, startCol, direction)) {
        placeWord(grid, word, startRow, startCol, direction);
        placed = true;
      }
    }
  });

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === " ") {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26)).toUpperCase();
      }
    }
  }

  grid.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "grid-row";
    row.forEach((cell) => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "grid-cell";
      cellDiv.textContent = cell;
      cellDiv.onclick = () => handleCellClick(cellDiv);
      rowDiv.appendChild(cellDiv);
    });
    gridContainer.appendChild(rowDiv);
  });

  words.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    wordList.appendChild(li);
  });

  startTimer();
}

function canPlaceWord(grid, word, row, col, direction) {
  if (direction === "horizontal" && col + word.length > gridSize) return false;
  if (direction === "vertical" && row + word.length > gridSize) return false;

  for (let i = 0; i < word.length; i++) {
    const r = row + (direction === "vertical" ? i : 0);
    const c = col + (direction === "horizontal" ? i : 0);
    if (grid[r][c] !== " " && grid[r][c] !== word[i]) return false;
  }
  return true;
}

function placeWord(grid, word, row, col, direction) {
  for (let i = 0; i < word.length; i++) {
    const r = row + (direction === "vertical" ? i : 0);
    const c = col + (direction === "horizontal" ? i : 0);
    grid[r][c] = word[i];
  }
}

function handleCellClick(cell) {
  const clickedLetter = cell.textContent;
  if (words.some((word) => word.includes(clickedLetter))) {
    cell.style.backgroundColor = "lightgreen";
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  } else {
    cell.style.backgroundColor = "lightcoral";
  }
}

window.onload = generateGrid;


