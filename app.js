let $playerInput = document.querySelector("#playerSearch");
let $searchButton = document.querySelector("#searchButton");

$searchButton.addEventListener('click', returnPlayerInfo);
let zone_url = "/regular/zones/LeBron-James";
let heroku_url = "https://nba-players.herokuapp.com/players/James/Lebron";
let q1_url = "/regular/q1/LeBron-James";
let q2_url = "/regular/q2/LeBron-James";
let q3_url = "/regular/q3/LeBron-James";
let q4_url = "/regular/q4/LeBron-James";
let clutch_url = "/regular/clutch/LeBron-James";
let ot_url = "/regular/ot/LeBron-James";
let basic_url = "/regular/basic/LeBron-James"
let bio_url = "/bio/LeBron-James"
let url_dict = {"zoneURL": zone_url, "herokuURL": heroku_url, "q1URL": q1_url, "q2URL": q2_url, 
  "q3URL": q3_url, "q4URL": q4_url, "clutchURL": clutch_url, "otURL": ot_url, "basicStats": basic_url, "bio": bio_url};
let player_url = returnPlayerInfo();

function returnPlayerInfo() {
  let searchedPlayer = $playerInput.value.trim();
  let nameSplit = searchedPlayer.split(" ");
  if (nameSplit.length == 2) {
    let first_name = nameSplit[0];
    let last_name = nameSplit[1];
    let dash_name = nameSplit[0] + "-" + nameSplit[1];
    zone_url = "/regular/zones/" + dash_name;
    heroku_url = "https://nba-players.herokuapp.com/players/" + last_name + "/" + first_name;
    q1_url = "/regular/q1/" + dash_name;
    q2_url = "/regular/q2/" + dash_name;
    q3_url = "/regular/q3/" + dash_name;
    q4_url = "/regular/q4/" + dash_name;
    clutch_url = "/regular/clutch/" + dash_name;
    ot_url = "/regular/ot/" + dash_name;
    basic_url = "/regular/basic/" + dash_name;
    bio_url = "/bio/" + dash_name;
    url_dict = {"zoneURL": zone_url, "herokuURL": heroku_url, "q1URL": q1_url, "q2URL": q2_url, 
      "q3URL": q3_url, "q4URL": q4_url, "clutchURL": clutch_url, "otURL": ot_url, "basicStats": basic_url, "bio": bio_url};
    player_url = url_dict;
    heatmap();
    linegraph();
    addBio();
    return url_dict;
  } else if (nameSplit.length == 3) {
    let first_name = nameSplit[0];
    let last_name = nameSplit[1] + "_" + nameSplit[2].replace(".","");
    let dash_name = nameSplit[0] + "-" + nameSplit[1] + "-" + nameSplit[2];
    zone_url = "/regular/zones/" + dash_name;
    heroku_url = "https://nba-players.herokuapp.com/players/" + last_name + "/" + first_name;
    q1_url = "/regular/q1/" + dash_name;
    q2_url = "/regular/q2/" + dash_name;
    q3_url = "/regular/q3/" + dash_name;
    q4_url = "/regular/q4/" + dash_name;
    clutch_url = "/regular/clutch/" + dash_name;
    ot_url = "/regular/ot/" + dash_name;
    basic_url = "/regular/basic/" + dash_name;
    bio_url = "/bio/" + dash_name;
    url_dict = {"zoneURL": zone_url, "herokuURL": heroku_url, "q1URL": q1_url, "q2URL": q2_url, 
      "q3URL": q3_url, "q4URL": q4_url, "clutchURL": clutch_url, "otURL": ot_url, "basicStats": basic_url, "bio": bio_url};
    player_url = url_dict;
    heatmap();
    linegraph();
    addBio();
    return url_dict;
  } else if (nameSplit.length == 4) {
    let first_name = nameSplit[0];
    let last_name = nameSplit[1] + "_" + nameSplit[2] + "_" + nameSplit[3].replace(".","");
    let dash_name = nameSplit[0] + "-" + nameSplit[1] + "-" + nameSplit[2] + "-" + nameSplit[3];
    zone_url = "/regular/zones/" + dash_name;
    heroku_url = "https://nba-players.herokuapp.com/players/" + last_name + "/" + first_name;
    q1_url = "/regular/q1/" + dash_name;
    q2_url = "/regular/q2/" + dash_name;
    q3_url = "/regular/q3/" + dash_name;
    q4_url = "/regular/q4/" + dash_name;
    clutch_url = "/regular/clutch/" + dash_name;
    ot_url = "/regular/ot/" + dash_name;
    basic_url = "/regular/basic/" + dash_name;
    bio_url = "/bio/" + dash_name;
    url_dict = {"zoneURL": zone_url, "herokuURL": heroku_url, "q1URL": q1_url, "q2URL": q2_url, 
      "q3URL": q3_url, "q4URL": q4_url, "clutchURL": clutch_url, "otURL": ot_url, "basicStats": basic_url, "bio": bio_url};
    player_url = url_dict;
    heatmap();
    linegraph();
    addBio();
    return url_dict;
  } else if (nameSplit.length == 5) {
    let first_name = nameSplit[0];
    let last_name = nameSplit[1] + "_" + nameSplit[2] + "_" + nameSplit[3] + "_" + nameSplit[4].replace(".","");
    let dash_name = nameSplit[0] + "-" + nameSplit[1] + "-" + nameSplit[2] + "-" + nameSplit[3] + "-" + nameSplit[4];
    zone_url = "/regular/zones/" + dash_name;
    heroku_url = "https://nba-players.herokuapp.com/players/" + last_name + "/" + first_name;
    q1_url = "/regular/q1/" + dash_name;
    q2_url = "/regular/q2/" + dash_name;
    q3_url = "/regular/q3/" + dash_name;
    q4_url = "/regular/q4/" + dash_name;
    clutch_url = "/regular/clutch/" + dash_name;
    ot_url = "/regular/ot/" + dash_name;
    basic_url = "/regular/basic/" + dash_name;
    bio_url = "/bio/" + dash_name;
    url_dict = {"zoneURL": zone_url, "herokuURL": heroku_url, "q1URL": q1_url, "q2URL": q2_url, 
      "q3URL": q3_url, "q4URL": q4_url, "clutchURL": clutch_url, "otURL": ot_url, "basicStats": basic_url, "bio": bio_url};
    player_url = url_dict;
    heatmap();
    linegraph();
    addBio();
    return url_dict;
  };
  // console.log(url_dict);
  return url_dict;
};

