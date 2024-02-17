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

export default function RootLayout({
  children,
  theme,
}: Readonly<{
  children: React.ReactNode;
  theme: string | undefined;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Providers>
          {/* reminder to add Error Boundary */}
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
