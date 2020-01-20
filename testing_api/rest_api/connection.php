<?php 
		//$conn=mysqli_connect("localhost", "root", "", "PRODUCT_DELATIL")  or die("Connection failed: " . mysqli_connect_error());
		
		class config
{
	public function connexion()
	{
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "PRODUCT_DELATIL";
		$conn = new PDO(
			"mysql:host=$servername;dbname=$dbname;charset=utf8",
			$username,
			$password,
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
		);
		return $conn;
	}
}
?>