import React from 'react';
import Banner from 'components/ui/Banner';
import { heroData } from 'helpers/siteData';

const HeroBanner: React.FC = () => {
  return (
    <Banner
      title={heroData.title}
      subtitle={heroData.subtitle}
      content={heroData.content}
      linkTo={heroData.linkTo}
      linkText={heroData.linkText}
    />
  );
};

export default HeroBanner;

