<?php
require_once('models/User.php');

class UserController
{
  private $user;

  public function __construct()
  {
    $this->user = new User();
  }

  public function getUser($id_user)
  {
    echo json_encode($this->user->getUser($id_user));
  }

  public function postUserCreate()
  {
    $data = json_decode(file_get_contents('php://input'), true);

    $this->user->setUserName($data['name']);
    $this->user->setUserEmail($data['email']);
    $this->user->setUserPassword($data['password']);

    $result = $this->user->postUserCreate();

    if ($result) {
      http_response_code(200);
      echo json_encode($result);
    } else {
      http_response_code(500);
      echo json_encode(array('message' => 'Erro ao criar o usuario'));
    }
  }

  public function putUserEdit()
  {
    $data = json_decode(file_get_contents('php://input'), true);

    $this->user->setIDUser($data['id_user']);
    $this->user->setUserName($data['name']);
    $this->user->setUserEmail($data['email']);
    $this->user->setUserPassword($data['password']);

    $result = $this->user->putUserEdit();

    if ($result) {
      http_response_code(200);
      echo json_encode(array('message' => 'Usuario editado com sucesso'));
    } else {
      http_response_code(500);
      echo json_encode(array('message' => 'Erro ao editar o usuario'));
    }
  }
}
