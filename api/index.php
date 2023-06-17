<?php
$path_url = '/Event-Management-System_ReactJS-PHP-SQL/api/index.php';

require_once('controllers/EventController.php');
require_once 'controllers/RegistrationController.php';
require_once 'controllers/UserController.php';
require_once 'controllers/AuthController.php';
require_once 'controllers/ReviewController.php';

$eventController = new EventController();
$registrationController = new RegistrationController();
$userController = new UserController();
$authController = new AuthController();
$reviewController = new ReviewController();

$requestUri = $_SERVER['REQUEST_URI'];
$uriParts = explode('?', $requestUri);
$uri = $uriParts[0];

switch ($uri) {
    // eventController
  case $path_url . '/allEvents':
    $eventController->allEvents();
    break;
  case $path_url . '/event':
    $eventController->getEvent($_GET['id']);
    break;
  case $path_url . '/createEvent':
    $eventController->createEvent();
    break;
  case $path_url . '/deleteEvent':
    $eventController->deleteEvent();
    break;
  case $path_url . '/updateEvent':
    $eventController->updateEvent();
    break;

    // registrationController
  case $path_url . '/subscribeUserEvent':
    $registrationController->subscribeUserEvent();
    break;
  case $path_url . '/unsubscribeUserEvent':
    $registrationController->unsubscribeUserEvent();
    break;

    // userController
  case $path_url . '/user':
    $userController->getUser($_GET['id']);
    break;
  case $path_url . '/createUser':
    $userController->postUserCreate();
    break;
  case $path_url . '/editUser':
    $userController->putUserEdit();
    break;

    // authController
  case $path_url . '/login':
    $authController->login();
    break;

    // reviewController
  case $path_url . '/createReview':
    $reviewController->createReview();
    break;
  case $path_url . '/editReview':
    $reviewController->editReview();
    break;
  case $path_url . '/deleteReview':
    $reviewController->deleteReview();
    break;

  default:
    echo "Not found: 404";
}
