import type { Metadata } from 'next';
import { Providers } from '@/app/providers';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Devstock Wprowadzenie na Praktyki',
  description: 'My first Next.js + TS project',
};

type RootLayoutProps = {
  children: React.ReactNode;
  theme?: string;
};

export default function RootLayout({ children, theme }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Container>
            <Header />
            <div className='p-10 flex-grow'>{children}</div>
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
