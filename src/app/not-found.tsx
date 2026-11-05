import React from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Button from 'components/ui/Button';

export default function NotFound() {
  return (
    <Layout>
      <Container section className="flex-col items-center justify-center text-center">
        <TitleSection title="404" subtitle="Página não encontrada" center />
        <p className="mt-4 text-center w-full text-gray-600">
          Você acessou uma rota que não existe.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button primary>Voltar para o início</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}

