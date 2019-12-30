<?php
  session_start();
  if (!isset($_SESSION['voteCounter'])){
    $_SESSION['voteCounter'] = 0;
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vote</title>
</head>
<body>
<?php if ( $_SESSION['voteCounter'] == 0 ) : ?>
  <form action="index.php" method="post" onSubmit="window.location.reload()">
    <?php
      $json = file_get_contents('./rezult.json', true);
      $json_data = json_decode($json, true);
      foreach ($json_data as $key => $value) {
        echo '<label for="'.$key .'"><input id="'.$key.'" type="radio" name="radioButtons" value="'.$key.'">'.$key.'</label>';
      }
    ?>
    <input type="submit" value="Vote" name="vote">
  </form>
  <?php
    if ( isset($_POST['vote']) ) {
      $json = file_get_contents('./rezult.json', true);
      $json_data = json_decode($json, true);
      foreach ($json_data as $key => $value) {
        if ($key == $_POST['radioButtons']) {
          $json_data[$key] = $value + 1;
        }
      }
      file_put_contents('./rezult.json',json_encode($json_data)); // Перекодировать в формат и записать в файл.
      $_SESSION['voteCounter'] = 1;
    }
  ?>

<?php else:?>
  <?php include 'pieChart.php'; ?>
<?php endif;?>
</body>
</html>