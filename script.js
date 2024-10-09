// Load words from JSON file
fetch('words.json')
    .then(response => response.json())
    .then(data => initGame(data));

// Variables
let selectedWord = {};
let maskedWord = "";
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let timeLeft = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : 60;
let wordsData = [];

// DOM Elements
const wordPlaceholder = document.getElementById("word-placeholder");
const letterInput = document.getElementById("letter-input");
const hintBtn = document.getElementById("hint-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer").querySelector("span");
const scoreDisplay = document.getElementById("score").querySelector("span");
const notification = document.getElementById("notification");

// Initialize Game
function initGame(words) {
    wordsData = words;
    selectedWord = localStorage.getItem('selectedWord') ? JSON.parse(localStorage.getItem('selectedWord')) : getRandomWord();
    maskedWord = localStorage.getItem('maskedWord') ? localStorage.getItem('maskedWord') : "_ ".repeat(selectedWord.word.length).trim();
    wordPlaceholder.textContent = maskedWord;
    letterInput.value = "";
    letterInput.focus();
    timerDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
    startTimer();
}

// Get random word
function getRandomWord() {
    return wordsData[Math.floor(Math.random() * wordsData.length)];
}

// Handle letter input
letterInput.addEventListener("input", () => {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = ""; // Reset input

    if (selectedWord.word.includes(letter)) {
        revealLetter(letter);
    } else {
        shakeInput();
    }

    if (maskedWord.replace(/ /g, '') === selectedWord.word) {
        notify("Great job! You guessed the word!");
        score++;
        updateScore();
        setTimeout(() => startNewWord(), 2000);
    }
});

function revealLetter(letter) {
    let newMaskedWord = "";
    for (let i = 0; i < selectedWord.word.length; i++) {
        newMaskedWord += selectedWord.word[i] === letter ? letter : maskedWord[i * 2];
    }
    maskedWord = newMaskedWord.split("").join(" ");
    wordPlaceholder.textContent = maskedWord;
    saveGameState();
}

// Timer Logic
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        localStorage.setItem('timeLeft', timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! You lost.");
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    localStorage.clear();
    location.reload();
}

function startNewWord() {
    selectedWord = getRandomWord();
    maskedWord = "_ ".repeat(selectedWord.word.length).trim();
    wordPlaceholder.textContent = maskedWord;
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
    saveGameState();
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('selectedWord', JSON.stringify(selectedWord));
    localStorage.setItem('maskedWord', maskedWord);
    localStorage.setItem('score', score);
}

// Shake input box on wrong guess
function shakeInput() {
    letterInput.classList.add("shake");
    setTimeout(() => {
        letterInput.classList.remove("shake");
    }, 500);
}

// Update score
function updateScore() {
    scoreDisplay.textContent = score;
    saveGameState();
}

// Notification
function notify(message) {
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 1500);
}

// Hints functionality
hintBtn.addEventListener("click", () => {
    const hintMessage = `Hint: The category is ${selectedWord.category}`;
    alert(hintMessage);
    score--;
    updateScore();
});

// Reset Game
resetBtn.addEventListener("click", resetGame);
