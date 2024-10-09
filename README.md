# Word Guessing Game

A modern, engaging word guessing game where users guess random words from various categories. It features a clean user interface, smooth animations, instant feedback, and persistent score tracking using local storage.

## Features

- **Modern UI**: Clean, minimalist design with responsive layout, suitable for both desktop and mobile devices.
- **Instant Feedback**: Users get real-time feedback as they guess letters, with correct letters revealed dynamically.
- **Categories**: The game includes various word categories like fruits, animals, cities, programming languages, and more.
- **Hints**: Players can request hints, like revealing the word's category, at the cost of points.
- **Score Tracking**: Scores and game progress are stored in the browser’s local storage, allowing users to continue where they left off.
- **Notifications**: Success notifications appear when a player guesses a word correctly.
- **Auto Start**: Automatically loads the next word when the current word is successfully guessed.
- **Random Word Selection**: Words are randomly selected from a JSON file with over 100 entries, ensuring variety in gameplay.

## How to Play

1. Guess the word by typing letters. Correct guesses will be displayed in their respective positions.
2. Incorrect guesses reduce the number of remaining attempts.
3. You can use the "Hint" button to reveal the category of the word at the cost of points.
4. Successfully guess the word to earn points and proceed to the next word automatically.
5. The game tracks your score and stores it in local storage so you can resume from where you left off.

## Technologies Used

- **HTML**: For structuring the game layout.
- **CSS**: For styling and animations to enhance the user interface.
- **JavaScript**: For handling game logic, local storage, and DOM manipulation.
- **JSON**: Used to store the word list and categories.

## Installation

1. Clone the repository to your local machine.

2. Navigate to the project directory:
   ```bash
   cd word-guessing-game
   ```

3. Open the `index.html` file in your browser to start the game:
   ```bash
   open index.html
   ```

## File Structure

```
word-guessing-game/
│
├── index.html         # Main HTML file
├── style.css         # CSS for styling the game
├── script.js         # JavaScript for game functionality
├── words.json        # JSON file containing words and categories
└── README.md         # Game instructions and information
```

## Word Categories

- **Fruits**: Apple, Banana, Grape, Kiwi, etc.
- **Animals**: Elephant, Tiger, Giraffe, Lion, etc.
- **Cities**: Paris, London, Tokyo, New York, etc.
- **Programming Languages**: JavaScript, Python, Java, Ruby, etc.
- **Nature**: Ocean, Forest, Desert, Mountain, etc.
- **Geography**: Mountain, Valley, Plateau, Hill, etc.
- **Instruments**: Guitar, Piano, Violin, Drum, etc.
- **Sports**: Basketball, Football, Tennis, Cricket, etc.
- **Foods**: Bread, Pizza, Sushi, Burger, etc.
- **Space**: Moon, Sun, Earth, Mars, etc.
- **Transport**: Train, Airplane, Car, Bicycle, etc.

## Future Improvements

- **Multiplayer Mode**: Add a feature allowing two players to compete.
- **Custom Categories**: Let users add their own words and categories.
- **Time Challenge Mode**: Implement a timed mode where players need to guess words within a specific time.

## Contributing

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```

3. Make your changes.

4. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```

5. Push to the branch:
   ```bash
   git push origin feature-branch
   ```

6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy the game and have fun guessing!
