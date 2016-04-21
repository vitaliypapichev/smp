<?php 
    include 'dbconnect.php';
	session_start();
	
	if(isset($_SESSION["pointer"])){
		$found = "SELECT * FROM `Lemmas` WHERE `login` = '".$_SESSION["user"]."'";
		$fdata = mysql_query($found);
		$result = "";
		while($row = mysql_fetch_array($fdata))    {
			$result.= $row['ident']."razdelitelmezhduidentilemma".$row['lemma']."razdelitelmezhduidentilemma".$row['Time']."obchiyrazdelitel";
		}

		$result.= $_SESSION["user"];
		echo $result;
	}