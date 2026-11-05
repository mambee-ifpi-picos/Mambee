'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { testimonialsData } from 'helpers/siteData';

const Carousel = dynamic(() => import('components/ui/Carousel'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center text-center mt-4 outline-none">
      <figure className="w-20 h-20 mx-auto border-2 border-pink-700 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
        <Image
          src={testimonialsData.items[0].cover}
          alt={testimonialsData.items[0].title}
          width={80}
          height={80}
          className="w-full h-full object-cover rounded-full"
        />
      </figure>
      <h3 className="font-semibold my-4 text-indigo-900 text-lg">
        {testimonialsData.items[0].title}
      </h3>
      <FormatHtml
        content={testimonialsData.items[0].content}
        className="text-gray-600 text-sm leading-relaxed"
      />
    </div>
  )
});

const carouselSettings = {
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

const Testimonials: React.FC = () => {
  return (
    <Container section>
      <TitleSection
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        center
      />
      <div className="max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4">
        <Carousel settings={carouselSettings}>
          {testimonialsData.items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center mt-4 outline-none">
              <figure className="w-20 h-20 mx-auto border-2 border-pink-700 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <Image
                  src={item.cover}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </figure>
              <h3 className="font-semibold my-4 text-indigo-900 text-lg">{item.title}</h3>
              <FormatHtml
                content={item.content}
                className="text-gray-600 text-sm leading-relaxed"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
