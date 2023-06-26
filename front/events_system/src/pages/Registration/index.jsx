import React, { useState } from 'react';

import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';
import { postCreateUser } from '../../services/auth.api';

const messageOK = "Usuario criado com sucesso";
export const Registration = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null
  })

  const handleGoToHome = () => navigate('/');

  const handleSubmit = () => {
    if (userData.email && userData.password && userData.name) {
      postCreateUser(userData).then((info) => {
        console.log(info)
        if (info.data) {
          const obj = { ...userData, isLoggedIn: true, id_user: info.data }
          sessionStorage.setItem('isUserLoggedIn', JSON.stringify(obj));
          handleGoToHome();
        }
      }).catch(() => {
        alert('Erro ao fazer cadastrar! Verifique seus dados!')
      })
    }
  };

  return (
    <Styled.Container>
      <div className="body">
        <h1>Cadastro</h1>
        <p>Sistema de Cadastro de Eventos</p>

        <Styled.Form>
          <Styled.Input
            autoFocus
            type='text'
            placeholder='Digite seu nome...'
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
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
          <Styled.Button type='submit' onClick={handleSubmit}>Cadastrar</Styled.Button>
        </Styled.Footer>
      </div>
    </Styled.Container>
  );
}

