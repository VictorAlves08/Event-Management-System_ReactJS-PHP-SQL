<?php

class Review {
    private $user;
    private $event;
    private $score;
    private $comment;

    public function __construct($user, $event, $score, $comment) {
        $this->user = $user;
        $this->event = $event;
        $this->score = $score;
        $this->comment = $comment;
    }

    public function getUser() {
        return $this->user;
    }

    public function getEvent() {
        return $this->event;
    }

    public function getScore() {
        return $this->score;
    }

    public function setScore($score) {
        $this->score = $score;
    }

    public function getComment() {
        return $this->comment;
    }

    public function setComment($comment) {
        $this->comment = $comment;
    }

}
