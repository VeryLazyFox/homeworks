<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    function drawChart() {
      let data = google.visualization.arrayToDataTable([
      ['animal','count'],
      <?php 
        $json = file_get_contents('./rezult.json', true);
        $json_data = json_decode($json, true);
        foreach ($json_data as $key => $value) {
          echo "['".$key."',".$value."],";
        }
      ?> 
      ]);
      let options = {
        pieSliceTextStyle: {
          color: 'black',
        },
        legend: 'none'
      };
      let chart = new google.visualization.PieChart(document.getElementById("piechart"));
      chart.draw(data,options);
    }
  </script>
</head>
<body>
  <h1>Voting results</h1>
  <div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>