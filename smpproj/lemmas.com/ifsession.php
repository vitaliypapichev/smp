<?php 
session_start();
if(isset($_SESSION["pointer"]))
{
    $db_link = @mysql_connect("localhost", "root", "");
    mysql_select_db("lemmas", $db_link);
    $found = "SELECT lemma FROM `Lemmas` WHERE `login` = '".$_SESSION["user"]."'";
    $fdata = mysql_query($found);
    $row = mysql_fetch_array($fdata);
    echo $row[0].$_SESSION["user"];
}
