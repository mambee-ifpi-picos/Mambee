'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { blogPosts } from 'helpers/siteData';

const Posts: React.FC = () => {
  return (
    <Container section>
      <TitleSection title="Blog" subtitle="Todos os posts" center />
      <div className="w-full flex flex-wrap">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 p-3">
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300 bg-white shadow-sm transition-shadow group-hover:shadow-md"
              >
                <figure className="w-full h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="p-4 text-indigo-900 flex-1 flex flex-col">
                  <span className="text-xs text-pink-700 font-medium mb-1">{post.date}</span>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-900 group-hover:text-pink-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="pt-2 mt-auto flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-indigo-900 border border-pink-700 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Posts;

