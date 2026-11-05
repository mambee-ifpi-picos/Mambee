import React from 'react';

export type ObjectType = {
  [key: string]: any;
};

export interface SectionTitle {
  title: string;
  subtitle: string;
}

export interface Post {
  id?: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  contentHtml?: string;
}
