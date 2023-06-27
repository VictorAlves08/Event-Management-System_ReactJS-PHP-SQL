import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const imageUrls = [
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4XAhrVkfifPHOnBsBtHD1gpsay_46KBi-6Z5cloXY1OUFBYXtEM1krNBzKGhTwFKhHvt0bsu4QJnb2z-XrimA2uJdioL9YPDrev159YBCaCF6nNcumlsW_rNpgia7Tf1Wt7btDboTLeGq-fIGULx10bff9AgR1LhjWAxHkPL1sURttHqn73gLwwqw/s1892/FQ3nrwOXIAEX8nB.jpg',
  'https://img.freepik.com/free-psd/event-banner-template-design_23-2149231981.jpg?w=826&t=st=1687323227~exp=1687323827~hmac=aaa493fcaedeb9f2c685d3db7257515f1c61710413f30800451b596d071ac38c',
  'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-para-evento-de-negocios-profissional_23-2149313272.jpg?w=2000',
  'https://img.freepik.com/psd-gratuitas/modelo-de-banner-para-concerto_23-2148403186.jpg',
  'https://img.freepik.com/free-vector/gradient-texture-music-festival-twitch-banner_23-2149201651.jpg'
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imageUrls.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [currentIndex, imageUrls.length]);

  return (
    <Styled.Slider>
      <ArrowBackIosNewIcon onClick={goToPreviousImage} fontSize="large" style={{ cursor: 'pointer', color: '#fca311' }} />
      <div>
        <img src={imageUrls[currentIndex]} alt="Banner de Eventos" />
      </div>
      <ArrowForwardIosIcon onClick={goToNextImage} fontSize="large" style={{ cursor: 'pointer', color: '#fca311' }} />
    </Styled.Slider>
  )
}
