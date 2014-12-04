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
    ];*/

    var svg = dimple.newSvg("#bubbleChart", 700, 600);
    d3.tsv("../data/data.tsv", function (data) {

    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Index");
    chart.addMeasureAxis("y", "POLAR");
    chart.addSeries(["NAME","AUTHORS","LOCATION", "POLAR POS", "POLAR NEG", "Major"], dimple.plot.bubble);
    chart.addLegend(180, 10, 360, 20, "right");

    chart.draw();
})