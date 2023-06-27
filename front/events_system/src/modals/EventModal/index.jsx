import React, { useState } from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import { formatDate, formatStars } from '../../utils/index.js';
import { Loader } from '../../components';

import { deleteEvent } from '../../services/event.api';

const organizerType = 'organizer';

export const EventModal = ({ onClose, isModalEventOpen, data, handleIsModalCreateEventOpen, isLoggedIn }) => {
  if (!isModalEventOpen) return null;

  const date = formatDate(data.dateTime);
  const stars = formatStars(data.averageScore);

  const [isLoading, setIsLoading] = useState(false);

  const userOrganizer = data?.user.find(user => user.type_user === organizerType);

  const handleDeleteEvent = () => {
    setIsLoading(true);
    deleteEvent(data.id_event).then((info) => {
      if (info.status === 200) {
        onClose();
      }
    }).catch(() => {
      alert('Ocorreu um erro ao deletar o evento!');
    }).finally(() => {
      setIsLoading(false);
    })
  };

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          <h2>{data.title}</h2>
          <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
        </Styled.ModalHeader>
        <Styled.ModalBody>
          {isLoading ?
            <Loader />
            :
            <>
              <div className='body-top'>
                <img src={data.image_url} alt={`Imagem do Evento: ${data.title}`} />
                <div className='body-top-info'>
                  <Styled.InfoTitle>Informações</Styled.InfoTitle>
                  <p>{stars}</p>
                  <p className='date'>{date}</p>
                  <p className='title' title={data.title}>{data.title}</p>
                  <p className='type' title={data.type}>{data.type}</p>
                  <p className='location' title={data.location}>{data.location}</p>
                </div>
                <div>
                  <Styled.InfoTitle>Responsável</Styled.InfoTitle>
                  <p title={userOrganizer?.name} >{userOrganizer?.name}</p>
                  <p title={userOrganizer?.email} >{userOrganizer?.email}</p>
                </div>
              </div>

              <div className='body-bottom'>
                <div className='body-bottom-info'>
                  <Styled.InfoTitle>Descrição</Styled.InfoTitle>
                  <p>{data.description}</p>
                </div>
                <div className='body-bottom-comments'>
                  <Styled.InfoTitle>Comentários</Styled.InfoTitle>
                  {data?.reviews.length > 0 ?
                    data.reviews.map((review) => (
                      <>
                        <>{formatStars(review.score)}</>
                        <p key={review.id_review}>{review.comment}</p>
                      </>
                    ))
                    :
                    <p>Nenhum comentário adicionado</p>
                  }
                </div>
                <div className='body-bottom-btns'>
                  {isLoggedIn && isLoggedIn?.id_user == userOrganizer?.id_user && (
                    <>
                      <button type="button" style={{ backgroundColor: '#55a630' }} onClick={handleIsModalCreateEventOpen}>Editar Evento</button>
                      <button type="button" style={{ backgroundColor: '#dd2808' }} onClick={handleDeleteEvent}>Deletar Evento</button>
                    </>
                  )}
                </div>
              </div>
            </>
          }
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}
