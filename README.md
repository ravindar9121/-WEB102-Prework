# Sea Monster Crowdfunding – CodePath WEB102 Prework

This project simulates a crowdfunding platform for independent games. The site dynamically displays game data, filters content, and summarizes funding statistics using JavaScript and DOM manipulation.

In this project, we built an interactive crowdfunding webpage for indie games using HTML, CSS, and JavaScript. Game data was loaded from a local JSON file, parsed, and dynamically rendered as game cards. We calculated and displayed summary statistics like total backers and total funds raised. Interactive filter buttons allowed users to view funded, unfunded, or all games. We also displayed a live summary paragraph describing funding progress and used JavaScript array methods (filter, reduce, sort) and DOM manipulation techniques to implement the logic. Finally, we highlighted the top two most funded games using destructuring and sorting.

---

## ✅ Project Goals

- Practice JavaScript fundamentals like loops, functions, `reduce`, `filter`, and event listeners.
- Manipulate the DOM to dynamically render content.
- Implement UI interactivity with filtering and sorting.

---

## 📋 Completed Challenges

### 🔹 Challenge 3: Render All Games
- Dynamically loads all games from `GAMES_JSON`.
- Each game is displayed with its image, title, description, and number of backers.
- Built using `document.createElement`, `innerHTML`, and `appendChild`.

### 🔹 Challenge 4: Summary Statistics
- Shows:
  - Total number of contributions (backers)
  - Total amount raised
  - Total number of games
- Used `reduce()` to calculate values and `toLocaleString()` for formatting numbers with commas.

### 🔹 Challenge 5: Filter Buttons
- Buttons to:
  - Show all games
  - Show only funded games
  - Show only unfunded games
- Used `filter()` to build new arrays based on funding status.
- Used `addEventListener()` to hook up the buttons.

### 🔹 Challenge 6: Company Summary Paragraph
- Added a summary `<p>` element inside the `#description-container`.
- Describes:
  - Total raised
  - Number of games
  - Number of unfunded games (using ternary operator for grammar)
- Built with `createElement`, template literals, and DOM insertion.

### 🔹 Challenge 7: Top Funded Games
- Sorted games by pledged amount using `.sort()`.
- Used destructuring to extract the top two games:  
  `const [topGame, secondGame, ...rest] = sortedGames`
- Displayed top game names in `#first-game` and `#second-game` containers.

---

## 🧪 Testing & Usage

1. Open `index.html` in your browser.
2. Confirm:
   - Game cards load correctly.
   - Stats appear at the top.
   - Filter buttons work as expected.
   - Summary paragraph is displayed.
   - Top 2 funded games are shown.

---

## 🗝 Secret Keys (Offline Unlocking Reference)

| Challenge | Secret Key              |
|----------:|---------------------------------|
| 3         | `6games-container.stats-card15` |
| 4         | `11seafoamGAMES_JSON`           |
| 5         | `19187800268BRAIN`              |
| 6         | `74FLANNELclick`                |
| 7         | `toLocaleString<div>1IVY`       |

---

## 📂 Files Involved

- `index.html`: Contains the static layout and buttons.
- `style.css`: Provides styling for the layout and cards.
- `index.js`: Contains all logic and dynamic DOM manipulation.
- `games.js`: Provides game data in JSON format.

---

## ✨ Bonus Ideas (Optional Improvements)

- Add a search bar to find games by name.
- Add a nav bar to jump between sections.
- Improve the visual design with custom CSS themes.
- Implement light/dark mode toggle.

---

### 

Video Walkthrough:
https://drive.google.com/file/d/1i5mhVP2zxA8gd7SnLjMrC8K4N6dQ2lLU/view?usp=drive_link 
Or
https://imgur.com/a/tQXKO8q.gif
