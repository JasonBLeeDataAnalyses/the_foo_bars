// NBA TeamColors
let teamColors = {
  teams: [],
  colors: []
};

let teamName = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets",
  "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers",
  "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons",
  "Golden State Warriors", "Houston Rockets", "Indiana Pacers",
  "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies",
  "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves",
  "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder",
  "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns",
  "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs",
  "Toronto Raptors", "Utah Jazz", "Washington Wizards"];

let primaryColor = ["RGB(225,68,52)", "RGB(0,122,51)", "RGB(0,0,0)",
  "RGB(29,17,96)", "RGB(206,17,65)", "RGB(111,38,61)",
  "RGB(0,83,188)", "RGB(81,145,205)", "RGB(237,23,76)",
  "RGB(0,107,182)", "RGB(206,17,65)", "RGB(0,45,98)",
  "RGB(237,23,76)", "RGB(85,37,130)", "RGB(97,137,185)",
  "RGB(152,0,46)", "RGB(0,71,27)", "RGB(12,35,64)",
  "RGB(0,22,65)", "RGB(0,107,182)", "RGB(239,59,36)",
  "RGB(0,125,197)", "RGB(0,107,182)", "RGB(237,23,76)",
  "RGB(224,58,62)", "RGB(91,43,130)", "RGB(6,25,34)",
  "RGB(206,17,65)", "RGB(0,71,27)", "RGB(227,24,55)"];

let secondaryColor = ["RGB(196,214,0)", "RGB(139,111,78)", "RGB(255,255,255)",
  "RGB(0,120,140)", "RGB(6,25,34)", "RGB(255,184,28)",
  "RGB(187,196,202)", "RGB(253,185,39)", "RGB(0,107,182)",
  "RGB(253,185,39)", "RGB(196,206,211)", "RGB(23,187,48)",
  "RGB(0,107,182)", "RGB(253,185,39)", "RGB(0,40,94)",
  "RGB(249,160,27)", "RGB(240,235,210)", "RGB(35,97,146)",
  "RGB(180,151,90)", "RGB(245,132,38)", "RGB(239,59,36)",
  "RGB(6,25,34)", "RGB(237,23,76)", "RGB(229,95,32)",
  "RGB(6,25,34)", "RGB(99,113,122)", "RGB(196,206,211)",
  "RGB(6,25,34)", "RGB(0,43,92)", "RGB(100,64,0,60)"];

function appendTeamColors() {
  let i, ii = 0;
  for (i, i < ii; ii = teamName.length; i++) {
    teamColors.teams.push(teamName[i])
    teamColors.colors['primary'].push(primaryColor[i])
    teamColors.colors['secondary'].push(secondaryColor[i])};
  console.log(teamColors)
};

appendTeamColors();



