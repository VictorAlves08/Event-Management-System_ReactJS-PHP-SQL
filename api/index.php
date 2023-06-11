<?php
// Configuração inicial
require_once 'config/database.php';

// Tratamento das requisições
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestAction = $_GET['action'];

// Definir as rotas e chamar os controladores correspondentes
// Exemplo simplificado:
if ($requestMethod === 'POST' && $requestAction === 'createUser') {
  $userController = new UserController();
//   $userController->create();
}

// Outras rotas...
