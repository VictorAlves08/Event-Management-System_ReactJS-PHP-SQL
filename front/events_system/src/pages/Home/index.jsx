import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

import { Slider, Filter, Card } from '../../components/index';
import { EventModal } from '../../modals/EventModal';

import { getAllEvents } from '../../services/event.api';

export const Home = () => {
  const date = new Date();

  const [eventData, setEventData] = useState([]);
  const [eventDataModal, setEventDataModal] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsModalOpen = (data = null) =>{
    setEventDataModal(data)
    setIsModalOpen(!isModalOpen)
  };

  useEffect(() =>{
   getAllEvents()
    .then((events) =>{
      setEventData(events.data);
    })
  }, []);

  return (
    <>
    {isModalOpen &&
      <EventModal isModalOpen={isModalOpen} onClose={handleIsModalOpen} data={eventDataModal} />
    }
    <Styled.Container>
      <Styled.Header>
        <h2>Sistema de Cadastro de Eventos</h2>
        <div>
          <button>Login</button>
          <button>Registro</button>
        </div>
      </Styled.Header>

      <Slider />

      <Styled.Body>
        <Styled.FilterContainer>
          <Filter />
          <button>CRIAR NOVO EVENTO</button>
        </Styled.FilterContainer>
        <Styled.CardContainer>
          {eventData?.length > 0 ?
            eventData.map((data) =>{
              console.log(eventData)
              return(
                  <Card
                    key={data.id_event}
                    data={data}
                    onClick={() => handleIsModalOpen(data)}
                   />
              )})
          :
            <h3>NENHUM EVENTO ENCONTRADO</h3>
          }
        </Styled.CardContainer>
        <a href='https://github.com/VictorAlves08/Event-Management-System_ReactJS-PHP-SQL' target='_blank'>
          Victor A. de Oliveira - {date.getFullYear()}
        </a>
      </Styled.Body>
    </Styled.Container>
    </>
  );
}
