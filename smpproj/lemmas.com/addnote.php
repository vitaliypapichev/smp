<?php
	session_start();
	
	if(isset($_SESSION["pointer"]))   {
		$db_link = @mysql_connect("localhost", "root", "");
		mysql_select_db("lemmas", $db_link);
		$find = "SELECT 'found' FROM `Lemmas` WHERE `Login` = '".$_POST["login"]."' AND `ident` = '".$_POST["lemma"]."'";
		$result = mysql_query($find);
		$row = mysql_fetch_array($result);
		
		if($row[0]!="found"){
			$query = "INSERT INTO `lemmas`.`Lemmas` (`login` ,`ident` ,`lemma`,`Time`) VALUES ('".$_POST["login"]."', '".$_POST["lemma"]."', '".$_POST["text"]."', '".$_POST["time"]."');";
			mysql_query($query);
		} else    {
			$update = "UPDATE `Lemmas` SET `lemma` = '".$_POST["text"]."' AND `Time` = '".$_POST["time"]."' WHERE `login` = '".$_POST["login"]."' AND `ident` = '".$_POST["lemma"]."'";
			mysql_query($update);
		}

	}