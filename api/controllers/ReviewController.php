<?php
require_once('models/Review.php');

class ReviewController
{
    private $review;

    public function __construct()
    {
        $this->review = new Review();
    }

    public function createReview()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->review->setIDUser($data['id_user']);
        $this->review->setIDEvent($data['id_event']);
        $this->review->setScore($data['score']);
        $this->review->setComment($data['comment']);

        $result = $this->review->createReview();

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Review criado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao criar review'));
        }
    }

    public function editReview()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->review->setIDReview($data['id_review']);
        $this->review->setIDUser($data['id_user']);
        $this->review->setIDEvent($data['id_event']);
        $this->review->setScore($data['$score']);
        $this->review->setComment($data['$comment']);

        $result = $this->review->editReview();

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Review editado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao editar review'));
        }
    }

    public function deleteReview()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $this->review->setIDReview($data['id_review']);

        $result = $this->review->deleteReview();

        if ($result) {
            http_response_code(200);
            echo json_encode(array('message' => 'Review deletado com sucesso'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Erro ao deletar review'));
        }
    }
}
