<?php
    include 'dbconnect.php';
	session_start();
	
	if(isset($_SESSION["pointer"]))   {
		$query = "DELETE FROM `Lemmas` WHERE `login` = '".$_POST["login"]."' AND `ident` = '".$_POST["lemma"]."'";
		mysql_query($query);
	}