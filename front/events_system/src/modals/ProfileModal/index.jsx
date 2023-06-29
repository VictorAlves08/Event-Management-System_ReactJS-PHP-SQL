import React, { useEffect, useState } from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import { getUsers, putUserEdit } from '../../services/user.api';
import { formatDate } from '../../utils/index.js';

export const ProfileModal = ({ onClose, isModalProfileOpen, isLoggedIn }) => {
  if (!isModalProfileOpen) return null;

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    id_user: null,
    eventsOrganizer: [],
    eventsParticipant: []
  });

  const handleEditUser = () => {
    putUserEdit(profileData).then(() => {
      putUserEdit(profileData).then((info) => {
        if (info.status === 200) {
          const obj = {
            name: profileData.name,
            email: profileData.email,
            password: profileData.password,
            id_user: profileData.id_user,
            isLoggedIn: true
          }
          sessionStorage.setItem('isUserLoggedIn', JSON.stringify(obj));
          alert('Usuário editado com sucesso!');
        }
      })
    })
  };

  useEffect(() => {
    getUsers(isLoggedIn?.id_user).then((info) => {
      if (info.data?.email !== null) {
        setProfileData({
          ...profileData,
          name: info.data.name,
          email: info.data.email,
          password: info.data.password,
          id_user: info.data.id_user,
          eventsOrganizer: info.data.eventsOrganizer,
          eventsParticipant: info.data.eventsParticipant
        })
      }
    })
  }, [])

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <h2>Perfil de Usuário</h2>
          <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.InfoContainer>
            <div>
              <label>Nome</label>
              <input
                type='text'
                placeholder='Nome do Usuário'
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </div>

            <div>
              <label>E-mail</label>
              <input
                type='email'
                placeholder='E-mail do Usuário'
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </div>

            <div>
              <label>Senha</label>
              <input
                placeholder='Senha do Usuário'
                type='password'
                value={profileData.password}
                onChange={(e) => setProfileData({ ...profileData, password: e.target.value })}
              />
            </div>

            <button type='button' onClick={handleEditUser} >Salvar</button>
          </Styled.InfoContainer>

          <Styled.TableContainer>
            <div className="table-container">
              <h3>Eventos que estou participando</h3>
              {profileData?.eventsParticipant?.map((event) => (
                <Styled.DataContainer key={event.id_event}>
                  <text>{event.title}</text>
                  <text>{formatDate(event?.dateTime)}</text>
                  <text>{event.location}</text>
                </Styled.DataContainer>
              ))}
            </div>

            <div className="table-container">
              <h3>Eventos que estou organizando</h3>
              {profileData?.eventsOrganizer?.map((event) => (
                <>
                  <Styled.DataContainer key={event.id_event}>
                    <text>{event.title}</text>
                    <text>{formatDate(event?.dateTime)}</text>
                    <text>{event.location}</text>
                  </Styled.DataContainer>
                </>
              ))}
            </div>
          </Styled.TableContainer>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}
