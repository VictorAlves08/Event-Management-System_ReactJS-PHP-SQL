<?php
require_once('models/Registration.php');

class RegistrationController
{
    private $registration;

    public function __construct()
    {
        $this->registration = new Registration();
    }

    public function unsubscribeUserEvent()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->registration->setIDUser($data['id_user']);
        $this->registration->setIDEvent($data['id_event']);

        $result = $this->registration->unsubscribeUserEvent();

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Inscrição cancelada com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao cancelar a inscrição'));
        }
    }

    public function subscribeUserEvent()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->registration->setIDUser($data['id_user']);
        $this->registration->setIDEvent($data['id_event']);
        $this->registration->setTypeUser($data['type_user']);

        $result = $this->registration->subscribeUserEvent();

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Inscrição realizada com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao realizar a inscrição'));
        }
    }
}
