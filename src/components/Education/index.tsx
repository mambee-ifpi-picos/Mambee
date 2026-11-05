import React from 'react';
import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { educationData } from 'helpers/siteData';

const Education: React.FC = () => {
  return (
    <Container section>
      <TitleSection title={educationData.title} subtitle={educationData.subtitle} />
      <div className="w-full mt-6">
        {educationData.items.map((item) => (
          <Timeline
            key={item.id}
            title={item.university}
            subtitle={item.degree}
            content={<FormatHtml content={item.content} />}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </Container>
  );
};

export default Education;
