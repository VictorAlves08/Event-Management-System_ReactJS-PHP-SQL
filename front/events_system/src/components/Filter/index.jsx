import React from 'react';
import * as Styled from './styles';

export const Filter = ({ handleFilter, filter }) => {
  const { eventName, eventCategory, eventScore } = filter;

  return (
    <Styled.Container>
      <Styled.Input
        type='text'
        placeholder='Buscar por Nome do Evento...'
        onChange={(e) => handleFilter({ ...filter, eventName: e.target.value })}
        value={eventName}
      />

      <Styled.Input
        type='text'
        placeholder='Buscar por Categoria do Evento...'
        onChange={(e) => handleFilter({ ...filter, eventCategory: e.target.value })}
        value={eventCategory}
      />

      <Styled.Select name="select" value={eventScore} onChange={(e) => handleFilter({ ...filter, eventScore: parseInt(e.target.value) })}>
        <option value="6" default>Todos</option>
        <option value="0">Sem Review</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </Styled.Select>
    </Styled.Container>
  );
}
