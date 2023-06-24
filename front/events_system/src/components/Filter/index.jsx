import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

export const Filter = () =>{
  return(
    <Styled.Container>
      <Styled.Input placeholder='Nome do Evento...'/>
      <Styled.Input placeholder='Categoria do Evento...'/>
        <Styled.Select name="select">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5" defaultValue>⭐⭐⭐⭐⭐</option>
        </Styled.Select>
    </Styled.Container>
  );
}
