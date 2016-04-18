<?php
require("crt.php");
$db_link = @mysql_connect("localhost", "root", "");
mysql_select_db("lemmas", $db_link);
$pass = get_new_password($_POST["pass"]);
$query = "SELECT Login FROM `Users` WHERE `Login` = '".$_POST["login"]."' AND `Pass` = '".$pass."'";
$result = mysql_query($query);
$row = mysql_fetch_array($result);
if(strlen($row[0]) != 0)
{
    session_start();
    $_SESSION["pointer"] = "LoggedIN";
    $_SESSION["user"] = $_POST["login"];
    $found = "SELECT lemma FROM `Lemmas` WHERE `login` ='".$_POST["login"]."'";
    $fdata = mysql_query($found);
    $rowe = mysql_fetch_array($fdata);
    echo $_POST["login"];
}