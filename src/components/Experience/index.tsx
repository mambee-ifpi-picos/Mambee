import React from 'react';
import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { experiencesData } from 'helpers/siteData';

const Experience: React.FC = () => {
  return (
    <Container section>
      <TitleSection title={experiencesData.title} subtitle={experiencesData.subtitle} />
      <div className="w-full mt-6">
        {experiencesData.items.map((item) => (
          <Timeline
            key={item.id}
            title={item.company}
            subtitle={item.position}
            content={<FormatHtml content={item.content} />}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </Container>
  );
};

export default Experience;
