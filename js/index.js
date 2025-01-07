// index.js

function goToClassPage(classLevel) {
  // Store selected class in localStorage
  localStorage.setItem('selectedClass', classLevel);
  
  // Redirect to the activity selection page
  window.location.href = 'class-selection.html';
}

// Get the selected class from localStorage
const selectedClass = localStorage.getItem('selectedClass');
document.getElementById('selected-class').textContent = selectedClass;

// Store selected class in the window's global object for further use
window.selectedClass = selectedClass;

function startMathQuiz() {
  window.location.href = './html/maths-quiz.html'; // Navigate to the maths quiz page
}

function startFlashcards() {
  window.location.href = './html/flashcards.html'; // Navigate to the flashcards page
}

// function startPuzzle(){
//   window.location.href = './html/puzzle.html';
// }

// function starStory(){
//   window.location.href = './html/story.html';
// }

function startWordSearch(){
  window.location.href = './html/word_search.html';
}

function startMemoryGame(){
  window.location.href = './html/memory_game.html';
}

function startMoral(){
  window.location.href = './html/moral.html';
}


function returnToPreviousPage() {
  if (confirm("Are you sure you want to leave?")) {
    window.location.href = 'index.html'; // Return to the home page
  }
}