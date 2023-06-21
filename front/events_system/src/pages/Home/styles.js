import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 18%;

  padding-left: 20px;
  padding-right: 20px;

  text{
    font-size: larger;
    font-weight: bold;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 13%;

    button{
      border: none;
      border-radius: 4px;

      padding: 6px 12px;
      background-color: #000;

      font-size: 16;
      color: #fff;
      cursor: pointer;

      &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;
`;
