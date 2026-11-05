import React from 'react';
import Link from 'next/link';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';

interface BannerProps {
  title: string;
  subtitle?: string;
  content: string;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, content, linkTo, linkText }) => (
  <section className="bg-gray-100 border-b border-indigo-100">
    <Container section>
      <div className="flex flex-col w-full">
        {/* Texto superior rosa da marca */}
        <h4 className="text-base font-normal text-[#B83280] w-full text-left tracking-wide mb-1">
          {title}
        </h4>

        {/* Título com peso suavizado (font-semibold) e tom escuro suave */}
        <h2 className="uppercase mb-4 text-3xl sm:text-4xl font-semibold w-full text-slate-800 text-left">
          {subtitle || 'MAMBEE'}
        </h2>

        {/* Linha vertical mantida */}
        <div className="relative w-2 h-8 mb-6 -mt-2">
          <span className="bg-[#1E284B] h-full w-[1.5px] absolute left-0 inline-block" />
          <span className="bg-[#B83280] h-6 w-[1.5px] absolute left-1 inline-block" />
        </div>
      </div>

      <p className="mb-8 text-justify leading-relaxed text-slate-700">{content}</p>

      <Link href={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </section>
);

export default Banner;
