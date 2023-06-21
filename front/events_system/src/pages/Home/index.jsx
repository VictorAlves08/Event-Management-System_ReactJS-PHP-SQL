import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

import { Slider } from '../../components/index'

import { getAllEvents } from '../../services/event.api';

export const Home = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() =>{
   getAllEvents()
    .then((events) =>{
      setEventData(events.data);
    })

  }, [])

  return (
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
          <div>FILTROS</div>
          <button>CRIAR EVENTO</button>
        </Styled.FilterContainer>
        <div>
          {eventData?.map((data) =>{
            return(
              <div key={data.id_event}>{data.title}</div>
            )
          })}
        </div>
      </Styled.Body>
    </Styled.Container>
  );
}
