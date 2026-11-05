'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';

const defaultSettings: Settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface CarouselProps {
  children: React.ReactNode;
  settings?: Settings;
}

const Carousel: React.FC<CarouselProps> = ({ children, settings = defaultSettings }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;

