import * as document from "document";
import { me as appbit } from "appbit";

// Stops app from timing out
appbit.appTimeoutEnabled = false;


const teamOneServerSelect = document.getElementById("you-container");
const teamTwoServerSelect = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const currentServer = document.getElementById("current-server");
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
const rallyWinnerYouBtn = document.getElementById("winner-you-container");
const rallyWinnerThemBtn = document.getElementById("winner-them-container");

// Game setup

const gameSetup = function() {
    start.style.display = "none";
    main.style.display = "inline";
    updateDashboard();
}



const mainGame = {

    // Components
    
    teamOne: {
        serving: false,
        score: 0,
        currentServer: 2,
        previousServer: undefined,
        sideOut: undefined,
        teamColor: "coral",
        servingSide: true,
        playerOne: "S1",
        playerTwo: "S2",
    },

    teamTwo: {
        serving: false,
        score: 0,
        currentServer: 2,
        previousServer: undefined,
        sideOut: undefined,
        teamColor: "lightskyblue",
        servingSide: true,
        playerOne: "S1",
        playerTwo: "S2",
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
    if (teamOne.serving) {
        if (serverLineThree.style.display == "inline") {
            resetArrowDisplay();
            serverLineFour.style.display = "inline";
        } else {
            resetArrowDisplay();
            serverLineThree.style.display = "inline";
        }
    }

    if (teamTwo.serving) {
        if (serverLineOne.style.display == "inline") {
            resetArrowDisplay();
            serverLineTwo.style.display = "inline";
        } else {
            resetArrowDisplay();
            serverLineOne.style.display = "inline";
        }
    }
    // if (teamOne.serving){
    //     if (teamOne.currentServer === 1 && teamOneServerOne.text === teamOne.playerOne) {
    //         if (teamOne.servingSide) {
    //             resetArrowDisplay();
    //             serverLineThree.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineFour.style.display = "inline";
    //         }
    //     if (teamOne.currentServer === 1 && teamOneServerOne.text === teamOne.playerTwo) {
    //         if (teamOne.servingSide === false) {
    //             resetArrowDisplay();
    //             serverLineThree.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineFour.style.display = "inline";
    //         } 
        
    //     if (teamOne.currentServer === 2 && teamOneServerOne.text === teamOne.playerOne) {
    //         if (teamOne.servingSide) {
    //             resetArrowDisplay();
    //             serverLineFour.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineThree.style.display = "inline";
    //         } 
    //     }
    //     } else {
    //         if (teamOne.servingSide && (teamOne.score + 2) % 2 < 1) {
    //             resetArrowDisplay();
    //             serverLineThree.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineFour.style.display = "inline";
    //         } 
    //     }
    // } else {
    //     if (teamTwo.currentServer === 1) {
    //         if (teamTwo.servingSide && (teamTwo.score + 2) % 2 < 1) {
    //             resetArrowDisplay();
    //             serverLineOne.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineTwo.style.display = "inline";
    //         } 
    //     } else {
    //         if (teamTwo.servingSide && (teamTwo.score + 2) % 2 < 1) {
    //             resetArrowDisplay();
    //             serverLineOne.style.display = "inline";
    //         } else {
    //             resetArrowDisplay();
    //             serverLineTwo.style.display = "inline";
    //         } 
    //     }
        
    // }
}

const teamOneRallyWin = function () {
    if (teamOne.serving) {
        teamOne.score++;
        serverSwap();
    } else if (teamTwo.currentServer === 1){
        teamTwo.previousServer = 1;
        teamTwo.currentServer = 2;
    } else {
        teamTwo.previousServer = 2;
        teamTwo.currentServer = 1;
        teamTwo.serving = false;
        teamOne.serving = true;
        updateDashboard();
    }
}

const teamTwoRallyWin = function () {
    if (teamTwo.serving) {
        teamTwo.score++;
        serverSwap();
    } else if (teamOne.currentServer === 1){
        teamOne.previousServer = 1;
        teamOne.currentServer = 2;
    } else {
        teamOne.previousServer = 2;
        teamOne.currentServer = 1;
        teamOne.serving = false;
        teamTwo.serving = true;
        updateDashboard();
    }
}


function serverSwap() {
    if (teamOne.serving) {
        if (teamOne.servingSide === true) {
            teamOneServerOne.text = teamOne.playerTwo;
            teamOneServerTwo.text = teamOne.playerOne;
            teamOne.servingSide = false;
        } else {
            teamOneServerOne.text = teamOne.playerOne;
            teamOneServerTwo.text = teamOne.playerTwo;
            teamOne.servingSide = true;
        }
    } 
    if (teamTwo.serving) {
        if (teamTwo.servingSide === true) {
            teamTwoServerOne.text = teamTwo.playerTwo;
            teamTwoServerTwo.text = teamTwo.playerOne;
            teamTwo.servingSide = false;
        } else {
            teamTwoServerOne.text = teamTwo.playerOne;
            teamTwoServerTwo.text = teamTwo.playerTwo;
            teamTwo.servingSide = true;
        }
    }
}

const updateScore = function() {
    teamOneScore.text = teamOne.score.toString();
    teamTwoScore.text = teamTwo.score.toString();
    if (teamOne.serving) {
        servingScore.text = teamOne.score.toString();
        nonServerScore.text = teamTwo.score.toString();
        currentServer.text = teamOne.currentServer.toString();
    } else {
        servingScore.text = teamTwo.score.toString();
        nonServerScore.text = teamOne.score.toString();
        currentServer.text = teamTwo.currentServer.toString();
    }
}

const teamOne = mainGame.teamOne;
const teamTwo = mainGame.teamTwo;


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
    teamTwo.currentServer = 1;
    teamTwo.serving = false;
    serverLineThree.style.display = "inline";
    gameSetup();
})

teamTwoServerSelect.addEventListener("mousedown", (evt) => {
    teamTwo.serving = true;
    teamOne.currentServer = 1;
    teamOne.serving = false;
    serverLineOne.style.display = "inline";
    gameSetup();
})

// Rally winner input

// ****updateScore() must come after teamRallyWin() to ensure proper score.****
rallyWinnerYouBtn.addEventListener("mousedown", (evt) => {
    teamOneRallyWin();
    updateScore();
    updateArrowImg();
})

rallyWinnerThemBtn.addEventListener("mousedown", (evt) => {
    teamTwoRallyWin();
    updateScore();
    updateArrowImg();
})
