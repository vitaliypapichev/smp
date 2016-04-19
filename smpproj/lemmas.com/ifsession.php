<?php 
	session_start();
	
	if(isset($_SESSION["pointer"])){
		$db_link = @mysql_connect("localhost", "root", "");
		mysql_select_db("lemmas", $db_link);
		$found = "SELECT * FROM `Lemmas` WHERE `login` = '".$_SESSION["user"]."'";
		$fdata = mysql_query($found);
		$result = "";
		while($row = mysql_fetch_array($fdata))    {
			$result.= $row['ident']."razdelitelmezhduidentilemma".$row['lemma']."razdelitelmezhduidentilemma".$row['Time']."obchiyrazdelitel";
		}

		$result.= $_SESSION["user"];
		echo $result;
	}