import React from 'react';
import type { Metadata } from 'next';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

export const metadata: Metadata = {
  title: 'Sobre'
};

export default function ResumePage() {
  return (
    <>
      <Experience />
      <hr className="border-t border-gray-200 my-4" />
      <Education />
      <hr className="border-t border-gray-200 my-4" />
      <Skills />
    </>
  );
}
