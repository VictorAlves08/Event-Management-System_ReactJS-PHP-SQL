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

  margin-bottom: 5px;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
      border: none;
      border-radius: 4px;
      margin-top: 4rem;
      padding: 6px 12px;
      background-color: #2b9348;

      font-size: 16;
      color: #fff;
      cursor: pointer;

      height: 50px;

      &:hover{
        background-color: #55a630;
        border: 1px solid #000;
      }
    }
  }

  label{
    font-weight: bold;
    margin-top: 10px;

    a{
      text-decoration: underline;
      color: blue;
      cursor: pointer;
    }
  }

  input{
    outline: none;
  }

  textarea{
    width: 17rem;
    height: 5rem;
    resize: none;
    outline: none;
  }
`;
