import React from 'react';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Services />
      <hr className="border-t border-gray-200 my-4" />
      <Testimonials />
    </>
  );
}
