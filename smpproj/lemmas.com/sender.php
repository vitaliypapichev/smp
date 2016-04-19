<?php
	require("crt.php");
	$db_link = @mysql_connect("localhost", "root", "");
	mysql_select_db("lemmas", $db_link);
	$cpass = get_new_password($_POST['pass_pass']);
	$query = "INSERT INTO `lemmas`.`Users` (`spec_id`, `Name`, `Login`, `Pass`, `Email`) VALUES (0,'". $_POST['form_name']."', '".$_POST['form_login']."','".$cpass."','". $_POST['pass_mail']."');";
	mysql_query($query);