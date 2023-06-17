<?php
require_once('models/Event.php');

class EventController
{
    private $event;

    public function __construct()
    {
        $this->event = new Event();
    }

    public function allEvents()
    {
        echo json_encode($this->event->getAllEvents());
    }

    public function getEvent($id_event)
    {
        echo json_encode($this->event->getEvent($id_event));
    }

    public function createEvent()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->event->setCategory($data['type']);
        $this->event->setTitle($data['title']);
        $this->event->setDescription($data['description']);
        $this->event->setDateTime($data['dateTime']);
        $this->event->setLocation($data['location']);
        $this->event->setPrice($data['price']);
        $this->event->setImageUrl($data['image_url']);
        $this->event->setIDUser($data['id_user']);

        $result = $this->event->postCreateEvent();

        if ($result) {
            http_response_code(201);
            echo json_encode(array('message' => 'Evento criado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao criar o evento'));
        }
    }

    public function deleteEvent()
    {
        $requestBody = file_get_contents('php://input');
        $requestData = json_decode($requestBody, true);

        $eventId = $requestData['id_event'];
        $result = $this->event->deleteEvent($eventId);

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Evento deletado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao deletar o evento'));
        }
    }

    public function updateEvent()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->event->setCategory($data['type']);
        $this->event->setTitle($data['title']);
        $this->event->setDescription($data['description']);
        $this->event->setDateTime($data['dateTime']);
        $this->event->setLocation($data['location']);
        $this->event->setPrice($data['price']);
        $this->event->setImageUrl($data['image_url']);

        $eventId = $data['id_event'];
        $result = $this->event->putUpdateEvent($eventId);

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Evento atualizado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao atualizar o evento'));
        }
    }
}
