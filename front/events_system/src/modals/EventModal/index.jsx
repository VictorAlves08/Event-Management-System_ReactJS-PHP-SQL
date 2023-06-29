import React, { useState } from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import { formatDate, formatStars, formatCurrency } from '../../utils/index.js';
import { Loader } from '../../components';

import { deleteEvent } from '../../services/event.api';
import { subscribeUserEvent, unsubscribeUserEvent } from '../../services/registration.api';
import { createReview, deleteReview } from '../../services/review.api';

const organizerType = 'organizer';
const participantType = 'participant';

export const EventModal = ({ onClose, isModalEventOpen, data, handleIsModalCreateEventOpen, isLoggedIn }) => {
  if (!isModalEventOpen) return null;

  const stars = formatStars(data?.averageScore);
  const price = formatCurrency(data?.price);
  const date = formatDate(data?.dateTime);

  const [isLoading, setIsLoading] = useState(false);
  const [dataReview, setDataReview] = useState({
    id_user: isLoggedIn.id_user,
    id_event: data.id_event,
    score: 0,
    comment: ""
  })

  const userOrganizer = data?.user.find(user => user.type_user === organizerType);
  const isUserPartipant = data?.user.find(user => user.type_user === participantType && user.id_user == isLoggedIn.id_user);
  const participants = data?.user.filter(user => user.type_user === participantType);

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

  const handleSubscribe = () => {
    subscribeUserEvent({ id_user: isLoggedIn.id_user, id_event: data.id_event })
      .then((info) => {
        if (info.status === 200) {
          onClose();
        }
      })
  };

  const handleUnsubscribe = () => {
    unsubscribeUserEvent({ id_user: isLoggedIn.id_user, id_event: data.id_event })
      .then((info) => {
        if (info.status === 200) {
          onClose();
        }
      })
  };

  const handleCreateReview = () => {
    if (dataReview.score !== 0) {
      createReview(dataReview)
        .then((info) => {
          if (info.status === 200) {
            onClose();
          }
        })
      onClose();
    }
  }

  const handleDeleteReview = (id_review) => {
    deleteReview(id_review).then((info) => {
      if (info.status === 200) {
        onClose();
      }
    })
  }

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
                  <p>{price}</p>
                  <p className='date'>{date}</p>
                  <p className='title' title={data.title}>{data.title}</p>
                  <p className='type' title={data.type}>{data.type}</p>
                  <p className='location' title={data.location}>{data.location}</p>
                </div>
                <div>
                  <Styled.InfoTitle>Responsável</Styled.InfoTitle>
                  <p title={userOrganizer?.name} >{userOrganizer?.name}</p>
                  <p title={userOrganizer?.email} >{userOrganizer?.email}</p>

                  <Styled.InfoTitle>Participantes ({participants?.length || 0})</Styled.InfoTitle>
                  {isLoggedIn &&
                    participants?.map((participant) => (
                      <p key={participant.id_user} title={participant.name}>{participant.name}</p>
                    ))
                  }
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
                      <React.Fragment key={review.id_review}>
                        <div className='body-bottom-score'>
                          {formatStars(review.score)}
                          {(isLoggedIn?.id_user == review.id_user || isLoggedIn?.id_user == userOrganizer?.id_user) &&
                            <a onClick={() => handleDeleteReview(review.id_review)}>Excluir</a>
                          }
                        </div>
                        <p>{review.comment}</p>
                      </React.Fragment>
                    ))
                    :
                    <p>Nenhum comentário adicionado</p>
                  }
                </div>
                <div className='body-bottom-btns'>
                  {isUserPartipant?.id_user && (
                    <>
                      <textarea
                        placeholder='Digite seu comentário...'
                        value={dataReview.comment}
                        onChange={(e) => setDataReview({ ...dataReview, comment: e.target.value })}
                      />
                      <select name="select" value={dataReview.score} onChange={(e) => setDataReview({ ...dataReview, score: parseInt(e.target.value) })} >
                        <option value="0" selected disabled>Selecione o Score</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                      </select>
                    </>
                  )}
                  {isLoggedIn &&
                    <div>
                      {isLoggedIn?.id_user == userOrganizer?.id_user && (
                        <>
                          <button type="button" style={{ backgroundColor: '#55a630', marginRight: 5 }} onClick={handleIsModalCreateEventOpen}>Editar Evento</button>
                          <button type="button" style={{ backgroundColor: '#dd2808' }} onClick={handleDeleteEvent}>Deletar Evento</button>
                        </>
                      )}
                      {!isUserPartipant?.id_user && isLoggedIn?.id_user != userOrganizer?.id_user && (
                        <>
                          <button type="button" style={{ backgroundColor: '#55a630' }} onClick={handleSubscribe}>Fazer Inscrição</button>
                        </>
                      )}
                      {isUserPartipant?.id_user && (
                        <>
                          <button type="button" style={{ backgroundColor: '#dd2808' }} onClick={handleUnsubscribe}>Desinscrever</button>
                          <button type="button" style={{ backgroundColor: '#55a630' }} onClick={handleCreateReview}>Comentar</button>
                        </>
                      )}
                    </div>
                  }
                </div>
              </div>
            </>
          }
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}
