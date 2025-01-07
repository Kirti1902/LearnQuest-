# LearnQuest!

## Overview

The **LearnQuest** website offers a variety of fun and interactive educational tools for kids, including math quizzes, flashcards, memory games, word search games, and daily moral lessons. The website is designed to be easy to navigate and is responsive across desktop and mobile devices.

---

## Features

### 1. **Maths Quiz**
- **Class Levels**: Supports 5 class levels (Class 1 to Class 5), with difficulty increasing based on the selected class level.
- **Random Questions**: Questions are dynamically generated for each quiz session.
- **Timer**: A countdown timer of 30 seconds per question.
- **Instant Feedback**: Provides immediate feedback on whether the answer was correct or incorrect.
- **Score Tracker**: Displays the score after each quiz session.

### 2. **Flash Cards**
- **Interactive Cards**: Click on a card to reveal math facts and answers.
- **Class Levels**: Flash cards are categorized by class level (Class 1 to Class 5).

### 3. **Memory Game**
- **Game Play**: Match pairs of cards with the fewest moves possible.
- **Timer & Moves Tracker**: Tracks time and the number of moves.
- **Finish Effect**: Celebrates the completion of the game.

### 4. **Word Search Game**
- **Game Play**: Search for hidden words within a grid of letters.
- **Timer**: Tracks how long it takes to find all words.
- **Word List**: Displays a list of words to find.

### 5. **Moral of the Day**
- **Daily Moral**: Displays a new moral each day to inspire positive behavior.
- **Interactive GIF**: Accompanied by a kid-friendly GIF to make the moral more engaging.

---

## Project Structure

```plaintext
/LEARNQUEST
├── /css
│   ├── /flash-card_style.css   # Styles for flashcards
│   ├── /gameEffects.css        # Styles for game finish effects
│   ├── /memory_game.css        # Styles for the memory game
│   ├── /moral.css              # Styles for the daily moral section
│   ├── /puzzle.css             # Styles for the puzzle game
│   └── /word_search.css        # Styles for the word search game
├── /html
│   ├── /flashcards.html        # Flashcards page
│   ├── /maths-quiz.html        # Maths quiz page
│   ├── /memory_game.html       # Memory game page
│   ├── /moral.html             # Moral of the day page
│   ├── /puzzle.html            # Puzzle game page
│   └── /word_search.html       # Word search game page
├── /images
│   └── (Image files for various sections and games)
├── /js
│   ├── /flashcard.js           # JavaScript for flashcard functionality
│   ├── /gameEffects.js         # JavaScript for handling game finish effects
│   ├── /index.js               # JavaScript for homepage functionality
│   ├── /maths-quiz.js          # JavaScript for the quiz functionality
│   ├── /memory_game.js         # JavaScript for the memory game
│   ├── /moral.js               # JavaScript for the moral of the day section
│   ├── /puzzle.js              # JavaScript for the puzzle game
│   └── /word_search.js         # JavaScript for the word search game
├── index.html                  # Home page with links to games
├── README.md                   # Project documentation
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

## How to Play:

### **Maths Quiz**
1. Select your class level (Class 1 to Class 5).
2. Answer the dynamically generated math questions.
3. View feedback on whether your answers are correct.
4. Track your score at the end of the quiz.

### **Flash Cards**
1. Click on a card to reveal the math problem and its answer.
2. Browse through multiple flashcards to study and learn.

### **Memory Game**
1. Flip cards to find matching pairs.
2. Keep track of your moves and time.
3. Celebrate your success when all pairs are matched!

### **Word Search Game**
1. Search for hidden words in the letter grid.
2. Track your time and score.
3. Celebrate when all words are found!

### **Moral of the Day**
1. View the moral of the day, displayed with a kid-friendly GIF.
2. Learn a valuable life lesson each day!

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

This **LearnQuest** website offers a comprehensive learning experience that includes multiple educational games, quizzes, and a daily moral section to inspire children. It can be easily accessed on both desktop and mobile devices, making it a versatile educational tool.