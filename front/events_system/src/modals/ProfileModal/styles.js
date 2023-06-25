import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 70%;
  height: 70%;

  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
