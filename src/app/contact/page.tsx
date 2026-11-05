import React from 'react';
import type { Metadata } from 'next';
import ContactInfo from 'components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contato'
};

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
    </>
  );
}
