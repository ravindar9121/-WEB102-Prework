// Import JSON data
import GAMES_DATA from './games.js';
const GAMES_JSON = JSON.parse(GAMES_DATA);

// DOM element references
const gamesContainer = document.getElementById("games-container");
const contributionsCard = document.getElementById("num-contributions");
const raisedCard = document.getElementById("total-raised");
const gamesCard = document.getElementById("num-games");
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");
const descriptionContainer = document.getElementById("description-container");
const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

// Utility: Remove all children from a DOM node
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Challenge 3: Render all games
function addGamesToPage(games) {
    for (let game of games) {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p><strong>Backers:</strong> ${game.backers}</p>
        `;
        gamesContainer.appendChild(gameCard);
    }
}
addGamesToPage(GAMES_JSON);

// Challenge 4: Stats cards
const totalContributions = GAMES_JSON.reduce((acc, game) => acc + game.backers, 0);
contributionsCard.innerHTML = totalContributions.toLocaleString();

const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);
raisedCard.innerHTML = `$${totalRaised.toLocaleString()}`;

gamesCard.innerHTML = GAMES_JSON.length;

// Challenge 5: Filters
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
    console.log("Unfunded:", unfundedGames.length);
    addGamesToPage(unfundedGames);
}
function filterFundedOnly() {
    deleteChildElements(gamesContainer);
    const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
    console.log("Funded:", fundedGames.length);
    addGamesToPage(fundedGames);
}
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);
}
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

// Challenge 6: Company Summary Paragraph
const numUnfunded = GAMES_JSON.filter(game => game.pledged < game.goal).length;
const summaryMessage = `
A total of $${totalRaised.toLocaleString()} has been raised for ${GAMES_JSON.length} games.
Currently, ${numUnfunded} ${numUnfunded === 1 ? "game remains" : "games remain"} unfunded.
We need your help to fund these amazing projects!
`;
const summaryElement = document.createElement("p");
summaryElement.innerText = summaryMessage;
descriptionContainer.appendChild(summaryElement);

// Challenge 7: Display top 2 funded games
const sortedGames = [...GAMES_JSON].sort((a, b) => b.pledged - a.pledged);
const [topGame, secondGame, ...rest] = sortedGames;

const topGameElement = document.createElement("p");
topGameElement.innerText = topGame.name;
firstGameContainer.appendChild(topGameElement);

const secondGameElement = document.createElement("p");
secondGameElement.innerText = secondGame.name;
secondGameContainer.appendChild(secondGameElement);
