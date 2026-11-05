'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';

const defaultSettings: Settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false
};

interface CarouselProps {
  children: React.ReactNode;
  settings?: Settings;
}

const Carousel: React.FC<CarouselProps> = ({ children, settings = defaultSettings }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;

