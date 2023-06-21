import styled from 'styled-components';

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 50%;

  div{
    width: 60%;
    height: 100%;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
