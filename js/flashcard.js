const apiKey = '48063825-62c70b28116a147787d54dcce'; // Replace with your actual API key
const classImages = {
    animals: "animals",
    flowers: "flowers",
    fruits: "fruits",
    vegetables: "vegetables"
};

let flippedCard = null;  // Keep track of the currently flipped card

function loadFlashcards() {
    const classLevel = document.getElementById('class-level').value;
    const category = classImages[classLevel];

    // Adding a random "offset" value to the API request to avoid fetching the same results each time
    const randomOffset = Math.floor(Math.random() * 100); // Random offset from 0 to 100
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${category}&image_type=photo&per_page=6&page=${randomOffset}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const flashcardsContainer = document.getElementById('flashcards-container');
            flashcardsContainer.innerHTML = ''; // Clear previous flashcards
            if (data.hits.length === 0) {
                alert("No images found for this category. Try again!");
                return;
            }
            const shuffledData = shuffleArray(data.hits);  // Shuffle data to display images randomly
            shuffledData.forEach((item) => {
                const flashcard = createFlashcard(item.largeImageURL, item.tags);
                flashcardsContainer.appendChild(flashcard);
            });
        })
        .catch(error => {
            console.error("Error fetching data from Pixabay:", error);
        });
}

// Function to shuffle the array (randomize the order)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function createFlashcard(imageUrl, answerText) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    flashcard.appendChild(imgElement);

    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.textContent = answerText;

    flashcard.appendChild(answerElement);

    // Add click event to handle flipping
    flashcard.addEventListener('click', () => {
        if (flippedCard && flippedCard !== flashcard) {
            flippedCard.classList.remove('flipped');  // Reset the previously flipped card
        }
        flashcard.classList.toggle('flipped');
        flippedCard = flashcard.classList.contains('flipped') ? flashcard : null;
    });

    return flashcard;
}

function Return() {
  
    window.history.back();
  
}

// Initialize the flashcards with default category
loadFlashcards();

