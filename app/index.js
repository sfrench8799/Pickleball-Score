import * as document from "document";

const you = document.getElementById("you-container");
const them = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const servingDashCurrentServer = document.getElementById("current-server");
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
    updateServerDash();
    checkWinner();
    arrowSwap();
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

function arrowSwap() {
    if (teamServing && teamOneCurrentScore % 2) {
        console.log("Even");
    } else if (teamServing) {
        console.log("Odd");
    } else if (!teamServing && teamOneCurrentScore % 2) {
        console.log("Even");
    } else {
        console.log("Odd");
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

// Main game functions

function updateScore() {
    if (teamServing) {
        if (rallyWinner) {
            teamOneCurrentScore += 1;
            servingScore.text = teamOneCurrentScore.toString();
            nonServerScore.text = teamTwoCurrentScore.toString();
            teamOneScore.text = teamOneCurrentScore.toString();
            serverSwap();
        } else if (currentServer === 1 && !rallyWinner){
            currentServer = 2;
            servingDashCurrentServer.text = currentServer.toString();
        } else {
            currentServer = 1;
            teamServing = 0;
            servingScore.text = teamTwoCurrentScore.toString();
            nonServerScore.text = teamOneCurrentScore.toString();
            servingDashCurrentServer.text = currentServer.toString();
        }
    } else {
        if (!rallyWinner) {
            teamTwoCurrentScore += 1;
            nonServerScore.text = teamOneCurrentScore.toString();
            servingScore.text = teamTwoCurrentScore.toString();
            teamTwoScore.text = teamTwoCurrentScore.toString();
            serverSwap();
        } else if (currentServer === 1 && rallyWinner){
            currentServer = 2;
            servingDashCurrentServer.text = currentServer.toString();
        } else {
            currentServer = 1;
            teamServing = 1;
            nonServerScore.text = teamTwoCurrentScore.toString();
            servingScore.text = teamOneCurrentScore.toString();
            servingDashCurrentServer.text = currentServer.toString();
        }
    }
}


function updateServerDash() {
    if (teamServing) {
        servingScore.style.fill = yourTeamColor;
        nonServerScore.style.fill = theirTeamColor;
    } else {
        servingScore.style.fill = theirTeamColor;
        nonServerScore.style.fill = yourTeamColor;
    }
}

function checkWinner() {
    if (teamOneCurrentScore === 11) {
        console.log("You win!!")
    }

    if (teamTwoCurrentScore === 11) {
        console.log("You lose!!")
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
    rallyWinner = true;
    rallyComplete();
})

rallyLoserButton.addEventListener("mousedown", (evt) => {
    rallyWinner = false;
    rallyComplete();
})

