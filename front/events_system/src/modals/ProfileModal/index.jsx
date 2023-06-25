import React from 'react';

import * as Styled from './styles';
import CloseIcon from '@mui/icons-material/Close';

import {formatDate, formatStars} from '../../utils/index.js';

export const ProfileModal = ({onClose, isModalProfileOpen, data}) =>{
  if(!isModalProfileOpen) return null;

  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.ModalHeader>
          {/* <h2>{data.title}</h2> */}
          <CloseIcon onClick={onClose} style={{cursor: 'pointer'}}/>
        </Styled.ModalHeader>
        {/* <Styled.ModalBody>
        </Styled.ModalBody> */}
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}
