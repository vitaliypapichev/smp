<?php
session_start();
if(isset($_SESSION["pointer"]))
{
    echo "closing";
    session_unset();
    session_destroy();
}