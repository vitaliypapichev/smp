<?php
	session_start();
	
	if(isset($_SESSION["pointer"]))   {
		$db_link = @mysql_connect("localhost", "root", "");
		mysql_select_db("lemmas", $db_link);
		$query = "DELETE FROM `Lemmas` WHERE `login` = '".$_POST["login"]."' AND `ident` = '".$_POST["lemma"]."'";
		mysql_query($query);
	}