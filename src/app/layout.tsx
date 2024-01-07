import Header from '@/components/header/Header';
import './globals.css';

import Footer from '@/components/footer/Footer';
import Providers from '@/contexts/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="container">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
