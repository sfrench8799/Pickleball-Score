import * as document from "document";
import { me as appbit } from "appbit";

// Stops app from timing out
appbit.appTimeoutEnabled = false;

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


const mainGame = {

    // Components
    teamOne: {
        serving: false,
        score: 0,
        currentServer: undefined,
        previousServer: undefined,
        teamColor: undefined,
    },

    teamTwo: {
        serving: false,
        score: 0,
        currentServer: undefined,
        previousServer: undefined,
        teamColor: undefined,
    },

    // Game setup
    setUpGame: function() {
        start.style.display = "none";
        main.style.display = "inline";
        setServerDashboard();
        setServingArrow();
    }
}


let startingTeam;
let teamServing;
let yourTeamColor = "coral";
let theirTeamColor = "lightskyblue";
let rallyWinner;
let currentServer = 2;
let teamOneCurrentScore = 0;
let teamTwoCurrentScore = 0;
let serverNumTracker;


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
    if (teamServing){

    }
    switch (serverNumTracker) {
        case 1:
            serverLineOne.style.display = "inline";
            serverLineTwo.style.display = "none";
            serverLineThree.style.display = "none";
            serverLineFour.style.display = "none";
        break;
        case 2:
            serverLineOne.style.display = "none";
            serverLineTwo.style.display = "inline";
            serverLineThree.style.display = "none";
            serverLineFour.style.display = "none";
        break;
        case 3:
            serverLineOne.style.display = "none";
            serverLineTwo.style.display = "none";
            serverLineThree.style.display = "inline";
            serverLineFour.style.display = "none";
        break;
        case 4:
            serverLineOne.style.display = "none";
            serverLineTwo.style.display = "none";
            serverLineThree.style.display = "none";
            serverLineFour.style.display = "inline";
        break;
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
    mainGame.teamOne.serving = true;
    mainGame.teamTwo.serving = false;
    mainGame.setUpGame
})

them.addEventListener("mousedown", (evt) => {
    mainGame.teamTwo.serving = true;
    mainGame.teamOne.serving = false;
    mainGame.setUpGame
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
