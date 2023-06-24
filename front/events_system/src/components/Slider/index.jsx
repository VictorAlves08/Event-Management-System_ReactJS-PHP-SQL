import React, { useState, useEffect } from 'react';

import * as Styled from './styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const imageUrls = [
  'https://img.freepik.com/free-psd/event-banner-template-design_23-2149231981.jpg?w=826&t=st=1687323227~exp=1687323827~hmac=aaa493fcaedeb9f2c685d3db7257515f1c61710413f30800451b596d071ac38c',
  'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-para-evento-de-negocios-profissional_23-2149313272.jpg?w=2000',
  'https://img.freepik.com/psd-gratuitas/modelo-de-banner-para-concerto_23-2148403186.jpg',
  'https://img.freepik.com/free-vector/gradient-texture-music-festival-twitch-banner_23-2149201651.jpg'
];

export const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handleAutomaticImageChange = () => {
    setInterval(() => {
      handleNextImage();
    }, 8000);
  };

  useEffect(() => {
    handleAutomaticImageChange();
  }, []);

  return(
    <Styled.Slider>
      <ArrowBackIosNewIcon onClick={handleNextImage} fontSize="large" style={{cursor: 'pointer', color: '#fca311'}} />
        <div>
          <img src={imageUrls[currentImageIndex]} alt="Banner de Eventos" title={imageUrls[currentImageIndex]} />
        </div>
      <ArrowForwardIosIcon onClick={handleNextImage} fontSize="large" style={{cursor: 'pointer', color: '#fca311'}}  />
  </Styled.Slider>
  )
}
