<?php
	function get_new_password($password){
		$slt = '$2$28$2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
		$newpar = md5($password);
		return crypt($newpar, $slt);
	}

	
	function get_validity($password, $anotherone){
		$slt = '$2$28$2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';
		$newpar = md5($password);
		return (crypt($newpar, $slt)==$anotherone);
	}