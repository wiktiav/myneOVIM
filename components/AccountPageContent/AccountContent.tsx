import style from "@styles/AccountContent.module.css"

export interface AccountInfo {
  Username: string;
  MemberSince: string;
  LifetimePoints: number;
  TotalGuesses: number;
  CorrectGuesses: number;
  LeaguesWon: number;
  WeeklyRank: string;
  PeakRank: string;
  RecentRank: string;
}

// ranks: (1 - 3) Bronze, Silver, Gold, Plat, Diamond, Masters (top 50?)

// implement a line chart with npm install chart.js (later)

// https://css-tricks.com/snippets/javascript/random-hex-color/ 

function setDefaultBG(Username : string) {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   const defaultHolder = document.getElementById("test");
  if (defaultHolder) {
    defaultHolder.style.backgroundColor = "#" + randomColor;
  }
  // store current color into db for current player
}


function calculateCorrect(TotalGuesses: number, CorrectGuesses: number) {
  return (CorrectGuesses / TotalGuesses * 100).toFixed(1);
}

function pastWeekRank() {
  let curDate = new Date();
  let dayNumber = curDate.