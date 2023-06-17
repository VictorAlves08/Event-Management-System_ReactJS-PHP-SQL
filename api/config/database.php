<?php
class DBConnect
{
    private $server = 'localhost';
    private $dbname = "eventmanagementdb";
    private $user = 'root';
    private $pass = '';

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->server . ';dbname=' . $this->dbname, $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $error) {
            echo "Database Error: " . $error->getMessage();
        }
    }
}
