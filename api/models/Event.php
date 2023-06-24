<?php
require_once('config/database.php');

class Event
{
    private $objDB;
    private $conn;

    private $title;
    private $description;
    private $dateTime;
    private $location;
    private $category;
    private $price;
    private $image_url;
    private $id_user;

    public function __construct()
    {
        $this->objDB = new DBConnect();
        $this->conn = $this->objDB->connect();
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getDateTime()
    {
        return $this->dateTime;
    }

    public function setDateTime($dateTime)
    {
        $this->dateTime = $dateTime;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function setCategory($category)
    {
        $this->category = $category;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getImageUrl()
    {
        return $this->image_url;
    }

    public function setImageUrl($image_url)
    {
        $this->image_url = $image_url;
    }

    public function getIDUser()
    {
        return $this->id_user;
    }

    public function setIDUser($id_user)
    {
        $this->id_user = $id_user;
    }

    public function getAllEvents()
    {
        $eventsQuery = "SELECT id_event, title, description, dateTime, location, price, image_url, type FROM events 
                        JOIN categories ON events.fk_id_category = categories.id_category";
        $eventsStmt = $this->conn->prepare($eventsQuery);
        $eventsStmt->execute();
        $events = $eventsStmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($events as &$event) {
            $usersQuery = "SELECT users.id_user, users.name, users.email, registrations.id_registration, registrations.type_user, registrations.payment_status 
                           FROM users
                           JOIN registrations ON users.id_user = registrations.fk_id_user
                           WHERE registrations.fk_id_event = :event_id";
            $usersStmt = $this->conn->prepare($usersQuery);
            $usersStmt->bindParam(':event_id', $event['id_event']);
            $usersStmt->execute();
            $users = $usersStmt->fetchAll(PDO::FETCH_ASSOC);
            $event['user'] = $users;

            $reviewsQuery = "SELECT id_review, score, comment, fk_id_user as id_user
                             FROM reviews
                             WHERE fk_id_event = :event_id";
            $reviewsStmt = $this->conn->prepare($reviewsQuery);
            $reviewsStmt->bindParam(':event_id', $event['id_event']);
            $reviewsStmt->execute();
            $reviews = $reviewsStmt->fetchAll(PDO::FETCH_ASSOC);
            $event['reviews'] = $reviews;
        }

        return $events;
    }


    public function getEvent($id_event)
    {
        $eventQuery = "SELECT id_event, title, description, dateTime, location, price, image_url, type FROM events 
                       JOIN categories ON events.fk_id_category = categories.id_category
                       WHERE events.id_event = :event_id";
        $eventStmt = $this->conn->prepare($eventQuery);
        $eventStmt->bindParam(':event_id', $id_event);
        $eventStmt->execute();
        $event = $eventStmt->fetch(PDO::FETCH_ASSOC);

        if ($event) {
            $usersQuery = "SELECT users.id_user, users.name, users.email, users.password, registrations.id_registration, registrations.type_user, registrations.payment_status 
                           FROM users
                           JOIN registrations ON users.id_user = registrations.fk_id_user
                           WHERE registrations.fk_id_event = :event_id";
            $usersStmt = $this->conn->prepare($usersQuery);
            $usersStmt->bindParam(':event_id', $id_event);
            $usersStmt->execute();
            $users = $usersStmt->fetchAll(PDO::FETCH_ASSOC);
            $event['user'] = $users;

            $reviewsQuery = "SELECT id_review, score, comment, fk_id_user as id_user
                             FROM reviews
                             WHERE fk_id_event = :event_id";
            $reviewsStmt = $this->conn->prepare($reviewsQuery);
            $reviewsStmt->bindParam(':event_id', $id_event);
            $reviewsStmt->execute();
            $reviews = $reviewsStmt->fetchAll(PDO::FETCH_ASSOC);
            $event['reviews'] = $reviews;
        }

        return $event;
    }

    public function postCreateEvent()
    {
        $query_category = "INSERT INTO categories (type) VALUES (:type)";
        $stmt_category = $this->conn->prepare($query_category);
        $stmt_category->bindParam(':type', $this->category);
        $categorySuccess = $stmt_category->execute();

        $fk_id_category = $this->conn->lastInsertId();
        $query_event = "INSERT INTO events (title, description, dateTime, location, fk_id_category, price, image_url, fk_id_user) 
        VALUES (:title, :description, :dateTime, :location, :fk_id_category, :price, :image_url, :fk_id_user)";
        $stmt = $this->conn->prepare($query_event);
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':dateTime', $this->dateTime);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':fk_id_category', $fk_id_category);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':image_url', $this->image_url);
        $stmt->bindParam(':fk_id_user', $this->id_user);
        $eventSuccess = $stmt->execute();

        return $categorySuccess && $eventSuccess ? true : false;
    }

