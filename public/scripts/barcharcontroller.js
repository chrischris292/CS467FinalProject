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
 	var svg = dimple.newSvg("#bubbleChart", 700, 600);
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