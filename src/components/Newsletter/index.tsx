'use client';

import React, { useState } from 'react';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-100 border-t border-indigo-100 mt-auto">
      <Container section>
        <TitleSection title="Newsletter" subtitle="Fique por dentro das novidades" center />
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center max-w-md mx-auto mt-4 w-full">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-300 rounded-md py-2 px-4 block w-full mb-3"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-300 rounded-md py-2 px-4 block w-full mb-3"
          />
          <Button primary block type="submit">
            Inscrever-se
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default Newsletter;

