import React from 'react';

interface TimelineProps {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<TimelineProps> = ({ title, subtitle, content, startDate, endDate }) => (
  <div className="relative border-l-2 border-indigo-200 pl-6 sm:pl-8 pb-10 last:pb-2 ml-3 sm:ml-6 flex flex-col sm:flex-row w-full">
    {/* Ponto indicador conectado sobre a borda da timeline */}
    <span className="w-4 h-4 border-2 border-indigo-300 bg-indigo-100 rounded-full absolute -left-[9px] top-1" />

    {/* Coluna da esquerda (Datas, Título e Subtítulo) com largura mínima e espaçamento amplos */}
    <div className="w-full sm:w-[230px] sm:min-w-[230px] lg:w-[260px] lg:min-w-[260px] shrink-0 sm:pr-8 mb-3 sm:mb-0">
      <div className="inline-block text-xs border border-pink-700 text-pink-700 rounded-full px-3.5 py-1 font-medium whitespace-nowrap">
        {startDate} - {endDate}
      </div>
      <div className="font-bold text-base mt-2.5 text-[#1E284B]">{title}</div>
      <div className="text-xs text-slate-500 mt-0.5 font-medium">{subtitle}</div>
    </div>

    {/* Coluna da direita (Descrição do Projeto / Experiência) */}
    <div className="flex-1 text-slate-600 text-sm leading-relaxed text-justify sm:text-left sm:pt-1">
      {content}
    </div>
  </div>
);

export default Timeline;
