import * as document from "document";

const you = document.getElementById("you-container");
const them = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const servingDashServingScore = document.getElementById("serving-score");
const servingDashNonServingScore = document.getElementById("non-serving-score");
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


let startingTeam;
let teamServing;
let yourTeamColor = "coral";
let theirTeamColor = "lightskyblue";
let rallyWinner;
let currentServer = 2;
let teamOneCurrentScore = 0;
let teamTwoCurrentScore = 0;

// Game setup
function setupGame() {
    start.style.display = "none";
    main.style.display = "inline";
    setServerDashboard();
    setServingArrow();
}
// Main game
function rallyComplete() {
    updateScore();
    // checkWinner();

    // arrowSwap();
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

// Arrow change utility

// function arrowSwap() {

// }

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

function updateScore() {
    if (currentServer === 2) {
        if (teamServing && rallyWinner) {
            teamOneCurrentScore += 1;
            servingDashServingScore.text = teamOneCurrentScore.toString();
            teamOneScore.text = teamOneCurrentScore.toString();
            serverSwap();
        } else if (teamServing) {
            teamServing = 0;
            currentServer = 1;
        } else if (!teamServing && rallyWinner) {
            teamTwoCurrentScore += 1;
            servingDashServingScore.text = teamTwoCurrentScore.toString();
            teamTwoScore.text = teamTwoCurrentScore.toString();
            console.log("IN Here")
            serverSwap();
        } else if (!teamServing) {
            teamServing = 1;
            currentServer = 1;
        }
    } else {
        
        if (!teamServing && rallyWinner) {
            teamOneCurrentScore += 1;
            servingDashServingScore.text = teamOneCurrentScore.toString();
            teamOneScore.text = teamOneCurrentScore.toString();
            serverSwap();
        } else {
            currentServer = 2;
        }        
        
        if (!teamServing && rallyWinner) {
            teamTwoCurrentScore += 1;
            servingDashServingScore.text = teamTwoCurrentScore.toString();
            teamTwoScore.text = teamTwoCurrentScore.toString();
            serverSwap();
        } else {
            currentServer = 2;
        }
    }

}

// ************* Event Listeners *************

// Start game select server

you.addEventListener("mousedown", (evt) => {
    startingTeam = 1;
    teamServing = 1; 
    setupGame();
})

them.addEventListener("mousedown", (evt) => {
    startingTeam = 0;
    teamServing = 0;
    setupGame();
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

