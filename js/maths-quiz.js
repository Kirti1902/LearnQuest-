// maths-quiz.js

let correctAnswer = 0;
let score = 0;
let correctCount = 0;  // Track number of correct answers
let incorrectCount = 0;  // Track number of incorrect answers
let timerCountdown = 50; // Default timer for 30 seconds
let timer;
let classLevel = '1';  // Set the class level dynamically based on the selection

const timerDisplay = document.getElementById('timer');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function generateRandomQuestion() {
  let num1, num2;

  // Generate question based on class level
  if (classLevel === '1') {
    num1 = Math.floor(Math.random() * 5) + 1;
    num2 = Math.floor(Math.random() * 5) + 1;
  } else if (classLevel === '2') {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
  } else if (classLevel === '3') {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
  } else if (classLevel === '4') {
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * 50) + 1;
  } else {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
  }

  correctAnswer = num1 + num2;

  // Display question
  questionElement.textContent = `What is ${num1} + ${num2}?`;

  // Generate random options
  const options = [
    correctAnswer,
    correctAnswer + Math.floor(Math.random() * 5),
    correctAnswer - Math.floor(Math.random() * 3),
    correctAnswer + Math.floor(Math.random() * 10)
  ];

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Update option buttons
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach((button, index) => {
    button.textContent = options[index];
    button.onclick = function () {
      if (parseInt(button.textContent) === correctAnswer) {
        score += 1;
        correctCount++;
        resultElement.textContent = "Correct! 🎉";
        resultElement.style.color = "green";
      } else {
        score -= 1;
        incorrectCount++;
        resultElement.textContent = "Oops! Try again! ❌";
        resultElement.style.color = "red";
      }
      scoreElement.textContent = `Score: ${score}`;
    };
  });
}

// Timer function
function startTimer() {
  timerDisplay.textContent = `Time left: ${timerCountdown}s`;
  timer = setInterval(function () {
    if (timerCountdown > 0) {
      timerCountdown--;
      timerDisplay.textContent = `Time left: ${timerCountdown}s`;
    } else {
      clearInterval(timer);
      showFinalResults(); // Show final results after time is up
    }
  }, 1000);
}

// Function to show final results when the timer is up
function showFinalResults() {
  const message = `
    Time is up! 🎉\n\n
    Final Score: ${score}\n
    Correct Answers: ${correctCount}\n
    Incorrect Answers: ${incorrectCount}\n\n
    Thank you for playing!
  `;
  // Show alert with results
  alert(message);

  // Display the Return to Home Screen button
  const returnButton = document.createElement('button');
  returnButton.textContent = 'Return to Home Screen';
  returnButton.onclick = function () {
    window.location.href = "index.html";  // Redirect to the home screen or desired page
  };
  document.body.appendChild(returnButton);
}

// Function to handle the next question
function nextQuestion() {
  generateRandomQuestion();
  resultElement.textContent = "";
}

// Initialize the first question and start the timer
window.onload = function () {
  generateRandomQuestion();
  startTimer(); // Start timer when the page loads
};

// Confirm the user wants to leave the page
window.onbeforeunload = function () {
  return "Are you sure you want to leave the quiz?";
};
