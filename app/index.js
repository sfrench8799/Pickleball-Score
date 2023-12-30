import * as document from "document";

const you = document.getElementById("you-container");
const them = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const teamOneScore = document.getElementById("team-one-score");
const teamTwoScore = document.getElementById("team-two-score");
const servingScore = document.getElementById("serving-score");
const nonServerScore = document.getElementById("non-serving-score");
const serverLineOne = document.getElementById("server-line-1");
const serverLineTwo = document.getElementById("server-line-2");
const serverLineThree = document.getElementById("server-line-3");
const serverLineFour = document.getElementById("server-line-4");


// Await input for who starts serving
let startingTeam;
let teamServing;
let yourTeamColor = "coral";
let theirTeamColor = "lightskyblue";


function startGame() {
    start.style.display = "none";
    main.style.display = "inline";
    setServerDashboard();
    setServingArrow();
}

// Adjust server dashboard based on who is serving

function setServerDashboard() {
    if(teamServing) {
        servingScore.style.fill = yourTeamColor;
        nonServerScore.style.fill = theirTeamColor;
    } else {
        servingScore.style.fill = theirTeamColor;
        nonServerScore.style.fill = yourTeamColor;
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

