import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Site Óptica Bela Vista',
  description: 'Óptica Bela Vista em Canindé, Ceará: Armações a partir de R$39,90, Exame de Vista Grátis e Brinde Exclusivo! Encontre a armação perfeita para você e cuide da sua visão com qualidade e economia. Agende seu exame hoje!',
 icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
