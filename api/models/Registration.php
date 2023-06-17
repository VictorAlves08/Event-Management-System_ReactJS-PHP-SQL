<?php
require_once('config/database.php');

class Registration
{
    private $objDB;
    private $conn;

    private $id_user;
    private $id_event;
    private $payment_status;
    private $type_user;

    public function __construct()
    {
        $this->objDB = new DBConnect();
        $this->conn = $this->objDB->connect();
    }

    public function getIDUser()
    {
        return $this->id_user;
    }

    public function setIDuser($id_user)
    {
        $this->id_user = $id_user;
    }

    public function getIDEvent()
    {
        return $this->id_event;
    }

    public function setIDEvent($id_event)
    {
        $this->id_event = $id_event;
    }

    public function getPaymentStatus()
    {
        return $this->payment_status;
    }

    public function setPaymentStatus($payment_status)
    {
        $this->payment_status = $payment_status;
    }

    public function getTypeUser()
    {
        return $this->type_user;
    }

    public function setTypeUser($type_user)
    {
        $this->type_user = $type_user;
    }

    public function unsubscribeUserEvent()
    {
        $query_registration = "DELETE FROM registrations WHERE fk_id_event = :id_event AND fk_id_user = :id_user";
        $stmt_registration = $this->conn->prepare($query_registration);
        $stmt_registration->bindParam(":id_event", $this->id_event);
        $stmt_registration->bindParam(":id_user", $this->id_user);
        $registrationSuccess = $stmt_registration->execute();

        return $registrationSuccess ? true : false;
    }

    public function subscribeUserEvent()
    {
        $query_registration = "INSERT INTO registrations (fk_id_event, fk_id_user, type_user) VALUES (:id_event, :id_user, :type_user)";
        $stmt_registration = $this->conn->prepare($query_registration);
        $stmt_registration->bindParam(":id_event", $this->id_event);
        $stmt_registration->bindParam(":id_user", $this->id_user);
        $stmt_registration->bindParam(":type_user", $this->type_user);
        $registrationSuccess = $stmt_registration->execute();

        return $registrationSuccess ? true : false;
    }
}
