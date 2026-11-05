import React from 'react';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
}

const SEO: React.FC<SEOProps> = () => {
  // No Next.js App Router, o SEO é controlado primariamente via export const metadata em cada página/layout.
  return null;
};

export default SEO;

