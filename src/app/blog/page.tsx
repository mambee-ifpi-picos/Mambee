import React from 'react';
import type { Metadata } from 'next';
import Posts from 'components/Posts';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function BlogPage() {
  return (
    <>
      <Posts />
    </>
  );
}
