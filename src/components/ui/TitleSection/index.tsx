import React from 'react';

interface TitleSectionProps {
  center?: boolean;
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ center, title, subtitle }) => (
  <div className="flex flex-col w-full">
    {subtitle && (
      <h4
        className={`text-sm font-semibold tracking-wider text-[#B83280] uppercase mb-1 w-full ${
          center ? 'text-center' : 'text-left'
        }`}
      >
        {title}
      </h4>
    )}
    <h2
      className={`uppercase mb-4 text-2xl font-bold w-full text-[#1E284B] ${
        center ? 'text-center' : 'text-left'
      }`}
    >
      {subtitle || title}
    </h2>
    <div className={`relative w-2 h-8 mb-6 -mt-2 ${center ? 'mx-auto' : ''}`}>
      <span className="bg-[#1E284B] h-full w-[1.5px] absolute left-0 inline-block" />
      <span className="bg-[#B83280] h-6 w-[1.5px] absolute left-1 inline-block" />
    </div>
  </div>
);

export default TitleSection;
