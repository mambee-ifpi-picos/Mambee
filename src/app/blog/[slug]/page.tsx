import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { blogPosts, getPostBySlug } from 'helpers/siteData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post não encontrado' };
  }
  return {
    title: post.title,
    description: post.description
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const previous = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <Container section>
      <TitleSection title={post.date} subtitle={post.title} />
      <div className="prose max-w-none text-indigo-900 my-8 leading-relaxed">
        <FormatHtml content={post.contentHtml} />
      </div>
      <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-8 w-full text-sm">
        <div>
          {previous && (
            <Link
              href={`/blog/${previous.slug}`}
              className="text-pink-700 hover:text-pink-800 font-medium transition-colors"
            >
              ← {previous.title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="text-pink-700 hover:text-pink-800 font-medium transition-colors"
            >
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}
