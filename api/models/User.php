<?php
require_once('config/database.php');

class User
{

  private $objDB;
  private $conn;

  private $id_user;
  private $name;
  private $email;
  private $password;

  public function __construct()
  {
    $this->objDB = new DBConnect();
    $this->conn = $this->objDB->connect();
  }

  public function getIDUser()
  {
    return $this->id_user;
  }

  public function setIDUser($id_user)
  {
    $this->id_user = $id_user;
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


  public function getUser($id_user)
  {
    $query = "SELECT * FROM users WHERE id_user = :id_user
                JOIN registrations ON user.id_user = registrations.id_user
                JOIN events ON registrations.id_event = events.id_event";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':id_user', $id_user);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function postUserCreate()
  {
    $query = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':password', $this->password);
    $success = $stmt->execute();

    return $success ? true : false;
  }

  public function putUserEdit()
  {
    $query = "UPDATE users SET name = :name, email = :email, password = :password WHERE id_user = :id_user";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':id_user', $this->id_user);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':password', $this->password);
    $success = $stmt->execute();

    return $success ? true : false;
  }
}
