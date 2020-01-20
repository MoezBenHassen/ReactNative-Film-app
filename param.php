<?php
class config
{
	public function connexion()
	{
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "app";
		$conn = new PDO(
			"mysql:host=$servername;dbname=$dbname;charset=utf8",
			$username,
			$password,
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
		);
		return $conn;
	}
}
