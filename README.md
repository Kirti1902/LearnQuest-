# LearnQuest!

# Maths Quiz and Flash Cards Website

## Overview

The **Maths Quiz and Flash Cards Website** is an educational tool designed to help students improve their basic math skills. It includes two main interactive features:
1. **Maths Quiz** – A timed quiz that adjusts difficulty based on the class level and provides instant feedback on answers.
2. **Flash Cards** – A collection of interactive flash cards to help students learn math facts.

The website is responsive, simple to use, and designed for students across different class levels (Class 1 to Class 5).

---

## Features

### 1. Maths Quiz
- **Class Levels**: Supports 5 class levels (Class 1 to Class 5), with difficulty increasing based on the selected class level.
- **Random Questions**: Questions are dynamically generated for each quiz session, ensuring a different experience each time.
- **Timer**: A countdown timer of 30 seconds for each question to add a challenge.
- **Immediate Feedback**: The quiz provides instant feedback, telling the user whether their answer was correct or incorrect.
- **Score Tracker**: Displays the total score based on correct and incorrect answers, with the option to reset after each quiz.
- **Return to Home Button**: At the end of the quiz, users can click a button to return to the home page.

### 2. Flash Cards
- **Interactive Cards**: Users can click on a card to reveal the answer behind it.
- **Class Levels**: Flash cards are categorized by class levels (Class 1 to Class 5), offering math questions appropriate for each level.

---

## Project Structure

```
/maths-quiz-flashcards
├── /css
│   ├── /flash-card_style.css       # Contains CSS of flash-cards
│   └── /style.css                  # Main CSS file for styling the website
├── /js
│   ├── maths-quiz.js  # JavaScript for the quiz functionality
│   └── flashcards.js 
|   └── index.js        # JavaScript for the homepage functionality
├── index.html         # Home page with links to quiz and flashcards
├── maths-quiz.html    # Page containing the maths quiz
├── flashcards.html    # Page with interactive flashcards
└          
```

---

## Setup Instructions

### Prerequisites

To run the project, all you need is:
- A modern web browser (Chrome, Firefox, Safari, etc.).
- An internet connection to load external resources (if any).

### Running Locally

1. **Clone or Download the Repository**
   Clone the repository or download the files to your local machine:

   ```bash
   git clone https://github.com/Kirti1902/LearnQuest
   ```

2. **Open the Project Folder**
   Navigate to the project directory where the files are saved.

3. **Open `index.html` in a Browser**
   Simply open the `index.html` file in any modern browser to start using the website.

---

## Usage

### Maths Quiz
1. **Select Your Class Level**: Choose a class level from the available options (Class 1 to Class 5).
2. **Answer the Questions**: Read and answer the randomly generated math questions.
3. **View Feedback**: After answering, you'll get immediate feedback on whether the answer was correct or incorrect.
4. **Timer**: Keep an eye on the countdown timer to ensure you finish in time.
5. **See Your Score**: The total score is displayed after the quiz ends, along with a count of correct and incorrect answers.
6. **Return to Home**: After finishing the quiz, click the "Return to Home" button to go back to the main page.

### Flash Cards
1. **Click on a Flash Card**: Select a flash card to reveal the math problem's answer.
2. **Study and Review**: Go through multiple flash cards to review different math problems.

---

Here's the updated `README.md` with the addition of the **Word Search Game**:

---

# Memory Game and Word Search Game

A collection of fun and interactive games designed for kids to improve their memory, focus, and vocabulary skills.

## Games:

### **Memory Game**
- **Game Play:** Match pairs of cards in the least number of moves.
- **Timer:** Track the time it takes to complete the game.
- **Moves Tracker:** Count the number of moves taken to complete the game.
- **Finish Effect:** A celebratory finish effect with a message after completing the game.
- **Responsive:** Works on both desktop and mobile devices.

### **Word Search Game**
- **Game Play:** Find hidden words within a grid of letters.
- **Timer:** Track the time it takes to find all the words.
- **Word List:** Display a list of words to find in the grid.
- **Score Tracker:** Count how many words you've found.
- **Finish Effect:** Celebrate when all words are found.

## Files Overview:

### Memory Game:
- **index.html:** Main HTML file for the Memory Game.
- **memory_game.css:** The CSS file for styling the game.
- **memory_game.js:** JavaScript file implementing the game logic.
- **finishEffect.js:** Global script for handling the finish effect across different games.

### Word Search Game:
- **word_search.html:** Main HTML file for the Word Search Game.
- **word_search.css:** The CSS file for styling the Word Search Game.
- **word_search.js:** JavaScript file implementing the Word Search Game logic.
- **finishEffect.js:** Global script for handling the finish effect across different games.

---

## How to Play:

### **Memory Game**
1. Click on the cards to flip them.
2. Match pairs of cards.
3. Track your moves and time at the top.
4. Celebrate your success when you complete the game!

### **Word Search Game**
1. Search for the words from the word list in the grid of letters.
2. Click on the letters to select the words.
3. Track your score and time at the top.
4. Celebrate your success when all words are found!

---


## Future Enhancements

Here are some features that could be added to further enhance the website:

1. **Leaderboard**: Track top quiz scores and allow users to compete for the highest score.
2. **Difficulty Levels**: Implement additional difficulty levels for the quiz (Easy, Medium, Hard).
3. **Tracking Progress**: Allow users to track their quiz progress over time and see how they improve.
4. **Audio for Flash Cards**: Add a feature that reads out math problems to help students learn through listening.
5. **Math Problem Generator**: Let users generate random math problems based on different operations.
6. **Math Games**: Integrate small interactive games that teach math concepts in a fun way.
7. **Print Flash Cards**: Enable users to print flash cards for offline studying.
8. **Multi-language Support**: Add support for multiple languages to cater to a wider audience.

---
