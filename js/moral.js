document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '48063825-62c70b28116a147787d54dcce'; // Replace with your Pixabay API key
    const baseMorals = [
        { text: "Honesty is the best policy." },
        { text: "Kindness costs nothing but means everything." },
        { text: "Hard work always pays off." },
        { text: "Share a smile with someone today." },
        { text: "Learning never stops." },
        { text: "Respect is earned, not given." },
        { text: "Patience is the key to success." },
        { text: "Be a friend to someone who needs one today." },
        { text: "Gratitude turns what we have into enough." },
        { text: "Teamwork makes the dream work." }
    ];

    // Fetch a GIF for a moral using the Pixabay API with generalized kids-friendly search terms
    const fetchGif = async (searchQuery) => {
        // General kids-friendly terms like cute animals, cartoons, etc.
        const kidsFriendlyQuery = `cute animals, funny kids, cartoon characters, animated fun`; // These terms will bring playful and fun GIFs
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(kidsFriendlyQuery)}&image_type=photo&per_page=3`;
        const response = await fetch(url);
        const data = await response.json();
        return data.hits[0]?.webformatURL || "https://via.placeholder.com/400"; // Fallback image if no GIF found
    };

    // Function to shuffle an array (Fisher-Yates Algorithm)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    // Generate 365 unique daily morals with their GIFs
    const generateYearlyMorals = async () => {
        const yearlyMorals = [];
        for (const moral of baseMorals) {
            const gifUrl = await fetchGif(moral.text); // Fetch GIF for each moral
            yearlyMorals.push({ text: moral.text, gif: gifUrl });
        }
        return yearlyMorals;
    };

    // Get the current day of the year
    const getDayOfYear = () => {
        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start + (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    // Set up the moral of the day display
    const displayMoral = async () => {
        const yearlyMorals = await generateYearlyMorals();
        const todayIndex = getDayOfYear() - 1; // 0-based index
        const todayMoral = yearlyMorals[todayIndex];
        document.getElementById("moral-text").innerText = todayMoral.text;
        document.getElementById("moral-gif").src = todayMoral.gif;
    };

    // Display today's moral
    displayMoral();
});
