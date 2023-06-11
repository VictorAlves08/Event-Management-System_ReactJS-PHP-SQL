<?php

class Auth {
    private $user;
    private $loggedIn;

    public function __construct($user, $loggedIn) {
        $this->user = $user;
        $this->loggedIn = $loggedIn;
    }

    public function getUser() {
        return $this->user;
    }

    public function getLoggedIn() {
        return $this->loggedIn;
    }

    public function setLoggedIn($loggedIn) {
        $this->loggedIn = $loggedIn;    
    }
}
