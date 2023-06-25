<?php
require_once('config/database.php');

class Auth
{

    private $objDB;
    private $conn;

    private $name;
    private $email;
    private $password;

    public function __construct()
    {
        $this->objDB = new DBConnect();
        $this->conn = $this->objDB->connect();
    }

    public function getUserName()
    {
        return $this->name;
    }

    public function setUserName($name)
    {
        $this->name = $name;
    }

    public function getUserEmail()
    {
        return $this->email;
    }

    public function setUserEmail($email)
    {
        $this->email = $email;
    }

    public function getUserPassword()
    {
        return $this->password;
    }

    public function setUserPassword($password)
    {
        $this->password = $password;
    }

    public function Login()
    {
        $query = "SELECT * FROM users WHERE email = :email AND password = :password";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
