<?php
$db_link = @mysql_connect("localhost", "root", "");
mysql_select_db("lemmas", $db_link);
$query = "INSERT INTO `lemmas`.`Users` (`spec_id`, `Name`, `Login`, `Pass`, `Email`) VALUES (0,'". $_POST['form_name']."', '".$_POST['form_login']."','". $_POST['pass_pass']."','". $_POST['pass_mail']."');";
mysql_query($query);
$lg = $_POST['form_login'];
mysql_query("CREATE TABLE $lg (Lemma TEXT)");
?>