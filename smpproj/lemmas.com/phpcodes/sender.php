<?php
	require("crt.php");
    include 'dbconnect.php';
	$cpass = get_new_password($_POST['pass_pass']);
	$query = "INSERT INTO `lemmas`.`Users` (`spec_id`, `Name`, `Login`, `Pass`, `Email`) VALUES (0,'". $_POST['form_name']."', '".$_POST['form_login']."','".$cpass."','". $_POST['pass_mail']."');";
	mysql_query($query);