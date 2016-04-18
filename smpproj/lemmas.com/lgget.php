<?php
$db_link = @mysql_connect("localhost", "root", "");
mysql_select_db("lemmas", $db_link);
$query = "SELECT 'Login' FROM `Users` WHERE `Login` = '".$_GET["form_login"]."'";
$result = mysql_query($query);
$row = mysql_fetch_array($result);
echo $row[0];

