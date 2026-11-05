import type { Metadata } from 'next';
import './globals.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Mambee | Fábrica Escola de Software',
    template: '%s | Mambee'
  },
  description: 'Fábrica Escola de Software Mambee',
  icons: {
    icon: '/images/logo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-indigo-900 bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
