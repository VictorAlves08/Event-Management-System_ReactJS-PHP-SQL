<?php

class Registration {
    private $user;
    private $event;
    private $paymentStatus;

    public function __construct($user, $event, $paymentStatus) {
        $this->user = $user;
        $this->event = $event;
        $this->paymentStatus = $paymentStatus;
    }

    public function getUser() {
        return $this->user;
    }

    public function getEvent() {
        return $this->event;
    }

    public function setPaymentStatus($paymentStatus){
        $this->paymentStatus = $paymentStatus;
    }

    public function getPaymentStatus() {
        return $this->paymentStatus;
    }
}
