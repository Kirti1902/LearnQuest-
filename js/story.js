// daily-story.js

const storyContainer = document.getElementById('story-container');
const storyTitle = document.getElementById('story-title');
const storyContent = document.getElementById('story-content');
const storyMoral = document.getElementById('story-moral');

// Local stories as fallback
const localStories = [
  {
    title: 'The Honest Woodcutter',
    content: 'Once upon a time, a woodcutter accidentally dropped his axe into a river...',
    moral: 'Honesty is the best policy.'
  },
  {
    title: 'The Lion and the Mouse',
    content: 'A lion was once sleeping in the jungle...',
    moral: 'No act of kindness is ever wasted.'
  },
  {
    title: 'The Tortoise and the Hare',
    content: 'A hare once laughed at a slow-moving tortoise...',
    moral: 'Slow and steady wins the race.'
  }
];

// Function to fetch a new story
async function fetchDailyStory() {
  try {
    // Use API to fetch story (example API endpoint)
    const response = await fetch('https://example.com/api/daily-story');
    if (!response.ok) throw new Error('API fetch failed.');

    const story = await response.json();
    updateStory(story);
  } catch (error) {
    // Fallback to local stories
    console.error('Fetching daily story failed, using local stories:', error);
    const story = getRandomLocalStory();
    updateStory(story);
  }
}

// Function to get a random local story
function getRandomLocalStory() {
  const today = new Date().toDateString();
  const savedStory = localStorage.getItem('dailyStoryDate');

  if (savedStory === today) {
    // Get the story already saved for today
    return JSON.parse(localStorage.getItem('dailyStory'));
  }

  // Pick a random story from the local stories
  const randomStory = localStories[Math.floor(Math.random() * localStories.length)];

  // Save the story and date to localStorage
  localStorage.setItem('dailyStoryDate', today);
  localStorage.setItem('dailyStory', JSON.stringify(randomStory));

  return randomStory;
}

// Function to display the story
function updateStory(story) {
  storyTitle.textContent = story.title;
  storyContent.textContent = story.content;
  storyMoral.textContent = story.moral;
}

// Load the story on page load
window.onload = fetchDailyStory;

// Return to home page
function returnToHome() {
  window.location.href = 'index.html';
}
