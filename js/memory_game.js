let cards = [];
let flippedCards = [];
let matchedCount = 0;
let moves = 0;
let timer = 0;
let intervalId = null;

// Generate random daily cards with 20 cards (10 unique pairs)
function generateDailyCards() {
  const today = new Date().toDateString();
  const savedCards = localStorage.getItem('memoryGameCardsDate');
  
  if (savedCards === today) {
    return JSON.parse(localStorage.getItem('memoryGameCards'));
  }

  const icons = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🥝', '🍑', '🍍', '🍋', '🥭', '🍏'];
  const selectedIcons = icons.slice(0, 12); // Pick first 12 unique icons
  const dailyCards = [...selectedIcons, ...selectedIcons].sort(() => Math.random() - 0.5);

  localStorage.setItem('memoryGameCardsDate', today);
  localStorage.setItem('memoryGameCards', JSON.stringify(dailyCards));

  return dailyCards;
}

// Shuffle cards for a new game
function shuffleCards() {
  cards.sort(() => Math.random() - 0.5); // Simple random shuffle
}

// Initialize the game
function initializeGame() {
  cards = generateDailyCards();
  shuffleCards(); // Shuffle for every new game
  const gameGrid = document.getElementById('game-grid');
  gameGrid.innerHTML = '';
  matchedCount = 0;
  moves = 0;
  timer = 0;

  document.getElementById('moves').textContent = moves;
  document.getElementById('timer').textContent = timer;

  cards.forEach((icon, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.icon = icon;
    card.dataset.index = index;
    card.addEventListener('click', handleCardClick);
    gameGrid.appendChild(card);
  });

  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    timer++;
    document.getElementById('timer').textContent = timer;
  }, 1000);
}

// Handle card click
function handleCardClick(event) {
  const clickedCard = event.target;
  if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) return;

  clickedCard.classList.add('flipped');
  clickedCard.textContent = clickedCard.dataset.icon;
  flippedCards.push(clickedCard);

  if (flippedCards.length === 2) {
    moves++;
    document.getElementById('moves').textContent = moves;
    checkForMatch();
  }
}

// Check if two flipped cards match
function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.icon === card2.dataset.icon) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCount += 2;

    if (matchedCount === cards.length) {
      clearInterval(intervalId);
      alert(`Congratulations! You completed the game in ${moves} moves and ${timer} seconds.`);
      // Shuffle cards and restart the game
      setTimeout(initializeGame, 2000);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.textContent = '';
      card2.textContent = '';
    }, 1000);
  }

  flippedCards = [];
}

function returnToHome() {
    window.history.back(); // Replace with your home page path if different
  }


// Show Finish Effect
function showFinishEffect() {
  document.getElementById('finish-moves').textContent = moves;
  document.getElementById('finish-time').textContent = timer;
  document.getElementById('finish-effect').classList.add('show');
}

// Close Finish Effect
function closeFinishEffect() {
  document.getElementById('finish-effect').classList.remove('show');
  // Restart the game
  initializeGame();
}

// Restart game
document.getElementById('restart-button').addEventListener('click', initializeGame);

// Initialize on load
window.onload = initializeGame;

function checkGameCompletion() {
    const matchedPairs = document.querySelectorAll('.matched'); // Assuming matched pairs have this class
    if (matchedPairs.length === totalPairs * 2) { // Each pair has two cells
      clearInterval(timerInterval); // Stop the timer
      showFinishEffect(moves, time); // Show the finish effect
    }
  }
  
  // Function to show the finish effect (confetti and message)
  function showFinishEffect(moves, time) {
    // Show the finish effect message
    document.getElementById('finish-effect').classList.remove('hidden');
    document.getElementById('finish-moves').textContent = moves;
    document.getElementById('finish-time').textContent = time;
  
    // Trigger confetti effect
    showConfetti();
  }
  
  // Function to close the finish effect
  function closeFinishEffect() {
    document.getElementById('finish-effect').classList.add('hidden');
    document.querySelector('.canvas-container').remove(); // Remove the confetti canvas
  }

