import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from '@/component/shared/theme';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@/component/shared/footer';
config.autoAddCss = false
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
        <link rel="icon" href="/favicons.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-bebas antialiased bg-light font-netflix text-white">{children}
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Footer />
      </body>
    </html>
  );
}
