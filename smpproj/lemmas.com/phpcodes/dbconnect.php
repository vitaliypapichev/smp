<?php
    $db_link = @mysql_connect("localhost", "root", "");
    mysql_select_db("lemmas", $db_link);