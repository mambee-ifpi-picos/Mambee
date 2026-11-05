import React from 'react';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';
import { skillsData } from 'helpers/siteData';

const Skills: React.FC = () => {
  return (
    <Container section>
      <TitleSection title={skillsData.title} subtitle={skillsData.subtitle} center />
      <div className="flex flex-wrap -mx-3 w-full">
        {skillsData.items.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2">
            <ProgressBar title={item.title} percentage={item.percentage} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;

