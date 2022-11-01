let team1Score = 0
let team2Score = 0
let totalScore = 0
function oneScore2Points() {
  team1Score += 2,
    console.log(team1Score)
  drawScore1()
  totalScoreAll()
}

function oneScore3Points() {
  team1Score += 3,
    console.log(team1Score)
  drawScore1()
  totalScoreAll()
}
function twoScore2Points() {
  team2Score += 2,
    console.log(team1Score)
  drawScore2()
  totalScoreAll()
}

function twoScore3Points() {
  team2Score += 3,
    console.log(team1Score)
  drawScore2()
  totalScoreAll()
}

function drawScore1() {
  let score1Elm = document.getElementById('team1-score')
  console.log()
  score1Elm.innerText = team1Score
}
function drawScore2() {
  let score2Elm = document.getElementById('team2-score')
  console.log()
  score2Elm.innerText = team2Score
}

function resetScore() {
  team1Score = 0
  team2Score = 0
  totalScore = 0
  drawScore1()
  drawScore2()
  drawTotalScore()
}

function totalScoreAll() {
  totalScore = team1Score + team2Score
  drawTotalScore()
}

function drawTotalScore() {
  let totalScoreElm = document.getElementById('total-score')
  totalScoreElm.innerText = totalScore
}
