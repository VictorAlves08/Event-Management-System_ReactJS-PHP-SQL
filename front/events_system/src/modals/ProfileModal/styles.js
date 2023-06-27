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

export const ModalBody = styled.div`
  width: 100%;
  height: 90%;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 35%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div{
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    label{
      font-weight: bold;
    }
  }

  button{
      border: none;
      border-radius: 4px;

      padding: 6px 12px;
      background-color: #000;

      width: 10%;
      height: 30%;

      margin-top: 8%;

      font-size: 16;
      color: #fff;
      cursor: pointer;

      &:hover{
        background-color: #55a630;
        color: #000;
        border: 1px solid #000;
      }
    }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 65%;

  display: flex;
  flex-direction: row;
  align-items: center;

  div{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

  }

`;
