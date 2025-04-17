import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cageflix",
  description: "A Nicolas Cage powered movie experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicons.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-bebas antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
