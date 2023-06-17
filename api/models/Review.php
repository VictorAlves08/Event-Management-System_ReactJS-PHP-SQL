<?php
require_once('config/database.php');

class Review
{
    private $objDB;
    private $conn;

    private $id_review;
    private $id_user;
    private $id_event;
    private $score;
    private $comment;

    public function __construct()
    {
        $this->objDB = new DBConnect();
        $this->conn = $this->objDB->connect();
    }

    public function getIDReview()
    {
        return $this->id_review;
    }

    public function setIDReview($id_review)
    {
        $this->id_review = $id_review;
    }

    public function getIDUser()
    {
        return $this->id_user;
    }

    public function setIDUser($id_user)
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

    public function getScore()
    {
        return $this->score;
    }

    public function setScore($score)
    {
        $this->score = $score;
    }

    public function getComment()
    {
        return $this->comment;
    }

    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    public function createReview()
    {
        $query = "INSERT INTO reviews (fk_id_user, fk_id_event, score, comment) VALUES (:id_user, :id_event, :score, :comment)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id_user', $this->id_user);
        $stmt->bindParam(':id_event', $this->id_event);
        $stmt->bindParam(':score', $this->score);
        $stmt->bindParam(':comment', $this->comment);
        $success = $stmt->execute();

        return $success ? true : false;
    }

    public function editReview()
    {
        $query = "UPDATE reviews SET fk_id_user = :id_user, fk_id_event = :id_event, score = :score, comment = :comment WHERE id_review = :id_review";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id_user', $this->id_user);
        $stmt->bindParam(':id_event', $this->id_event);
        $stmt->bindParam(':score', $this->score);
        $stmt->bindParam(':comment', $this->comment);
        $stmt->bindParam(':id_review', $this->id_review);
        $success = $stmt->execute();

        return $success ? true : false;
    }

    public function deleteReview()
    {
        $query = "DELETE FROM reviews WHERE id_review = :id_review";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id_review', $this->id_review);
        $success = $stmt->execute();

        return $success ? true : false;
    }
}
