import React, { useState } from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import {postCreateEvent, putUpdateEvent} from '../../services/event.api';

import {formatDate, formatStars} from '../../utils/index.js';

export const EventCreateModal = ({onClose, isModalCreateEventOpen, isLoggedIn, eventDataModal}) =>{
  if(!isModalCreateEventOpen) return null;
  const isEditEvent = eventDataModal.id_event ? true : false;

  const [eventData, setEventData] = useState({
    title: eventDataModal.title || null,
    description: eventDataModal.description || null,
    date: eventDataModal.dateTime || null,
    time: eventDataModal.dateTime || null,
    location: eventDataModal.location|| null,
    price: eventDataModal.price|| null,
    image_url: eventDataModal.image_url || null,
    type: eventDataModal.type || null,
    id_user: isLoggedIn.id_user,
    id_event: eventDataModal.id_event || null,
  })

  const handleSubmit = () =>{
    if( eventData.title &&
        eventData.description &&
        eventData.date &&
        eventData.time &&
        eventData.location &&
        eventData.price &&
        eventData.type
        ){
          if(isEditEvent){
            putUpdateEvent(eventData).then((info) => {
              if(info.status = 200){
                onClose();
              }
            }).catch(() => {
              alert('Ocorreru um erro ao editar o evento!')
            })
          }else{
            postCreateEvent(eventData).then((info) => {
              if(info.status = 201){
                onClose();
              }
            }).catch(() => {
              alert('Ocorreru um erro ao criar um novo evento!')
            })
          }
      }
  };


  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <h2>
            {isEditEvent ? 'Editar Evento' : 'Criar Novo Evento'}
          </h2>
          <CloseIcon onClick={onClose} style={{cursor: 'pointer'}}/>
        </Styled.ModalHeader>
        <Styled.ModalBody>
        <div>
          <label>Titulo</label>
          <input
            type="text"
            autoFocus
            value={eventData.title}
            onChange={(e) => setEventData({...eventData, title: e.target.value})}
            />

          <label>Descrição - <a>Gerar pelo Chat-GPT</a></label>
          <textarea
            type="text"
            value={eventData.description}
            onChange={(e) => setEventData({...eventData, description: e.target.value})}
            />

          <label>Data</label>
          <input
            type="date"
            value={eventData.date}
            onChange={(e) => setEventData({...eventData, date: e.target.value})}
          />

          <label>Hora</label>
          <input
            id="hora-cons" type="time" name="hora-cons" step="2"
            value={eventData.time}
            onChange={(e) => setEventData({...eventData, time: e.target.value})}
          />
          </div>

          <div>
            <label>Local</label>
            <input
              type="text"
              value={eventData.location}
              onChange={(e) => setEventData({...eventData, location: e.target.value})}
            />

            <label>Preço</label>
            <input
              type="number"
              min={0}
              value={eventData.price}
              onChange={(e) => setEventData({...eventData, price: e.target.value})}
            />

            <label>Categoria do Evento</label>
            <input
              type="text"
              value={eventData.type}
              onChange={(e) => setEventData({...eventData, type: e.target.value})}
            />

          </div>

          <div>
            <img width='180' height={120} src={eventData.image_url || 'https://events.liveto.io/_next/static/media/default_event.82c17d7a.png'} alt="imagem"/>
            <label>Link da Imagem</label>
            <input
              type="url"
              value={eventData.image_url}
              onChange={(e) => setEventData({...eventData, image_url: e.target.value})}
              />

              <button type="button" onClick={handleSubmit}>
                {isEditEvent ? 'Editar Evento' : 'Criar Evento'}
              </button>
          </div>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}
