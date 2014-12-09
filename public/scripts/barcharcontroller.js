    /*var svgBar = dimple.newSvg("#myChart", 590, 400);
    d3.tsv("../data/example_data.tsv", function (data) {
      console.log(data);
      var myChart = new dimple.chart(svgBar, data);
      myChart.setBounds(60, 30, 510, 330)
      myChart.addCategoryAxis("x", ["Price Tier", "Channel"]);
      myChart.addMeasureAxis("y", "Unit Sales");
      myChart.addSeries("Channel", dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
    });*/

    var clrCS = "#1f77b4";
    var clrBio = "#d62728";
    var clrPsy = "#31a354";

    var svgN = dimple.newSvg("#neutralChart", 700, 700);
    var dataN = [
      { "Subject": "Computer Science", "Type": "Full Text", "Avg. Neutrality": 0.493 },
      { "Subject": "Computer Science", "Type": "Summarized", "Avg. Neutrality": 0.665 },
      { "Subject": "Biology", "Type": "Full Text", "Avg. Neutrality": 0.729 },
      { "Subject": "Biology", "Type": "Summarized", "Avg. Neutrality": 0.714 },
      { "Subject": "Psychology", "Type": "Full Text", "Avg. Neutrality": 0.393 },
      { "Subject": "Psychology", "Type": "Summarized", "Avg. Neutrality": 0.581 }
    ];
    var chartN = new dimple.chart(svgN, dataN);
    chartN.addCategoryAxis("x", ["Subject", "Type"]);
    chartN.addMeasureAxis("y", "Avg. Neutrality");
    chartN.addSeries("Type", dimple.plot.bar);
    chartN.addLegend(270, 40, 510, 20, "left");
    chartN.draw();
    svgN.append("text")
     .attr("x", chartN._xPixels() + chartN._widthPixels() / 2)
     .attr("y", chartN._yPixels() - 50)
     .style("text-anchor", "middle")
     .style("font-family", "Brawler")
     .style("font-weight", "bold")
     .text("Neutrality in Academic Research Papers");

    var svgP = dimple.newSvg("#polarChart", 590, 400);
    var dataP = [
      { "Subject": "Computer Science", "PolarType": "Negative", "Polar Percentage": 0.362 },
      { "Subject": "Computer Science", "PolarType": "Positive", "Polar Percentage": 0.638 },
      { "Subject": "Biology", "PolarType": "Negative", "Polar Percentage": 0.454 },
      { "Subject": "Biology", "PolarType": "Positive", "Polar Percentage": 0.546 },
      { "Subject": "Psychology", "PolarType": "Negative", "Polar Percentage": 0.325 },
      { "Subject": "Psychology", "PolarType": "Positive", "Polar Percentage": 0.675 },
    ];
    var chartP = new dimple.chart(svgP, dataP);
    chartP.setBounds(100, 30, 480, 330)
    chartP.addPctAxis("x", "Polar Percentage");
    chartP.addCategoryAxis("y", "Subject");
    chartP.addSeries("PolarType", dimple.plot.bar);
    chartP.addLegend(280, 25, 380, 20, "left");
    chartP.draw();
    svgP.append("text")
   .attr("x", chartP._xPixels() + chartP._widthPixels() / 2)
   .attr("y", chartP._yPixels() - 15)
   .style("text-anchor", "middle")
   .style("font-family", "Brawler")
   .style("font-weight", "bold")
   .text("Negative and Positive Polarity Percentage");
  

 	/*var svg = dimple.newSvg("#bubbleChart", 700, 600);
    var data = [
      { "Major":"Computer Science", "Polarity":.8, "article" : "Unsupervised and Supervised Machine Learning in User Modeling for Intelligent Learning Environments " },
      { "Major":"Biology", "Polarity": .2285714 },
      { "Major":"Pychology", "Polarity":.606666667 }
    ];*/
