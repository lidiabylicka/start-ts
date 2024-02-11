import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import { useTheme } from 'next-themes';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Devstock Wprowadzenie na Praktyki',
  description: 'My first Next.js + TS project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Providers>
          <Container>
            <Header />
            <div className='p-5 flex-grow'>{children}</div>
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