function heatmap() {
  var myNode = document.getElementById("svg-area");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
  d3.json("/regular/zones", function (error, json) {
    if (error) return console.warn(error);
    let atb_makes = [];
    let atb_atts = [];
    let lc_makes = [];
    let lc_atts = [];
    let rc_makes = [];
    let rc_atts = [];
    let paint_makes = [];
    let paint_atts = [];
    let mr_makes = [];
    let mr_atts = [];
    let ra_makes = [];
    let ra_atts = [];

    for (p = 0; p < json.length; p++) {
      atb_make = +json[p].atbfgm | 0;
      atb_makes.push(atb_make);
      atb_att = +json[p].atbfga | 0;
      atb_atts.push(atb_att);

      lc_make = +json[p].lcfgm | 0;
      lc_makes.push(lc_make);

      lc_att = +json[p].lcfga | 0;
      lc_atts.push(lc_att);

      rc_make = +json[p].rcfgm | 0;
      rc_makes.push(rc_make);

      rc_att = +json[p].rcfga | 0;
      rc_atts.push(rc_att);

      paint_make = +json[p].paintfgm | 0;
      paint_makes.push(paint_make);

      paint_att = +json[p].paintfga | 0;
      paint_atts.push(paint_att);

      ra_make = +json[p].rafgm | 0;
      ra_makes.push(ra_make);

      ra_att = +json[p].rafga | 0;
      ra_atts.push(ra_att);

      mr_make = +json[p].mrfgm | 0;
      mr_makes.push(mr_make);

      mr_att = +json[p].mrfga | 0;
      mr_atts.push(mr_att);
    }
    let tot_atb_makes = atb_makes.reduce(function(acc, val) { return acc + val; });
    let tot_atb_atts = atb_atts.reduce(function(acc, val) { return acc + val; });
    let tot_rc_makes = rc_makes.reduce(function(acc, val) { return acc + val; });
    let tot_rc_atts = rc_atts.reduce(function(acc, val) { return acc + val; });
    let tot_lc_makes = lc_makes.reduce(function(acc, val) { return acc + val; });
    let tot_lc_atts = lc_atts.reduce(function(acc, val) { return acc + val; });
    let tot_paint_makes = paint_makes.reduce(function(acc, val) { return acc + val; });
    let tot_paint_atts = paint_atts.reduce(function(acc, val) { return acc + val; });
    let tot_ra_makes = ra_makes.reduce(function(acc, val) { return acc + val; });
    let tot_ra_atts = ra_atts.reduce(function(acc, val) { return acc + val; });
    let tot_mr_makes = mr_makes.reduce(function(acc, val) { return acc + val; });
    let tot_mr_atts = mr_atts.reduce(function(acc, val) { return acc + val; });

    let nba_atb_percentage = 100 * tot_atb_makes / tot_atb_atts;
    let nba_rc_percentage = 100 * tot_rc_makes / tot_rc_atts;
    let nba_lc_percentage = 100 * tot_lc_makes / tot_lc_atts;
    let nba_paint_percentage = 100 * tot_paint_makes / tot_paint_atts;
    let nba_ra_percentage = 100 * tot_ra_makes / tot_ra_atts;
    let nba_mr_percentage = 100 * tot_mr_makes / tot_mr_atts;

    // console.log("NBA Above the Break: ", nba_atb_percentage);
    // console.log("NBA Right Corner: ", nba_rc_percentage);
    // console.log("NBA Left Corner: ", nba_lc_percentage);
    // console.log("NBA Paint: ", nba_paint_percentage);
    // console.log("NBA Restricted Area: ", nba_ra_percentage);
    // console.log("NBA Mid Range: ", nba_mr_percentage);
    // console.log(player_url);
    d3.json(player_url.zoneURL, function (error, player_json) {
      if (error) return console.warn(error);
      let player_atb_percentage = parseFloat(player_json.atbfgp) | 0;
      let player_rc_percentage = parseFloat(player_json.rcfgp) | 0;
      let player_lc_percentage = parseFloat(player_json.lcfgp) | 0;
      let player_ra_percentage = parseFloat(player_json.rafgp) | 0;
      let player_mr_percentage = parseFloat(player_json.mrfgp) | 0;
      let player_paint_percentage = parseFloat(player_json.paintfgp) | 0;

      // console.log(player_json.name, "'s Above the Break: ", player_atb_percentage);
      // console.log(player_json.name, "'s Right Corner: ", player_rc_percentage);
      // console.log(player_json.name, "'s Left Corner: ", player_lc_percentage);
      // console.log(player_json.name, "'s Restricted Area: ", player_ra_percentage);
      // console.log(player_json.name, "'s Paint: ", player_paint_percentage);
      // console.log(player_json.name, "'s Mid Range: ", player_mr_percentage);

      let atb_ratio = player_atb_percentage / nba_atb_percentage;
      let rc_ratio = player_rc_percentage / nba_rc_percentage;
      let lc_ratio = player_lc_percentage / nba_lc_percentage;
      let ra_ratio = player_ra_percentage / nba_ra_percentage;
      let mr_ratio = player_mr_percentage / nba_mr_percentage;
      let paint_ratio = player_paint_percentage / nba_paint_percentage;

      // console.log("Ratio Above the Break: ", atb_ratio);
      // console.log("Ratio Right Corner: ", rc_ratio);
      // console.log("Ratio Left Corner: ", lc_ratio);
      // console.log("Ratio Paint: ", paint_ratio);
      // console.log("Ratio Restricted Area: ", ra_ratio);
      // console.log("Ratio Mid Range: ", mr_ratio);

      let teams = ["ATL", "BOS", "BKN",
        "CHA", "CHI", "CLE",
        "DAL", "DEN", "DET",
        "GSW", "HOU", "IND",
        "LAC", "LAL", "MEM",
        "MIA", "MIL", "MIN",
        "NOP", "NYK", "OKC",
        "ORL", "PHI", "PHX",
        "POR", "SAC", "SAS",
        "TOR", "UTA", "WAS"];

      let primaryColor = ["RGB(225,68,52)", "RGB(0,122,51)", "RGB(0,0,0)",
        "RGB(29,17,96)", "RGB(206,17,65)", "RGB(111,38,61)",
        "RGB(0,83,188)", "RGB(81,145,205)", "RGB(237,23,76)",
        "RGB(0,107,182)", "RGB(206,17,65)", "RGB(0,45,98)",
        "RGB(237,23,76)", "RGB(85,37,130)", "RGB(97,137,185)",
        "RGB(152,0,46)", "RGB(0,71,27)", "RGB(12,35,64)",
        "RGB(0,22,65)", "RGB(0,107,182)", "RGB(10, 126, 194)",
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

      // console.log(player_json.team)

      function getTeamColor1() {
        for (t = 0; t < teams.length; t++) {
          if (player_json.team === teams[t]) {
            return primaryColor[t];
          }
        }
      };

      function getTeamColor2() {
        for (t = 0; t < teams.length; t++) {
          if (player_json.team === teams[t]) {
            return secondaryColor[t];
          }
        }
      };

      let colors = ["#FF0000", "#FF0500", "#FF0A00", "#FF0F00", "#FF1400",
        "#FF1900", "#FF1E00", "#FF2300", "#FF2800", "#FF2D00",
        "#FF3300", "#FF3800", "#FF3D00", "#FF4200", "#FF4700",
        "#FF4C00", "#FF5100", "#FF5600", "#FF5B00", "#FF6000",
        "#FF6600", "#FF6B00", "#FF7000", "#FF7500", "#FF7A00",
        "#FF7F00", "#FF8400", "#FF8900", "#FF8E00", "#FF9300",
        "#FF9900", "#FF9E00", "#FFA300", "#FFA800", "#FFAD00",
        "#FFB200", "#FFB700", "#FFBC00", "#FFC100", "#FFC600",
        "#FFCC00", "#FFD100", "#FFD600", "#FFDB00", "#FFE000",
        "#FFE500", "#FFEA00", "#FFEF00", "#FFF400", "#FFF900",
        "#FFFF00", "#F9FC00", "#F4F900", "#EFF700", "#EAF400",
        "#E4F200", "#DFEF00", "#DAEC00", "#D5EA00", "#D0E700",
        "#CAE500", "#C5E200", "#C0DF00", "#BBDD00", "#B6DA00",
        "#B0D800", "#ABD500", "#A6D200", "#A1D000", "#9CCD00",
        "#96CB00", "#91C800", "#8CC500", "#87C300", "#82C000",
        "#7CBE00", "#77BB00", "#72B900", "#6DB600", "#68B300",
        "#62B100", "#5DAE00", "#5BAC00", "#53A900", "#4EA600",
        "#48A400", "#43A100", "#3E9F00", "#399C00", "#349900",
        "#2E9700", "#299400", "#249200", "#1F8F00", "#1A8C00",
        "#148A00", "#0F8700", "#0A8500", "#058200"];

      let threshold = [.02, .04, .06, .08, .10,
        .12, .14, .16, .18, .20,
        .22, .24, .26, .28, .30,
        .32, .34, .36, .38, .40,
        .42, .44, .46, .48, .50,
        .52, .54, .56, .58, .60,
        .62, .64, .66, .68, .70,
        .72, .74, .76, .78, .80,
        .82, .84, .86, .78, .90,
        .92, .94, .96, .98, 1.00,
        1.02, 1.04, 1.06, 1.08, 1.10,
        1.12, 1.14, 1.16, 1.18, 1.20,
        1.22, 1.24, 1.26, 1.28, 1.30,
        1.32, 1.34, 1.36, 1.38, 1.40,
        1.42, 1.44, 1.46, 1.48, 1.50,
        1.52, 1.54, 1.56, 1.58, 1.60,
        1.62, 1.64, 1.66, 1.68, 1.70,
        1.72, 1.74, 1.76, 1.78, 1.80,
        1.82, 1.84, 1.86, 1.88, 1.90,
        1.92, 1.94, 1.96, 1.98];

      function setColor(stat_ratio) {
        // console.log(stat_ratio)
        for (t = 0; t < threshold.length; t++) {
          // console.log(stat_ratio)
          // console.log(threshold[t])
          if (stat_ratio <= parseFloat(threshold[t])) {
            return colors[t];
          } else if (stat_ratio > 1.98) {
            return "#008000";
          }
        }
      }; 

      let atb_fga = parseFloat(player_json.atbfga) | 0;
      let rc_fga = parseFloat(player_json.rcfga) | 0;
      let lc_fga = parseFloat(player_json.lcfga) | 0;
      let ra_fga = parseFloat(player_json.rafga) | 0;
      let paint_fga = parseFloat(player_json.paintfga) | 0;
      let mr_fga = parseFloat(player_json.mrfga0) | 0;
      let total_shots = atb_fga + rc_fga + lc_fga + ra_fga + paint_fga + mr_fga;
      // console.log(total_shots)

      var svgHeight = 500;
      var svgWidth = 520

      let svg = d3.select("#svg-area")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth)
        .classed("halfcourt", true);

      let midrange = svg.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 500)
        .attr("height", 470)
        .style("stroke", "black")
        .style("fill", setColor(mr_ratio))
        .style("stroke-width", 2)
        // .style("opacity", mr_fga/total_shots)
        .classed("midrange", true);

      let leftcorner = svg.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 30)
        .attr("height", 140)
        .style("stroke", "black")
        .style("fill", setColor(lc_ratio))
        .style("opacity", 1.0)
        .style("stroke-width", 2)
        // .style("opacity", lc_fga/total_shots)
        .classed("leftcorner", true);

      let rightcorner = svg.append("rect")
        .attr("x", 480)
        .attr("y", 10)
        .attr("width", 30)
        .attr("height", 140)
        .style("stroke", "black")
        .style("fill", setColor(rc_ratio))
        .style("stroke-width", 2)
        // .style("opacity", rc_fga/total_shots)
        .classed("rightcorner", true);

      let paint1 = svg.append("rect")
        .attr("x", 180)
        .attr("y", 10)
        .attr("width", 160)
        .attr("height", 190)
        .style("stroke", "black")
        .style("fill", setColor(paint_ratio))
        .style("stroke-width", 2)
        // .style("opacity", paint_fga/total_shots)
        .classed("paint", true);

      let paint2 = svg.append("rect")
        .attr("x", 200)
        .attr("y", 10)
        .attr("width", 120)
        .attr("height", 190)
        .style("stroke", "black")
        .style("fill", setColor(paint_ratio))
        .style("stroke-width", 2)
        // .style("opacity", paint_fga/total_shots)
        .classed("paint", true)

      let paint3 = svg.append('circle')
        .attr("cx", 260)
        .attr("cy", 200)
        .attr("r", 60)
        .style("stroke", "black")
        .style("fill", setColor(paint_ratio))
        .style("stroke-width", 2)
        // .style("opacity", paint_fga/total_shots)
        .classed("paint", true);

      let ft = svg.append('path')
        .attr('d', "M200 200L320 200")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .classed("ft", true);

      let restricted = svg.append('path')
        .attr('d', "M225 10 L225 70 A 10 10 0 0 0 295 70 L295 10 Z")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", setColor(ra_ratio))
        // .style("opacity", ra_fga/total_shots)
        .classed("restricted", true);

      let atb = svg.append('path')
        .attr('d', "M10 150 L10 480 L510 480 L510 150 L480 150 A 200 140 0 1 1 40 150 Z")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", setColor(atb_ratio))
        // .style("opacity", atb_fga/total_shots)
        .classed("atb", true);

      let backboard = svg.append('path')
        .attr('d', "M230 50L290 50")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .classed("backboard", true);

      let rim = svg.append('circle')
        .attr("cx", 260)
        .attr("cy", 65)
        .attr("r", 15)
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", "none")
        .classed("rim", true);

      svg.append("text")
        .attr("x", "125")
        .attr("y", "120")
        .attr("text-anchor", "middle")
        .text( "Midrange:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "125")
        .attr("y", "135")
        .attr("text-anchor", "middle")
        .text(`${player_json.mrfgm}/${player_json.mrfga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "125")
        .attr("y", "150")
        .attr("text-anchor", "middle")
        .text(`${player_json.mrfgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "410")
        .attr("y", "40")
        .attr("text-anchor", "middle")
        .text( "Restricted Area:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "410")
        .attr("y", "55")
        .attr("text-anchor", "middle")
        .text(`${player_json.rafgm}/${player_json.rafga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "410")
        .attr("y", "70")
        .attr("text-anchor", "middle")
        .text(`${player_json.rafgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      let arrow = svg.append("path")
        .attr('d', "M380 55L263 94 L274 95 L271.202 86.606 L 263 94")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("fill", "black")
        .classed("arrow", true);

      svg.append("text")
        .attr("x", "45")
        .attr("y", "15")
        .text( "Left Corner:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(90, 45, 15)");
    
      svg.append("text")
        .attr("x", "20")
        .attr("y", "15")
        .text(`${player_json.lcfgm}/${player_json.lcfga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(90, 20, 15)");

      svg.append("text")
        .attr("x", "20")
        .attr("y", "145")
        .attr("text-anchor", "end")
        .text(`${player_json.lcfgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(90, 20, 145)");

      svg.append("text")
        .attr("x", "475")
        .attr("y", "15")
        .attr("text-anchor", "end")
        .text( "Right Corner:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(270, 475, 15)");
    
      svg.append("text")
        .attr("x", "500")
        .attr("y", "15")
        .attr("text-anchor", "end")
        .text(`${player_json.rcfgm}/${player_json.rcfga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(270, 500, 15)");

      svg.append("text")
        .attr("x", "500")
        .attr("y", "145")
        .text(`${player_json.rcfgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black")
        .attr("transform", "rotate(270, 500, 145)");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "180")
        .attr("text-anchor", "middle")
        .text( "Paint:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "195")
        .attr("text-anchor", "middle")
        .text(`${player_json.paintfgm}/${player_json.paintfga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "215")
        .attr("text-anchor", "middle")
        .text(`${player_json.paintfgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "350")
        .attr("text-anchor", "middle")
        .text( "Above The Break:" )
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "365")
        .attr("text-anchor", "middle")
        .text(`${player_json.atbfgm}/${player_json.atbfga}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      svg.append("text")
        .attr("x", "260")
        .attr("y", "380")
        .attr("text-anchor", "middle")
        .text(`${player_json.atbfgp}%`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "black");

      var imgs = svg.append("svg:image")
        .attr('x', 350)
        .attr('y', 310)
        .attr('width', 160)
        .attr('height', 160)
        .attr("xlink:href", player_url.herokuURL);

      lowerTeam = player_json.team.toLowerCase();
      // console.log(lowerTeam);
      var imgs = svg.append("svg:image")
        .attr('x', 15)
        .attr('y', 310)
        .attr('width', 130)
        .attr('height', 130)
        .attr("xlink:href", "https://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/" + lowerTeam + ".png")

      svg.append("rect")
        .attr("x", 10)
        .attr("y", 447)
        .attr("width", 500)
        .attr("height", 35)
        .style("stroke", "black")
        .style("fill", getTeamColor2())
        .style("stroke-width", 2)
        .classed("paint", true)

      svg.append("text")
        .attr("x", "500")
        .attr("y", "470")
        .attr("text-anchor", "end")
        .text(`${player_json.name}, ${player_json.team}`)
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .attr("fill", getTeamColor1());
      
      })

    });

  };

function linegraph() {
  two_list = []
  three_list = []
  fg_list = []
  time_list = []

  d3.json(url_dict.q1URL, function (error, player_json) {
    if (error) return console.warn(error);
    let two_1 = parseInt(player_json['2fgp']) | 0.0;
    let three_1 = parseInt(player_json['3pp']) | 0.0;
    let fg_1 = parseInt(player_json['fgp']) | 0.0;


    two_list.push(two_1); 
    three_list.push(three_1); 
    fg_list.push(fg_1);
    time_list.push(1);

  });

  d3.json(url_dict.q2URL, function (error, player_json) {
    if (error) return console.warn(error);
    let two_2 = parseInt(player_json['2fgp']) | 0.0;
    let three_2 = parseInt(player_json['3pp']) | 0.0;
    let fg_2 = parseInt(player_json['fgp']) | 0.0;

    two_list.push(two_2); 
    three_list.push(three_2); 
    fg_list.push(fg_2); 
    time_list.push(2);

  });

  d3.json(url_dict.q3URL, function (error, player_json) {
    if (error) return console.warn(error);
    let two_3 = parseInt(player_json['2fgp']) | 0.0;
    let three_3 = parseInt(player_json['3pp']) | 0.0;
    let fg_3 = parseInt(player_json['fgp']) | 0.0;

    two_list.push(two_3); 
    three_list.push(three_3);  
    fg_list.push(fg_3);
    time_list.push(3);

  });

  d3.json(url_dict.q4URL, function (error, player_json) {
    if (error) return console.warn(error);
    let two_4 = parseInt(player_json['2fgp']) | 0.0;
    let three_4 = parseInt(player_json['3pp']) | 0.0;
    let fg_4 = parseInt(player_json['fgp']) | 0.0;

    two_list.push(two_4); 
    three_list.push(three_4);  
    fg_list.push(fg_4);
    time_list.push(4);
  });

  d3.json(url_dict.clutchURL, function (error, player_json) {
    if (error) return console.warn(error);
    let fgatm = parseInt(player_json['fga']) - parseInt(player_json['3pa'])
    let fgmd = parseInt(player_json['fgm']) - parseInt(player_json['3pm'])
    let two_5 = parseInt(100 * fgmd/fgatm)   
    let three_5 = parseInt(player_json['3pp']) | 0.0;
    let fg_5 = parseInt(player_json['fgp']) | 0.0;

    two_list.push(two_5); 
    three_list.push(three_5);  
    fg_list.push(fg_5);
    time_list.push(5);

  });

  let trace1 = {
    x: time_list,
    y: two_list,
    type: "scatter",
    name: "2 Point FG %",
    marker: {
      color: "green",
      symbol: "hexagram"
    }
  };

  let trace2 = {
    x: time_list,
    y: three_list,
    type: "scatter",
    name: "3 Point FG %",
    marker: {
      color: "blue",
      symbol: "hexagram"
    }
  };

  let trace3 = {
    x: time_list,
    y: fg_list,
    type: "scatter",
    name: "Total FG %",
    marker: {
      color: "red",
      symbol: "hexagram"
    }
  };

  let data = [trace1, trace2, trace3];

  let layout = {
    autosize: true,
    margin: {
      l: 100  ,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    },
    plot_bgcolor: '#f2f2f2',
    images: [
      {
        x: 1,
        y: 1.05,
        sizex: 0.175,
        sizey: 0.175,
        source: src="https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-10/NBA_Logoman_2017-horizontal.jpg?itok=AixKYYrX",
        xanchor: "left",
        xref: "paper",
        yanchor: "bottom",
        yref: "paper"
      }
    ],
  
    title: "Shooting Percentages",
    font: {
      size: 14
    },
    xaxis: {title: "Quarter/Period",
            font: {size: 14},
            tickvals:[1,2,3,4,5],
            ticktext:["Q1","Q2","Q3","Q4","Last 5 Min"]},
  
    yaxis: { 
      title: "Shooting %"}
  };
  

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("linechart", data, layout);
};

function addBio() {
  var myNode = document.getElementById("bio-area");
  while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  };

  d3.json(url_dict.bio, function (error, bio) {
    if (error) return console.warn(error);
    // console.log(bio)
    let bioArea = d3.select("#bio-area").append("p");
    // console.log()
    let pTitle = bioArea.append("h3").text("Player Information");
    let pName = bioArea.append("h4").text(`${bio.name}`);
    let pTeam = bioArea.append("h5").text(`Team: ${bio.team}`);
    let pAge = bioArea.append("p").text(`Age: ${bio.age}`);
    heightSplit = bio.height.split("-");
    let pHeight = bioArea.append("p").text(`${heightSplit[0]} ft. ${heightSplit[1]} in.`);
    let pWeight = bioArea.append("p").text(`${bio.weight} lbs.`);
    if (bio.draftYear == "Undrafted") {
      let draftData = "Undrafted";
      let pDraft = bioArea.append("p").text(`${draftData}`);
    } else {
      let draftData = "Drafted " + bio.draftYear +" - Round " + bio.draftRd + ", Pick " + bio.draftNo
      let pDraft = bioArea.append("p").text(`${draftData}`);
    }
    let pCollege = bioArea.append("p").text(`College: ${bio.college}`);
    let pCountry = bioArea.append("p").text(`Country: ${bio.country}`);
    let tHeading = bioArea.append("h3").text("Stats");

    var myNode = document.getElementById("table-area");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    
    d3.json(url_dict.basicStats, function (error, basic) {
      if (error) throw error;
      // console.log(basic)

      jQuery(function($){
        $('#table-area').footable({
          "columns": [
            {"title": "Games", "name": "gp"},
            {"title": "Mins", "name": "min"},
            {"title": "Pts", "name": "pts"},
            {"title": "Rebs", "name": "reb"},
            {"title": "Asts", "name": "ast"},
            {"title": "TOs", "name": "tov"},
            {"title": "Stls", "name": "stl"},
            {"title": "Blks", "name": "blk"},
            {"title": "Fouls", "name": "pf"},
            {"title": "FG %", "name": "fgp"},
            {"title": "FT %", "name": "ft%"},
            {"title": "3P %", "name": "3pp"}
          ],
          "rows": [
            basic
          ]
        });

    });
  });
})};


function scatter() {  
  // NBA Interactive #scatter Plot

  // Foreword: Pre-Data Setup
  // ========================
  // Setup dimensions (width, height, margins) of the #scatterplot.
  // Label text for tooltip and text padding will be added here, even if unused.

  // Store panel width in variable
  let width = parseInt(d3.select("#scatter").style("width"));

  // Store height of the plot
  let height = width - width / 3.9;

  // Margin spacing for plot
  let margin = 20;

  // Space for text
  let labelArea = 110;

  // Padding for Axis labels for both vert/horiz axes
  let tPadBot = 40;
  let tPadLeft = 40;

  // Create 'chart' class for the #scatterplot
  let svg = d3 
    .select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

  // Set radius for each plot point which will appear on the graph.
  let plotRadius;
  function pltGet() {
    if (width <= 530) {
      plotRadius = 5;
    }
    else {
      plotRadius = 10;
    }
  }
  pltGet();

  // Make Axes Labels

  // Horizontal Axis
  // ===============

  // Group element to nest H-axis labels
  svg.append("g").attr("class", "xText");
  // xText enables selection of H-axis w/o excess coding
  let xText = d3.select(".xText");

  // Give xText transform & translate properties.
  function xTextRefresh() {
    xText.attr(
      "transform",
      "translate(" + 
        ((width - labelArea) / 2 + labelArea) +
        ", " +
        (height - margin - tPadBot) +
        ")"
    );
  }
  xTextRefresh();

  // Use xText to append SVGs
  // 1. Player Usage
  xText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "usg")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("Usage (%)");

  // // 2. Net Rating
  // xText
  //   .append("text")
  //   .attr("y", 26)
  //   .attr("data-name", "netrtg")
  //   .attr("data-axis", "x")
  //   .attr("class", "aText inactive x")
  //   .text("Net Rating");

  // Vertical Axis
  // =============

  // Specifying the letiables like this allows us to make our transform attributes more readable.
  let leftTextX = margin + tPadLeft;
  let leftTextY = (height + labelArea) / 2 - labelArea;

  // We add a second label group, this time for the axis left of the chart.
  svg.append("g").attr("class", "yText");

  // yText will allows us to select the group without excess code.
  let yText = d3.select(".yText");

  // Like before, we nest the group's transform attr in a function
  // to make changing it on window change an easy operation.
  function yTextRefresh() {
    yText.attr(
      "transform",
      "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
    );
  }
  yTextRefresh();

  // Now we append the text.
  // 1. Net Rating -- Point differential per 100 poss
  yText
    .append("text")
    .attr("y", -48)
    .attr("data-name", "netrtg")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Net Rating (pt differential 100 poss)");

  // 2. Effective Field Goal -- Measures field goal percentage adjusting for made 3-point field goals being 1.5 times more valuable than made 2-point field 
  yText
    .append("text")
    .attr("y", -24)
    .attr("data-name", "efg")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Effective Field Goal");

  // 3. True Shooting
  yText
    .append("text")
    .attr("x", 0)
    .attr("data-name", "tsp")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("True Shooting (%)");

  // Importing our csv data from endpoint(s)
  // ========================================
  // Data contains advanced stats from Heroku
  // We'll use True Shooting and Player Efficiency for the dependant axis
  // And Use Usage and Net Rating for our independant axis

  // Import the csv file using d3's .csv import method
  d3.json("/regular/adv/", function(error, data) {
    if (error) return console.warn(error);
    visualize(data);
  });

  // Creating visualization function
  // ===============================
  // function handling visualiztion fo all elements dependent on data.
  function visualize(theData) {
      // =================================
      // curX and curY will determine what data get's represented in each axis.
      // We designate our defaults here, which carry the same names
      // as the headings in their matching .csv data file.
      let curX = "usg";
      let curY = "tsp";

    // We also save empty letiables for our the min and max values of x and y.
      // this will allow us to alter the values in functions and remove repititious code.
      let xMin;
      let xMax;
      let yMin;
      let yMax;

      // This function allows us to set up tooltip rules (see d3-tip.js).
      let toolTip = d3
        .tip()
        .attr("class", "d3-tip")
        .offset([40, -60])
        .html(function(d) {
          // x key
          let theX;
          // Grab the player name.
          let thePlayer = "<div>" + d.name + "</div>";
          // Snatch the y value's key and value.
          let theY = "<div>" + curY + ": " + d[curY] + "%</div>";
          // If the x key is poverty
          if (curX === "usg") {
            // Grab the x key and a version of the value formatted to show percentage
            theX = "<div>" + curX + ": " + d[curX] + "%</div>";
          }
          else {
            // Otherwise
            // Grab the x key and a version of the value formatted to include commas after every third digit.
            theX = "<div>" +
              curX +
              ": " +
              parseFloat(d[curX]).toLocaleString("en") +
              "</div>";
          }
          // Display what we capture.
          return thePlayer + theX + theY;
        });
      // Call the toolTip function.
      svg.call(toolTip);

      // PART 2: D.R.Y!
      // ==============
      // These functions remove some repitition from later code.
      // This will be more obvious in parts 3 and 4.

      // a. change the min and max for x
      function xMinMax() {
        // min will grab the smallest datum from the selected column.
        xMin = d3.min(theData, function(d) {
          return parseFloat(d[curX]) * 0.90;
        });

        // .max will grab the largest datum from the selected column.
        xMax = d3.max(theData, function(d) {
          return parseFloat(d[curX]) * 1.10;
        });
      }

      // b. change the min and max for y
      function yMinMax() {
        // min will grab the smallest datum from the selected column.
        yMin = d3.min(theData, function(d) {
          return parseFloat(d[curY]) * 0.90;
        });

        // .max will grab the largest datum from the selected column.
        yMax = d3.max(theData, function(d) {
          return parseFloat(d[curY]) * 1.10;
        });
      }

      // c. change the classes (and appearance) of label text when clicked.
      function labelChange(axis, clickedText) {
        // Switch the currently active to inactive.
        d3
          .selectAll(".aText")
          .filter("." + axis)
          .filter(".active")
          .classed("active", false)
          .classed("inactive", true);

        // Switch the text just clicked to active.
        clickedText.classed("inactive", false).classed("active", true);
      }

      // Part 3: Instantiate the #scatter Plot
      // ====================================
      // This will add the first placement of our data and axes to the #scatter plot.

      // First grab the min and max values of x and y.
      xMinMax();
      yMinMax();

      // With the min and max values now defined, we can create our scales.
      // Notice in the range method how we include the margin and word area.
      // This tells d3 to place our circles in an area starting after the margin and word area.
      let xScale = d3
        .scaleLinear()
        .domain([xMin, xMax])
        .range([margin + labelArea, width - margin]);
      let yScale = d3
        .scaleLinear()
        .domain([yMin, yMax])
        // Height is inversed due to how d3 calc's y-axis placement
        .range([height - margin - labelArea, margin]);

      // We pass the scales into the axis methods to create the axes.
      // Note: D3 4.0 made this a lot less cumbersome then before. Kudos to mbostock.
      let xAxis = d3.axisBottom(xScale);
      let yAxis = d3.axisLeft(yScale);

      // Determine x and y tick counts.
      // Note: Saved as a function for easy mobile updates.
      function tickCount() {
        if (width <= 500) {
          xAxis.ticks(5);
          yAxis.ticks(5);
        }
        else {
          xAxis.ticks(10);
          yAxis.ticks(10);
        }
      }
      tickCount();
    // We append the axes in group elements. By calling them, we include
      // all of the numbers, borders and ticks.
      // The transform attribute specifies where to place the axes.
      svg
        .append("g")
        .call(xAxis)
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + (height - margin - labelArea) + ")");
      svg
        .append("g")
        .call(yAxis)
        .attr("class", "yAxis")
        .attr("transform", "translate(" + (margin + labelArea) + ", 0)");

      // Now let's make a grouping for our dots and their labels.
      let theCircles = svg.selectAll("g theCircles").data(theData).enter();

      // We append the circles for each row of data (or each state, in this case).
      theCircles
        .append("circle")
        // These attr's specify location, size and class.
        .attr("cx", function(d) {
          return xScale(d[curX]);
        })
        .attr("cy", function(d) {
          return yScale(d[curY]);
        })
        .attr("r", plotRadius)
        .attr("class", function(d) {
          return "playerCircle " + d.abbr;
        })
        // Hover rules
        .on("mouseover", function(d) {
          // Show the tooltip
          toolTip.show(d);
          // Highlight the state circle's border
          d3.select(this).style("stroke", "#323232");
        })
        .on("mouseout", function(d) {
          // Remove the tooltip
          toolTip.hide(d);
          // Remove highlight
          d3.select(this).style("stroke", "#e3e3e3");
        });

      // With the circles on our graph, we need matching labels.
      // Let's grab the state abbreviations from our data
      // and place them in the center of our dots.
      theCircles
        .append("text")
        // We return the abbreviation to .text, which makes the text the abbreviation.
        .text(function(d) {
          return d.abbr;
        })
        // Now place the text using our scale.
        .attr("dx", function(d) {
          return xScale(d[curX]);
        })
        .attr("dy", function(d) {
          // When the size of the text is the radius,
          // adding a third of the radius to the height
          // pushes it into the middle of the circle.
          return yScale(d[curY]) + plotRadius / 2.5;
        })
        .attr("font-size", plotRadius)
        .attr("class", "playerText")
        // Hover Rules
        .on("mouseover", function(d) {
          // Show the tooltip
          toolTip.show(d);
          // Highlight the state circle's border
          d3.select("." + d.abbr).style("stroke", "#323232");
        })
        .on("mouseout", function(d) {
          // Remove tooltip
          toolTip.hide(d);
          // Remove highlight
          d3.select("." + d.abbr).style("stroke", "#e3e3e3");
        });

      // Part 4: Dynamize the Graph
      // ==========================
      // This section will allow the user to click on any label
      // and display the data it references.

      // Select all axis text and add this d3 click event.
      d3.selectAll(".aText").on("click", function() {
        // Make sure we save a selection of the clicked text,
        // so we can reference it without typing out the invoker each time.
        let self = d3.select(this);

        // We only want to run this on inactive labels.
        // It's a waste of the processor to execute the function
        // if the data is already displayed on the graph.
        if (self.classed("inactive")) {
          // Grab the name and axis saved in label.
          let axis = self.attr("data-axis");
          let name = self.attr("data-name");

          // When x is the saved axis, execute this:
          if (axis === "x") {
            // Make curX the same as the data name.
            curX = name;

            // Change the min and max of the x-axis
            xMinMax();

            // Update the domain of x.
            xScale.domain([xMin, xMax]);

            // Now use a transition when we update the xAxis.
            svg.select(".xAxis").transition().duration(300).call(xAxis);

            // With the axis changed, let's update the location of the state circles.
            d3.selectAll("circle").each(function() {
              // Each state circle gets a transition for it's new attribute.
              // This will lend the circle a motion tween
              // from it's original spot to the new location.
              d3
                .select(this)
                .transition()
                .attr("cx", function(d) {
                  return xScale(d[curX]);
                })
                .duration(300);
            });

            // We need change the location of the state texts, too.
            d3.selectAll(".playerText").each(function() {
              // We give each state text the same motion tween as the matching circle.
              d3
                .select(this)
                .transition()
                .attr("dx", function(d) {
                  return xScale(d[curX]);
                })
                .duration(300);
            });

            // Finally, change the classes of the last active label and the clicked label.
            labelChange(axis, self);
          }
          else {
            // When y is the saved axis, execute this:
            // Make curY the same as the data name.
            curY = name;

            // Change the min and max of the y-axis.
            yMinMax();

            // Update the domain of y.
            yScale.domain([yMin, yMax]);

            // Update Y Axis
            svg.select(".yAxis").transition().duration(300).call(yAxis);

            // With the axis changed, let's update the location of the state circles.
            d3.selectAll("circle").each(function() {
              // Each state circle gets a transition for it's new attribute.
              // This will lend the circle a motion tween
              // from it's original spot to the new location.
              d3
                .select(this)
                .transition()
                .attr("cy", function(d) {
                  return yScale(d[curY]);
                })
                .duration(300);
            });

            // We need change the location of the state texts, too.
            d3.selectAll(".playerText").each(function() {
              // We give each state text the same motion tween as the matching circle.
              d3
                .select(this)
                .transition()
                .attr("dy", function(d) {
                  return yScale(d[curY]) + plotRadius / 3;
                })
                .duration(300);
            });

            // Finally, change the classes of the last active label and the clicked label.
            labelChange(axis, self);
          }
        }
      });

      // Part 5: Mobile Responsive
      // =========================
      // With d3, we can call a resize function whenever the window dimensions change.
      // This make's it possible to add true mobile-responsiveness to our charts.
      d3.select(window).on("resize", resize);

      // One caveat: we need to specify what specific parts of the chart need size and position changes.
      function resize() {
        // Redefine the width, height and leftTextY (the three letiables dependent on the width of the window).
        width = parseInt(d3.select("#scatter").style("width"));
        height = width - width / 3.9;
        leftTextY = (height + labelArea) / 2 - labelArea;

        // Apply the width and height to the svg canvas.
        svg.attr("width", width).attr("height", height);

        // Change the xScale and yScale ranges
        xScale.range([margin + labelArea, width - margin]);
        yScale.range([height - margin - labelArea, margin]);

        // With the scales changes, update the axes (and the height of the x-axis)
        svg
          .select(".xAxis")
          .call(xAxis)
          .attr("transform", "translate(0," + (height - margin - labelArea) + ")");

        svg.select(".yAxis").call(yAxis);

        // Update the ticks on each axis.
        tickCount();

        // Update the labels.
        xTextRefresh();
        yTextRefresh();

        // Update the radius of each dot.
        pltGet();

        // With the axis changed, let's update the location and radius of the state circles.
        d3
          .selectAll("circle")
          .attr("cy", function(d) {
            return yScale(d[curY]);
          })
          .attr("cx", function(d) {
            return xScale(d[curX]);
          })
          .attr("r", function() {
            return plotRadius;
          });

        // We need change the location and size of the state texts, too.
        d3
          .selectAll(".playerText")
          .attr("dy", function(d) {
            return yScale(d[curY]) + plotRadius / 3;
          })
          .attr("dx", function(d) {
            return xScale(d[curX]);
          })
          .attr("r", plotRadius / 3);
      }
  };

};

linegraph();
heatmap();
addBio();
scatter();
