import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteMetadata } from 'helpers/siteData';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center mr-auto text-indigo-900 hover:text-indigo-900">
      <div className="w-16 h-16 mr-3 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt={siteMetadata.title}
          width={64}
          height={64}
          className="w-auto h-auto max-h-16 object-contain"
          priority
        />
      </div>
      <h1 className="font-semibold text-xl tracking-tight">{siteMetadata.title}</h1>
    </Link>
  );
};

export default Logo;
