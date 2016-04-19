<?php
	require("crt.php");
	$db_link = @mysql_connect("localhost", "root", "");
	mysql_select_db("lemmas", $db_link);
	$pass = get_new_password($_POST["pass"]);
	$query = "SELECT Login FROM `Users` WHERE `Login` = '".$_POST["login"]."' AND `Pass` = '".$pass."'";
	$result = mysql_query($query);
	$row = mysql_fetch_array($result);
	
	if(strlen($row[0]) != 0){
		session_start();
		$_SESSION["pointer"] = "LoggedIN";
		$_SESSION["user"] = $_POST["login"];
		$found = "SELECT * FROM `Lemmas` WHERE `login` = '".$_SESSION["user"]."'";
		$fdata = mysql_query($found);
		$result1 = "";
		while($row = mysql_fetch_array($fdata))    {
			$result1.= $row['ident']."razdelitelmezhduidentilemma".$row['lemma']."razdelitelmezhduidentilemma".$row['Time']."obchiyrazdelitel";
		}

		$result1.= $_SESSION["user"];
		echo $result1;
	}