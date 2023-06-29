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
    // Verificar se existem registros nas tabelas registrations e events
    $query = "SELECT COUNT(*) as countRegistrations FROM registrations WHERE fk_id_user = :id_user";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':id_user', $id_user);
    $stmt->execute();
    $registrationsCount = $stmt->fetch(PDO::FETCH_ASSOC)['countRegistrations'];

    $query = "SELECT COUNT(*) as countEvents FROM events JOIN registrations ON events.id_event = registrations.fk_id_event WHERE registrations.fk_id_user = :id_user";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':id_user', $id_user);
    $stmt->execute();
    $eventsCount = $stmt->fetch(PDO::FETCH_ASSOC)['countEvents'];

    // Verificar se existem registros nas tabelas registrations e events
    if ($registrationsCount == 0 && $eventsCount == 0) {
      $query = "SELECT id_user, name, email, password FROM users WHERE id_user = :id_user";
      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(':id_user', $id_user);
      $stmt->execute();

      $result = $stmt->fetch(PDO::FETCH_ASSOC);

      $user = array(
        "id_user" => $result['id_user'],
        "name" => $result['name'],
        "email" => $result['email'],
        "password" => $result['password'],
        "eventsParticipant" => array(),
        "eventsOrganizer" => array()
      );
    } else {
      // Consulta original
      $query = "SELECT users.id_user, users.name, users.email, users.password,
            registrations.id_registration, registrations.payment_status,
            events.id_event, events.title, events.description,
            events.dateTime, events.location,
            events.price, events.image_url, registrations.type_user
            FROM users
            JOIN registrations ON users.id_user = registrations.fk_id_user
            JOIN events ON registrations.fk_id_event = events.id_event
            WHERE users.id_user = :id_user";
      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(':id_user', $id_user);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $user = array(
        "id_user" => $result[0]['id_user'],
        "name" => $result[0]['name'],
        "email" => $result[0]['email'],
        "password" => $result[0]['password'],
        "eventsParticipant" => array(),
        "eventsOrganizer" => array()
      );

      foreach ($result as $row) {
        $event = array(
          "id_event" => $row['id_event'],
          "title" => $row['title'],
          "description" => $row['description'],
          "dateTime" => $row['dateTime'],
          "location" => $row['location'],
          "price" => $row['price'],
          "image_url" => $row['image_url']
        );

        if ($row['type_user'] === "organizer") {
          $user['eventsOrganizer'][] = $event;
        } else {
          $user['eventsParticipant'][] = $event;
        }
      }
    }

    return $user;
  }


  public function postUserCreate()
  {
    $query = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(':name', $this->name);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':password', $this->password);
    $success = $stmt->execute();

    return $success ? $this->conn->lastInsertId() : false;
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
