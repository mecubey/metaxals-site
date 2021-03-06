<?php
$command = escapeshellcmd('python3 /data/www/pysrc/plot_graph.py');
$test = shell_exec($command);

echo $test;
?>
