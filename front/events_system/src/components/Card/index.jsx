import React from 'react';

import {formatDate, formatStars} from '../../utils/index.js';

import * as Styled from './styles';

export const Card = ({data, onClick}) =>{
  // const date = formatDate(data?.dateTime);
  const stars = formatStars(5);

  return(
    <Styled.Card onClick={onClick}>
      <Styled.CardHeader>
        <img src={data?.image_url} alt={`Imagem do Evento: ${data?.title}`}/>
      </Styled.CardHeader>
      <Styled.CardBody>
        <text>{stars}</text>
        {/* <text className='date'>{date}</text> */}
        <text className='title' title={data?.title}>{data?.title}</text>
        <text className='type' title={data?.type}>{data?.type}</text>
        <text className='location' title={data?.location}>{data?.location}</text>
      </Styled.CardBody>
    </Styled.Card>
  );
}
