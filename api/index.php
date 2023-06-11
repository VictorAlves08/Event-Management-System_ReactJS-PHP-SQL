<?php
$path_url = '/Event-Management-System_ReactJS-PHP-SQL/api/index.php';

// require_once 'controllers/AuthController.php';
require_once('controllers/EventController.php');
// require_once 'controllers/RegistrationController.php';
// require_once 'controllers/ReviewController.php';
// require_once 'controllers/UserController.php';

// $authController = new AuthController();
$eventController = new EventController();
// $registrationController = new RegistrationController();
// $reviewController = new ReviewController();
// $userController = new UserController();

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestAction = isset($_GET['action']);
$requestUri = $_SERVER['REQUEST_URI'];
$uriParts = explode('?', $requestUri);
$uri = $uriParts[0];

switch ($uri) {
    // case '/login':
    //   $authController->login($requestMethod, $requestAction);
    //   break;
    // case '/logout':
    //   $authController->logout($requestMethod, $requestAction);
    //   break;
    // case '/register':
    //   $authController->register($requestMethod, $requestAction);
    //   break;
  case $path_url . '/allEvents':
    $eventController->allEvents();
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
  default:
    echo "Not found: 404";
}
