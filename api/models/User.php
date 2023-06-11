<?php

class User
{
  private $name;
  private $email;
  private $password;
  private $userType;

  public function __construct($name, $email, $password, $userType)
  {
    $this->name = $name;
    $this->email = $email;
    $this->password = $password;
    $this->userType = $userType;
  }

  public function getName()
  {
    return $this->name;
  }

  public function setName($name)
  {
    $this->name = $name;
  }

  public function getEmail()
  {
    return $this->email;
  }

  public function setEmail($email)
  {
    $this->email = $email;
  }

  public function getPassword()
  {
    return $this->password;
  }

  public function setPassword($password)
  {
    $this->password = $password;
  }

  public function getUserType()
  {
    return $this->userType;
  }

  public function setUserType($userType)
  {
    $this->userType = $userType;
  }
}
