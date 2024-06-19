import type { Metadata } from 'next';
import './globals.css';

//* Components Imports
import Footer from '@/components/Footer';

//* Metadata for the page
export const metadata: Metadata = {
  title: 'Damac',
  description: 'Real-state website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <main className="">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
