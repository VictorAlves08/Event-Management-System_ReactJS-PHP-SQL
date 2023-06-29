import React, { useState } from 'react';

import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/auth.api';

export const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleGoToHome = () => navigate('/');

  const handleSubmit = () => {
    if (userData.email && userData.password) {
      postLogin(userData).then((info) => {
        if (info.data[0].id_user) {
          const obj = { ...info.data[0], isLoggedIn: true }
          localStorage.setItem('isUserLoggedIn', JSON.stringify(obj));
          handleGoToHome();
        }
      }).catch(() => {
        alert('Erro ao fazer Login! Verifique seu email e senha!')
      })
    }
  };

  return (
    <Styled.Container>
      <div className="body">
        <h1>Login</h1>
        <p>Sistema de Cadastro de Eventos</p>

        <Styled.Form>
          <Styled.Input
            autoFocus
            type='email'
            placeholder='Digite seu email...'
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <Styled.Input
            type='password'
            placeholder='Digite sua senha...'
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </Styled.Form>

        <Styled.Footer>
          <Styled.Button type='submit' onClick={handleGoToHome}>Voltar a Home</Styled.Button>
          <Styled.Button type='submit' onClick={handleSubmit}>Entrar</Styled.Button>
        </Styled.Footer>
      </div>
    </Styled.Container>
  );
}
