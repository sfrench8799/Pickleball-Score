import * as document from "document";

const you = document.getElementById("you-container");
const them = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const teamOneScore = document.getElementById("team-one-score");
const teamTwoScore = document.getElementById("team-two-score");
const teamOneServerOne = document.getElementById("team-one-server-one");
const teamOneServerTwo = document.getElementById("team-one-server-two");
const teamTwoServerOne = document.getElementById("team-two-server-one");
const teamTwoServerTwo = document.getElementById("team-two-server-two");
const servingScore = document.getElementById("serving-score");
const nonServerScore = document.getElementById("non-serving-score");
const serverLineOne = document.getElementById("server-line-1");
const serverLineTwo = document.getElementById("server-line-2");
const serverLineThree = document.getElementById("server-line-3");
const serverLineFour = document.getElementById("server-line-4");
const rallyWinnerButton = document.getElementById("winner-container");
const rallyLoserButton = document.getElementById("loser-container");


// Await input for who starts serving
let startingTeam;
let teamServing;
let serverOne = "S1";
let serverTwo = "S2";
let yourTeamColor = "coral";
let theirTeamColor = "lightskyblue";
let rallyWinner;
let currentServer;

// Main game
function startGame() {
    start.style.display = "none";
    main.style.display = "inline";
    // Game setup
    setServerDashboard();
    setServingArrow();
    currentServer = 1;
    // Active game


}

// Adjust server dashboard based on who is serving

function setServerDashboard() {
    if(teamServing) {
        servingScore.style.fill = yourTeamColor;
        nonServerScore.style.fill = theirTeamColor;
    } else {
        servingScore.style.fill = theirTeamColor;
        nonServerScore.style.fill = yourTeamColor;
        teamServing = 0;
    }
}   

// Serving arrow

function setServingArrow() {
    if (startingTeam) {
        serverLineThree.style.display = "inline";
    } else {
        serverLineOne.style.display = "inline";
    }
}

function rallyComplete() {
    if (rallyWinner && teamServing) {
        serverSwap();
    }
}

// Server change utility

function serverSwap() {
    if (teamServing) {
        if (teamOneServerOne.text === "S1") {
            teamOneServerOne.text = "S2";
            teamOneServerTwo.text = "S1";
        } else {
            teamOneServerOne.text = "S1";
            teamOneServerTwo.text = "S2";
        }

    } else {
        if (teamTwoServerOne.text === "S1") {
            teamTwoServerOne.text = "S2";
            teamTwoServerTwo.text = "S1";
        } else {
            teamTwoServerOne.text = "S1";
            teamTwoServerTwo.text = "S2";
        }
    }
}

// ************* Event Listeners *************

// Start game select server

you.addEventListener("mousedown", (evt) => {
    startingTeam = 1;
    teamServing = 1; 
    startGame();
})

them.addEventListener("mousedown", (evt) => {
    startingTeam = 0;
    teamServing = 0;
    startGame();
})

// Rally winner input

rallyWinnerButton.addEventListener("mousedown", (evt) => {
    rallyWinner = 1;
    rallyComplete();
})

rallyLoserButton.addEventListener("mousedown", (evt) => {
    rallyWinner = 0;
    rallyComplete();
})

