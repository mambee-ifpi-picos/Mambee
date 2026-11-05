import React from 'react';
import Icon from 'components/ui/Icon';

interface InfoBlockProps {
  icon: any;
  title: string;
  content: React.ReactNode;
  center?: boolean;
  iconClassName?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  icon,
  title,
  content,
  center,
  iconClassName = 'text-[#1E284B]'
}) => (
  <div
    className={`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 shadow-sm transition-shadow hover:shadow-md ${
      center ? 'items-center text-center' : ''
    }`}
  >
    <span className="flex items-center justify-center w-10 h-10 border border-pink-700 rounded-full mb-2 shrink-0">
      <Icon icon={icon} className={`w-4 h-4 ${iconClassName}`} />
    </span>
    <div className={center ? 'text-center' : ''}>
      <h3 className="text-md mt-1 font-semibold text-[#1E284B]">{title}</h3>
      <div className="mt-1 text-slate-600 text-sm leading-relaxed">{content}</div>
    </div>
  </div>
);

export default InfoBlock;
