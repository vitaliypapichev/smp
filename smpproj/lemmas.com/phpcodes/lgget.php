<?php
    include 'dbconnect.php';
	$query = "SELECT 'Login' FROM `Users` WHERE `Login` = '".$_POST["form_login"]."'";
	$result = mysql_query($query);
	$row = mysql_fetch_array($result);
	echo $row[0];