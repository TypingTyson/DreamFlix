import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// src/app/layout.tsx
export const metadata = {
  title: "Dreamflix",
  description: "A better-than-Netflix streaming experience",
  keywords: "movies, streaming, tv shows, dreamflix, watch online",
  authors: [{ name: "Your Name", url: "https://yourportfolio.com" }],
  openGraph: {
    title: "Dreamflix",
    description: "Binge-worthy content just got better.",
    url: "https://dreamflix.app",
    siteName: "Dreamflix",
    images: [
      {
        url: "tiger-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Dreamflix preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}