/*
    var svg = dimple.newSvg("#bubbleChart", 700, 600);
    d3.tsv("../data/data.tsv", function (data) {

    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Index");
    chart.addMeasureAxis("y", "POLAR");
    chart.addSeries(["NAME","AUTHORS","LOCATION", "POLAR POS", "POLAR NEG", "Major"], dimple.plot.bubble);
    chart.addLegend(180, 10, 360, 20, "right");

    chart.draw();
})*/
    var svgB = dimple.newSvg("#bubbleChart", 700, 900);
    d3.tsv("../data/data.tsv", function (data) {

    var chartB = new dimple.chart(svgB, data);
    chartB.addCategoryAxis("x", ["Index", "NEUTRAL"]);
    chartB.addMeasureAxis("y", "POLAR");
    chartB.addSeries(["NAME","AUTHORS","LOCATION", "POLAR POS", "POLAR NEG", "Major"], dimple.plot.bubble);
    var myLegend = chartB.addLegend(500, 100, 60, 300, "left");
    chartB.draw();
    svgB.append("text")
   .attr("x", chartB._xPixels() + chartB._widthPixels() / 2)
   .attr("y", chartB._yPixels() - 50)
   .style("text-anchor", "middle")
   .style("font-family", "Brawler")
   .style("font-weight", "bold")
   .text("Distribution of Research Papers By Polarity vs. Neutrality");
        
        // This is a critical step.  By doing this we orphan the legend. This
        // means it will not respond to graph updates.  Without this the legend
        // will redraw when the chart refreshes removing the unchecked item and
        // also dropping the events we define below.
        chartB.legends = [];

        // This block simply adds the legend title. I put it into a d3 data
        // object to split it onto 2 lines.  This technique works with any
        // number of lines, it isn't dimple specific.
        svgB.selectAll("title_text")
          .data(["Click legend to","show/hide owners:"])
          .enter()
          .append("text")
            .attr("x", 800)
            .attr("y", function (d, i) { return 90 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

        // Get a unique list of Owner values to use when filtering
        var filterValues = dimple.getUniqueValues(data, "Major");
        // Get all the rectangles from our now orphaned legend
        myLegend.shapes.selectAll("rect")
          // Add a click event to each rectangle
          .on("click", function (e) {
            // This indicates whether the item is already visible or not
            var hide = false;
            var newFilters = [];
            // If the filters contain the clicked shape hide it
            filterValues.forEach(function (f) {
              if (f === e.aggField.slice(-1)[0]) {
                hide = true;
              } else {
                newFilters.push(f);
              }
            });
            // Hide the shape or show it
            if (hide) {
              d3.select(this).style("opacity", 0.2);
            } else {
              newFilters.push(e.aggField.slice(-1)[0]);
              d3.select(this).style("opacity", 0.8);
            }
            // Update the filters
            filterValues = newFilters;
            // Filter the data
            chartB.data = dimple.filterData(data, "Major", filterValues);
            // Passing a duration parameter makes the chart animate. Without
            // it there is no transition
            chartB.draw(800);
          });
      });

  $('#factorChart').highcharts({
        chart: {
            width: 1000,
            height: 800,
            spacingRight: 300,
            marginRight: 300,
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Bias of Journals Based on Impact Factor and Polarity'
        },
        subtitle: {
            text: 'Blue = Computer Science | Red = Biology | Green = Psychology'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Impact Factor (IR)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Neutrality'
            }
        },
        legend: {
            width: 400,
            x: 0,
            y: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '<br> {point.x} IR | {point.y} Polarity'
                }
            }
        },
        series: [{
            name: 'ACM',
            color: clrCS,
            data: [[2.717, 0.470]]
        }, {
            name: 'IEEE',
            color: clrCS,
            data: [[6.81, 0.8]]
        }, {
            name: 'Data+Science',
            color: clrCS,
            data: [[1.314, 0.8]]
        }, {
            name: 'Journal Virology',
            color: clrBio,
            data: [[4.648, 0.15]]
        }, {
            name: 'Science Direct',
            color: clrBio,
            data: [[1.647, 0.2667]]
        }, {
            name: 'Journal of Biological Chemistry',
            color: clrBio,
            data: [[4.651, 0.8]]
        }, {
            name: 'CABI',
            color: clrBio,
            data: [[0.327, 0.8]]
        }, {
            name: 'Oxford Journal',
            color: clrBio,
            data: [[4.984, 0.2]]
        }, {
            name: 'New England Journal of Medicine',
            color: clrBio,
            data: [[54.42, 0.175]]
        }, {
            name: 'Evolutioary Psychology',
            color: clrPsy,
            data: [[1.704, 0.55]]
        }, {
            name: 'Cornell Journal',
            color: clrPsy,
            data: [[0.47, 0.8]]
        }, {
            name: 'American Psychology Association',
            color: clrPsy,
            data: [[5.45, 0.633]]
        }, {
            name: 'Journal of Abnormal Psychology',
            color: clrPsy,
            data: [[5.382, 0.8]]
        }, {
            name: 'Psychological Review',
            color: clrPsy,
            data: [[9.212, 0.5667]]
        }, {
            name: 'Personality and Social Psychology Review',
            color: clrPsy,
            data: [[8.195, 0.8]]
        }, {
            name: 'Journal of Applied Psychology',
            color: clrPsy,
            data: [[3.977, 0.765]]
        }, {
            name: 'Annual Review of Psychology',
            color: clrPsy,
            data: [[22.45, 0.8]]
        }]
    });