    public function deleteEvent($id_event)
    {
        $query_category_id = "SELECT fk_id_category FROM events WHERE id_event = :id_event";
        $stmt_category_id = $this->conn->prepare($query_category_id);
        $stmt_category_id->bindParam(":id_event", $id_event);
        $stmt_category_id->execute();
        $category_id = $stmt_category_id->fetchColumn();

        $query_event = "DELETE FROM events WHERE id_event = :id_event";
        $stmt_event = $this->conn->prepare($query_event);
        $stmt_event->bindParam(':id_event', $id_event);
        $eventSuccess = $stmt_event->execute();

        $query_category = "DELETE FROM categories WHERE id_category = :id_category";
        $stmt_category = $this->conn->prepare($query_category);
        $stmt_category->bindParam(":id_category", $category_id);
        $categorySuccess = $stmt_category->execute();

        $query_review = "DELETE FROM reviews WHERE fk_id_event = :id_event";
        $stmt_review = $this->conn->prepare($query_review);
        $stmt_review->bindParam(":id_event", $id_event);
        $reviewSuccess = $stmt_review->execute();

        $query_registration = "DELETE FROM registrations WHERE fk_id_event = :id_event";
        $stmt_registration = $this->conn->prepare($query_registration);
        $stmt_registration->bindParam(":id_event", $id_event);
        $registrationSuccess = $stmt_registration->execute();

        return $registrationSuccess && $eventSuccess && $categorySuccess && $reviewSuccess ? true : false;
    }

    public function putUpdateEvent($id_event)
    {
        $query_category_id = "SELECT fk_id_category FROM events WHERE id_event = :id_event";
        $stmt_category_id = $this->conn->prepare($query_category_id);
        $stmt_category_id->bindParam(":id_event", $id_event);
        $stmt_category_id->execute();
        $category_id = $stmt_category_id->fetchColumn();

        $query_category = "UPDATE categories SET type = :type WHERE id_category = :id_category";
        $stmt_category = $this->conn->prepare($query_category);
        $stmt_category->bindParam(':type', $this->category);
        $stmt_category->bindParam(':id_category', $category_id);
        $categorySuccess = $stmt_category->execute();

        $query_event = "UPDATE events
         SET title = :title, description = :description, dateTime = :dateTime, location = :location, price = :price, image_url = :image_url 
         WHERE id_event = :id_event";
        $stmt_event = $this->conn->prepare($query_event);
        $stmt_event->bindParam(':title', $this->title);
        $stmt_event->bindParam(':description', $this->description);
        $stmt_event->bindParam(':dateTime', $this->dateTime);
        $stmt_event->bindParam(':location', $this->location);
        $stmt_event->bindParam(':price', $this->price);
        $stmt_event->bindParam(':image_url', $this->image_url);
        $stmt_event->bindParam(":id_event", $id_event);
        $eventSuccess = $stmt_event->execute();

        return $categorySuccess && $eventSuccess ? true : false;
    }
}
