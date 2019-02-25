<?
session_start();
$server="localhost";
$login="mysql";
$pass="mysql";
$db="gallery";
$connect = mysqli_connect($server,$login,$pass,$db);
include 'Twig/Autoloader.php';

