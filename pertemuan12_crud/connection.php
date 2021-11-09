<?php
    //Koneksi Database
	$server = "localhost";
	$user = "root";
	$pass = "root";
	$database = "db_pertemuan12";

	$koneksi = mysqli_connect($server, $user, $pass, $database)or die(mysqli_error($koneksi));
?>