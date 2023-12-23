import * as document from "document";

const you = document.getElementById("you-container");
const them = document.getElementById("them-container");
const start = document.getElementById("start");
const main = document.getElementById("main");
const teamOne = document.getElementById("team-one");
const teamTwo = document.getElementById("team-two");
const servingScore = document.getElementById("serving-score");
const nonServerScore = document.getElementById("non-serving-score");

// Await input for who starts serving
let startingTeam;
let teamServing;
let yourTeamColor = "coral";
let theirTeamColor = "lightskyblue";


function startGame() {
    start.style.display = "none";
    main.style.display = "inline";
    setServerDashboard()
}

// Adjust server element
function setServerDashboard() {
    if(teamServing) {
        servingScore.style.fill = yourTeamColor;
        nonServerScore.style.fill = theirTeamColor;
    } else {
        servingScore.style.fill = theirTeamColor;
        nonServerScore.style.fill = yourTeamColor;
    }
}   

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
// git test
