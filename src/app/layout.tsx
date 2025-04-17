import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cageflix',
  description: 'A Nicolas Cage powered movie experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-bebas antialiased bg-black text-white">{children}</body>
    </html>
  );
}
