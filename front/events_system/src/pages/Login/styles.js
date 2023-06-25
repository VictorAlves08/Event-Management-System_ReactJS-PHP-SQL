import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #2b2d42;
  color: #fff;

  .body{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 40%;
    height: 55%;

    padding: 20px;

    border-radius: 12px;
    background: #1f1f1f;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.199);
  }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: solid rgb(143, 143, 143) 1px;

  margin-bottom: 30px;

  background: none;
  color: rgba(255, 255, 255, 0.555);

  width: 70%;

  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 7px #38d39f70;

  background: #55a630;
  color: #fff;

  width: 120px;
  height: 30px;

  &:hover{
    background: #007f5f;
    box-shadow: none;
  }
`;
