<?php
  session_start(); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <?php 
    $sum = 0;
    for ($i = -1000; $i <= 1000; $i++) {
      $sum += $i;
    }
  ?>
  <span>Посчитать сумму чисел от -1000 до 1000: <?php echo $sum?> </span>
  <br><hr><br>
  <?php
    $sum = 0;
    for ($i = -1000; $i <= 1000; $i++) {
      if ($i % 2 === 0 || $i % 3 === 0 || $i % 3 === 0)
      $sum += $i;
    }
  ?>
  <span>Посчитать сумму чисел от -1000 до 1000, суммируя только числа которые заканчиваются на 2,3, и 7: </span>
  <?php echo $sum?>
  <br><hr><br>
  <form name="fileForm" action="index.php" enctype="multipart/form-data" method="post">
    <input type="file" name="path" title="Выберите файл"/>
    <input type="submit" name="uploadBtn" /> <br>
  </form>

<?php
  if (isset($_POST['uploadBtn'])) {
    $file = "files/".$_FILES['path']['name'];
    move_uploaded_file($_FILES['path']['tmp_name'], $file);
    if(isset($_FILES['path']['name']))
    {
      echo "Загруженный файл: ".$_FILES['path']['name']."</br>";
    }
  }
  $directory = "./files";
  $file_parts = array();
  $dir_handle = @opendir($directory) or die("Ошибка при открытии папки");
  while ($file = readdir($dir_handle))
    {
      if($file == "." || $file == "..") continue;
      $file_parts = explode(".",$file);
      $ext = strtolower(array_pop($file_parts));
      $file_name = $directory.'/'.$file;
      // echo $file;
      if($ext == 'png' || $ext == 'jpg' || $ext == 'jpeg')
      {
        echo "<a href='$file_name' download>
                <img src='$file_name'/>
              </a>
              <span>$file</span>";
      }
      else echo "<a href='$file_name' download><span>$file</span></a>";
      $fileSize = filesize_formatted($file_name);
      echo "<span>$fileSize</span></br>";
    }
  closedir($dir_handle);

  function filesize_formatted($path)
  {
    $size = filesize($path);
    $units = array( 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
    $power = $size > 0 ? floor(log($size, 1024)) : 0;
    return number_format($size / pow(1024, $power), 2, '.', ',') . ' ' . $units[$power];
  }
?>

<form action="index.php" method="post">
  <p>X lenth<input type="number" name="start" /></p>
  <p>Y lenth <input type="number" name="end" /></p>
  <p> <input type="submit" name="uploadNumbersChess" /></p>
</form>

<?php 


if ( isset($_POST['uploadNumbersChess']) ) {
  // if ( $_POST && $_POST['start'] ) {
  //   
  // }
  // // else {
  // //   $x = 0;
  // // }
  // if ( $_POST ) {
  //   
  // }
  // else {
  //   $y = 0;
  // }
  $x = $_POST['start'];
  $y = $_POST['end'];
  if ( $x == 0 || $y == 0 ) {
    echo 'no';
  }
  elseif ( $x > 1000 || $y > 1000 ) {
    echo 'nono';
  }
  else {
    echo '<div style="width: max-content; height: auto; border: 1px solid;">';
    for ($rowCounter=0; $rowCounter<$y; $rowCounter++){
        echo '<div style="display: inline-flex; flex-direction: column;">';
        for ($columnCounter=0; $columnCounter<$x; $columnCounter++){
          $rCounter  = $rowCounter%2;
          $cCounter = $columnCounter%2;
          if (($rCounter%2 !== 0 && $cCounter%2 === 0) || ($rCounter%2 === 0 && $cCounter%2 !== 0)){
            echo '<div style= "background-color: black; width:10px; height: 10px"></div> ';
          }
          else{ 
            echo '<div style= "background-color: white; width:10px; height: 10px"></div> ';
          }
        }
        echo '</div>';
    }
    echo '</div>';
  }
}
?>

<form action="index.php" method="post">
  <p>X lenth<input type="number" name="numberLenth" /></p>
  <p><input type="submit" name="uploadNumberLenth" /></p>
</form>
<p>Найти сумму цифр введённого числа.</p>
<?php 
  if ( isset($_POST['uploadNumberLenth']) ) {
    $numberX = $_POST['numberLenth'];
    $sum = 0;
    echo $numberX;
    for ($i =0; $i<=strlen($numberX);$i++) {
      $n1=$numberX%10;
      $sum += $n1;
      $numberX=$numberX/10;
    }
    echo $sum;
  }
?>
<hr><br>
<p>Сгенерировать массив рандомных целых чисел от 1 до 10, длинна массива 100. Убрать из массива повторы, отсортировать, ревертнуть и умножить каждый элемент на два.</p>
<?php
  $array = array();
  $arrayLenth = 100;
  for ($i = 0; $i < $arrayLenth; $i++) {
      $array[]=rand(1,10);
  }
  $array = array_unique($array);
  asort($array);
  $array = array_reverse($array);
  foreach( $array as &$val ){ $val *= 2; }
  foreach ( $array as $newArray ) {
    echo $newArray ." ";
  }
?>
<hr><br>
<p>На странице должен стоять счетчик подсчета посещений страницы через сессии пхп.</p>
<?php
  if (!isset($_SESSION['sessionCounts'])){
    $_SESSION['sessionCounts'] = 0;
  } else {
    $_SESSION['sessionCounts']++;
  }
  echo $_SESSION['sessionCounts'];
?>

<hr><br>
<p>Подсчитать количество строк, букв и пробелов в введеном тексте.</p>
<form action="index.php" method="post">
  <p>X lenth <textarea  name="textarea"></textarea></p>
  <p><input type="submit" name="uploadTeaxtarea" /></p>
</form>

<?php
  if ( isset($_POST['uploadTeaxtarea']) ) {
    $textareaValue = $_POST['textarea'];
    // echo $_POST['textarea'];
    // $qwe = count(explode(nl2br($textareaValue, "\n"))); 
    $stringCount = substr_count($textareaValue,'\n');
    $spaceSymbolthCount = substr_count($textareaValue,' ');
    echo "Пробелы:".$spaceSymbolthCount."<br/>";
    echo "Строки:".$stringCount."<br/>";
    echo "Знаки:".strlen($textareaValue)."<br/>";
  } 
?>
</body>