<?php
$startx = $_COOKIE["x-start"];
$endx = $_COOKIE["x-end"];
$starty = $_COOKIE["y-start"];
$endy = $_COOKIE["y-end"];
$function_plot = $_COOKIE["plot-function"];
$ticks = $_COOKIE["x-ticks"];

$command = escapeshellcmd('python3 /data/www/pysrc/plot_graph.py' . " '$startx'" . " '$endx'" . " '$starty'" . " '$endy'" . " '$ticks'" . " '$function_plot'");
$test = shell_exec($command);

echo $test;
?>
