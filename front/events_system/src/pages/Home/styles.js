import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10%;

  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 16px;

  text{
    font-size: larger;
    font-weight: bold;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 20%;

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

  .userOn{
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    white-space: nowrap;

    div{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a{
    color: black;
    font-size: 16px;
    text-decoration: none;
  }

`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;

  button{
      border: none;
      border-radius: 4px;

      padding: 6px 12px;
      background-color: #fca311;

      font-size: 16;
      color: #fff;
      cursor: pointer;

      height: 50px;

      &:hover{
        color: #000;
        border: 1px solid #000;
      }
    }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 95%;
  height: 100vh;

  padding: 20px;
  gap: 20px;

  margin-bottom: 100px;
`;
