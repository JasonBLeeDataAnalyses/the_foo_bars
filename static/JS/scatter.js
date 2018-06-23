function scatter() {
  // NBA Interactive Scatter Plot

  // Foreword: Pre-Data Setup
  // ========================
  // Setup dimensions (width, height, margins) of the scatterplot.
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

  // Create 'chart' class for the scatterplot
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
    .attr("y", -52)
    .attr("data-name", "netrtg")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Net Rating (pt differential 100 poss)");

  // 2. Effective Field Goal -- Measures field goal percentage adjusting for made 3-point field goals being 1.5 times more valuable than made 2-point field 
  yText
    .append("text")
    .attr("y", -26)
    .attr("data-name", "efg")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Effective Field Goal");

  // 3. True Shooting
  yText
    .append("text")
    .attr("x", 0)
    .attr("data-name", "tsp")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("True Shooting (%)");

  // Importing our csv data from endpoint(s)
  // ========================================
  // Data contains advanced stats from Heroku
  // We'll use True Shooting and Player Efficiency for the dependant axis
  // And Use Usage and Net Rating for our independant axis

  // Import the csv file using d3's .csv import method
  let csvdir = "/regular/adv/"
  d3.csv(csvdir, function(data) {
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

    // Part 3: Instantiate the Scatter Plot
    // ====================================
    // This will add the first placement of our data and axes to the scatter plot.

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
  }
};

scatter();