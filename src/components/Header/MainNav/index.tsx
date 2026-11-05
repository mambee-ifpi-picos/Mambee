'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const mainNavItems = [
  {
    title: 'Home',
    slug: '/'
  },
  {
    title: 'Ciclos',
    slug: '/ciclos'
  },
  {
    title: 'Patrocinadores',
    slug: '/patrocinadores'
  }
];

const institutionalItems = [
  {
    title: 'Sobre',
    slug: '/sobre'
  },
  {
    title: 'Blog',
    slug: '/blog'
  },
  {
    title: 'Contato',
    slug: '/contato'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isInstitutionalActive = institutionalItems.some(
    (item) =>
      pathname === item.slug ||
      (item.slug === '/sobre' && pathname.startsWith('/resume')) ||
      (item.slug === '/contato' && pathname.startsWith('/contact')) ||
      pathname.startsWith(item.slug)
  );

  return (
    <>
      <nav
        className={`sm:flex flex-col sm:flex-row sm:items-center sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 ${
          open ? 'flex' : 'hidden'
        }`}
      >
        {/* Links Principais */}
        {mainNavItems.map((item, index) => {
          const isActive =
            pathname === item.slug ||
            (item.slug !== '/' && pathname.startsWith(item.slug));

          return (
            <motion.div key={`nav-item-${index}`} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.slug}
                onClick={() => setOpen(false)}
                className={`relative inline-block text-indigo-900 ml-0 sm:ml-6 lg:ml-8 mt-3 sm:mt-0 pb-1 font-medium transition-colors group ${
                  isActive ? 'text-[#B83280]' : 'hover:text-[#B83280]'
                }`}
              >
                {item.title}
                {/* Linha fina de 2px */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#B83280] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            </motion.div>
          );
        })}

        {/* Dropdown Institucional */}
        <div
          className="relative ml-0 sm:ml-6 lg:ml-8 mt-3 sm:mt-0 group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-1.5 pb-1 font-medium transition-colors outline-none focus:outline-none ${
              isInstitutionalActive ? 'text-[#B83280]' : 'text-indigo-900 hover:text-[#B83280]'
            }`}
          >
            <span>Institucional</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menu Suspenso no Desktop */}
          <div
            className={`sm:absolute sm:left-0 sm:top-full sm:pt-2 sm:w-44 z-50 ${
              dropdownOpen ? 'block' : 'hidden sm:hidden'
            }`}
          >
            <div className="bg-white sm:rounded-xl sm:shadow-lg sm:border sm:border-slate-100 py-1 sm:py-2 pl-4 sm:pl-0 flex flex-col gap-1">
              {institutionalItems.map((subItem) => {
                const isSubActive =
                  pathname === subItem.slug ||
                  (subItem.slug === '/sobre' && pathname.startsWith('/resume')) ||
                  (subItem.slug === '/contato' && pathname.startsWith('/contact')) ||
                  pathname.startsWith(subItem.slug);

                return (
                  <Link
                    key={subItem.slug}
                    href={subItem.slug}
                    onClick={() => {
                      setOpen(false);
                      setDropdownOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isSubActive
                        ? 'text-[#B83280] font-semibold bg-pink-50/50'
                        : 'text-indigo-900 hover:text-[#B83280] hover:bg-slate-50'
                    }`}
                  >
                    {subItem.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Botão Hambúrguer Mobile */}
      <button
        type="button"
        aria-label="Abrir menu"
        className="flex flex-col items-end justify-center cursor-pointer w-6 h-5 sm:hidden outline-none focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`bg-indigo-900 inline-block w-6 h-[2px] transition-transform duration-200 ${
            open ? 'rotate-45 translate-y-[7px]' : 'mb-1'
          }`}
        />
        <span
          className={`bg-[#B83280] inline-block w-8 h-[2px] transition-opacity duration-200 ${
            open ? 'opacity-0' : 'mb-1'
          }`}
        />
        <span
          className={`bg-indigo-900 inline-block w-6 h-[2px] transition-transform duration-200 ${
            open ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>
    </>
  );
};

export default MainNav;
