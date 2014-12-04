    var svg = dimple.newSvg("#myChart", 700, 600);
    var data = [
      { "Major":"Computer Science", "Polarity":.4931034483 },
      { "Major":"Biology", "Polarity": .2285714 },
      { "Major":"Pychology", "Polarity":.606666667 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Major");
    chart.addMeasureAxis("y", "Polarity");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
 	/*var svg = dimple.newSvg("#bubbleChart", 700, 600);
    var data = [
      { "Major":"Computer Science", "Polarity":.8, "article" : "Unsupervised and Supervised Machine Learning in User Modeling for Intelligent Learning Environments " },
      { "Major":"Biology", "Polarity": .2285714 },
      { "Major":"Pychology", "Polarity":.606666667 }
    ];

    var svg = dimple.newSvg("#bubbleChart", 700, 600);
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Major");
    chart.addMeasureAxis("y", "Polarity");
    chart.addSeries("article", dimple.plot.bubble);
    chart.draw();*/

    var svg = dimple.newSvg("#bubbleChart", 700, 400);
      d3.tsv("../data/data.tsv", function (data) {
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(60, 30, 505, 305)
        var x = myChart.addCategoryAxis("x", "Index");
        myChart.addMeasureAxis("y", "POLAR");
        myChart.addSeries("Major", dimple.plot.bubble);
        myChart.addSeries("Name", "Name");
        myChart.addLegend(180, 10, 360, 20, "right");

        svg.selectAll("title_text")
          .data(["Click legend to","show/hide owners:"])
          .enter()
          .append("text")
            .attr("x", 499)
            .attr("y", function (d, i) { return 90 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

        myChart.draw();
      });
