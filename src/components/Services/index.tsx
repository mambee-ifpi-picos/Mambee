import React from 'react';
import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { servicesData } from 'helpers/siteData';

const Services: React.FC = () => {
  return (
    <Container section>
      <TitleSection title={servicesData.title} subtitle={servicesData.subtitle} center />
      <div className="flex flex-wrap -mx-3">
        {servicesData.items.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2">
            <InfoBlock icon={item.icon} title={item.title} content={item.description} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;

