<?php
require_once('models/Auth.php');

class AuthController
{
    private $auth;

    public function __construct()
    {
        $this->auth = new Auth();
    }

    public function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $this->auth->setUserEmail($data['email']);
        $this->auth->setUserPassword($data['password']);

        echo json_encode($this->auth->login());
    }
}
