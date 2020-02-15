const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock-id");
const paper_div = document.getElementById("paper-id");
const scissors_div = document.getElementById("scissors-id");

rock_div.addEventListener('click', window.onload=function() {
    console.log("hey you clicked on rock!");
})

paper_div.addEventListener('click', window.onload=function() {
    console.log("hey you clicked on paper!");
})

scissors_div.addEventListener('click', window.onload=function() {
    console.log("hey you clicked on scissors!");
})