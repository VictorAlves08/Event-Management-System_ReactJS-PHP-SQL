import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 60px;

  padding: 8px;
`;

export const Input = styled.input`
  width: 40%;

  border: none;
  border-bottom: 1px solid #457b9d;

  &:focus {
    outline: none;
    border-bottom: 1px solid #f77f00;
  }
`;

export const Select = styled.select`
  border:1px solid #457b9d;
  border-radius: 8px;

  width: 18%;
  height: 30px;

  &:focus {
    outline: none;
  }

  option{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
