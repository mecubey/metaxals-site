<?php
$command = escapeshellcmd('python3 /data/www/pysrc/test.py');
$test = shell_exec($command);

echo $test;
?>
