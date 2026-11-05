import React from 'react';
import Icon from 'components/ui/Icon';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { contactData } from 'helpers/siteData';

const ContactInfo: React.FC = () => {
  return (
    <Container section>
      <TitleSection title={contactData.title} subtitle={contactData.subtitle} center />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-4">
        {contactData.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-start text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <span className="w-12 h-12 rounded-full border border-pink-700 flex items-center justify-center text-slate-700 mb-4 shrink-0">
              <Icon icon={item.icon as any} className="w-4 h-4 text-slate-700" />
            </span>
            <h3 className="text-base font-semibold text-[#1E284B] mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-[240px] break-words">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContactInfo;
