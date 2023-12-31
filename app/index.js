import * as document from "document";
import { me as appbit } from "appbit";

// Stops app from timing out
appbit.appTimeoutEnabled = false;


const teamOneServerSelect = document.getElementById("you-container");
const teamTwoServerSelect = document.getElementById("them-container");
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

// Game setup

const gameSetup = function() {
    start.style.display = "none";
    main.style.display = "inline";
    updateDashboard();
    updateArrowImg();
}

const mainGame = {

    // Components
    
    teamOne: {
        serving: false,
        score: 0,
        currentServer: 2,
        previousServer: undefined,
        teamColor: "coral",
        servingSide: true,
    },

    teamTwo: {
        serving: false,
        score: 0,
        currentServer: 2,
        previousServer: undefined,
        teamColor: "lightskyblue",
        servingSide: true,
    },


}




// Main game
// function rallyComplete() {
//     updateScore();
//     updateServerDash();
//     checkWinner();
//     arrowSwap();
// }

// Adjust server dashboard based on who is serving

function updateDashboard() {
    if(teamOne.serving) {
        servingScore.style.fill = teamOne.teamColor;
        nonServerScore.style.fill = teamTwo.teamColor;
    } else {
        servingScore.style.fill = teamTwo.teamColor;
        nonServerScore.style.fill = teamOne.teamColor;
    }
}   

// Serving arrow reset
function resetArrowDisplay() {
    serverLineOne.style.display = "none";
    serverLineTwo.style.display = "none";
    serverLineThree.style.display = "none";
    serverLineFour.style.display = "none";
}

// Arrow change utility
function updateArrowImg() {
    if (teamOne.serving){
        if (teamOne.servingSide && teamOne.currentServer == 1) {
            resetArrowDisplay();
            serverLineThree.style.display = "inline";
        } else if (teamOne.servingSide == false && teamOne.currentServer == 1) {
            resetArrowDisplay();
            serverLineFour.style.display = "inline";
        } else if (teamOne.servingSide && teamOne.currentServer == 2) {
            resetArrowDisplay();
            serverLineThree.style.display = "inline";
        } else if (teamOne.servingSide == false && teamOne.currentServer == 2) {
            resetArrowDisplay();
            serverLineFour.style.display = "inline";
        }
    } else {
        if (teamTwo.servingSide && teamTwo.currentServer == 1) {
            resetArrowDisplay();
            serverLineOne.style.display = "inline";
        } else if (teamTwo.servingSide == false && teamTwo.currentServer == 1) {
            resetArrowDisplay();
            serverLineTwo.style.display = "inline";
        } else if (teamTwo.servingSide && teamTwo.currentServer == 2) {
            resetArrowDisplay();
            serverLineTwo.style.display = "inline";
        } else if (teamTwo.servingSide == false && teamTwo.currentServer == 2) {
            resetArrowDisplay();
            serverLineOne.style.display = "inline";
        }
    }
    
}


const teamOne = mainGame.teamOne;
const teamTwo = mainGame.teamTwo;

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

// function updateScore() {
//     if (teamServing) {
//         if (rallyWinner) {
//             teamOneCurrentScore += 1;
//             servingScore.text = teamOneCurrentScore.toString();
//             nonServerScore.text = teamTwoCurrentScore.toString();
//             teamOneScore.text = teamOneCurrentScore.toString();
//             serverSwap();
//         } else if (currentServer === 1 && !rallyWinner){
//             currentServer = 2;
//             servingDashCurrentServer.text = currentServer.toString();
//         } else {
//             currentServer = 1;
//             teamServing = 0;
//             servingScore.text = teamTwoCurrentScore.toString();
//             nonServerScore.text = teamOneCurrentScore.toString();
//             servingDashCurrentServer.text = currentServer.toString();
//         }
//     } else {
//         if (!rallyWinner) {
//             teamTwoCurrentScore += 1;
//             nonServerScore.text = teamOneCurrentScore.toString();
//             servingScore.text = teamTwoCurrentScore.toString();
//             teamTwoScore.text = teamTwoCurrentScore.toString();
//             serverSwap();
//         } else if (currentServer === 1 && rallyWinner){
//             currentServer = 2;
//             servingDashCurrentServer.text = currentServer.toString();
//         } else {
//             currentServer = 1;
//             teamServing = 1;
//             nonServerScore.text = teamTwoCurrentScore.toString();
//             servingScore.text = teamOneCurrentScore.toString();
//             servingDashCurrentServer.text = currentServer.toString();
//         }
//     }
// }


// function updateServerDash() {
//     if (teamServing) {
//         servingScore.style.fill = yourTeamColor;
//         nonServerScore.style.fill = theirTeamColor;
//     } else {
//         servingScore.style.fill = theirTeamColor;
//         nonServerScore.style.fill = yourTeamColor;
//     }
// }

// function checkWinner() {
//     if (teamOneCurrentScore === 11) {
//         console.log("You win!!")
//     }

//     if (teamTwoCurrentScore === 11) {
//         console.log("You lose!!")
//     }
// }


// ************* Event Listeners *************

// Start game select server

teamOneServerSelect.addEventListener("mousedown", (evt) => {
    teamOne.serving = true;
    teamTwo.serving = false;
    gameSetup();
})

teamTwoServerSelect.addEventListener("mousedown", (evt) => {
    teamTwo.serving = true;
    teamOne.serving = false;
    gameSetup();
})

// Rally winner input

rallyWinnerButton.addEventListener("mousedown", (evt) => {
    rallyComplete();
})

rallyLoserButton.addEventListener("mousedown", (evt) => {
    rallyComplete();
})
