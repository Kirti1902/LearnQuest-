// puzzle.js
let currentShape = '';
let score = 0;

// Function to handle the dragging of shapes
function drag(event) {
  event.dataTransfer.setData("shape", event.target.id);
}

// Function to handle the drop of shapes into the target area
function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let draggedShape = event.dataTransfer.getData("shape");
  let targetShape = event.target;

  if (targetShape.id === "target-shape" && draggedShape === currentShape) {
    targetShape.style.backgroundColor = "#4CAF50"; // Success color
    document.getElementById('result').textContent = 'Correct! 🎉';
    score++;
  } else {
    document.getElementById('result').textContent = 'Oops! Try again. ❌';
  }
}

// Function to update the puzzle with new shapes
function nextPuzzle() {
  const shapes = ['circle', 'square', 'triangle'];
  currentShape = shapes[Math.floor(Math.random() * shapes.length)];
  document.getElementById('shape-to-identify').textContent = currentShape.charAt(0).toUpperCase() + currentShape.slice(1);

  // Clear previous result
  document.getElementById('result').textContent = '';
  document.getElementById('target-shape').style.backgroundColor = "#f0f8ff"; // Reset target

  // Add event listeners for drag and drop
  const targetShape = document.getElementById('target-shape');
  targetShape.ondrop = drop;
  targetShape.ondragover = allowDrop;
}

// Initialize the first puzzle
window.onload = function() {
  nextPuzzle(); // Start with the first puzzle
};
