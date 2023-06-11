<?php
// Importar controladores
require_once 'controllers/UserController.php';

// Definir rotas
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'createUser') {
  $userController = new UserController();
//   $userController->create();
}

// Outras rotas...
