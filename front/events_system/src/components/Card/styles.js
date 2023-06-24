import styled from 'styled-components';

export const Card = styled.div`
  width: 18.5%;
  height: 55%;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #e5e5e5;

  &:hover{
    box-shadow: 0px 0px 5px 0px rgba(29,53,87,1);
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 50%;

  img{
    width: 100%;
    height: 100%;
    border-radius: 8px;

    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;

  overflow: hidden;

  text{
    white-space: nowrap;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
  }

  .date{
    font-size: small;
  }

  .title{
    font-weight: bold;
  }

  .type{
    border-bottom: 1px solid black;
  }

  .title, .type, .location{
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;
