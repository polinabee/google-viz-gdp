google.charts.load('current', {
  packages: ['corechart', 'controls']
});
google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard() {
  $.ajax({
    url: "https:raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json",
    dataType: "JSON"
  }).done(function(json) {
    var data_array = [
      ["Date", "GDP"]
    ];
    $.each(json.data, function() {
      var data_item = [this[0], this[1]];
      data_array.push(data_item);

    });
    var options = {
      title: "U.S. Gross Domestic Product, billions of dollars (USD)",
      subtitle:"in billions of dollars (USD)",
      interpolateNulls: true,
      legend: 'none',
      
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'GDP',
          format: 'short'
        }
      };
    var tableData = google.visualization.arrayToDataTable(data_array);
    var areachart = new google.visualization.AreaChart(
      document.getElementById('chart'));
    areachart.draw(tableData,options);
  });

}