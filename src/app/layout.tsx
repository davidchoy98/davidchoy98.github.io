import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import '../scss/app.scss';

import { BootstrapClient } from '@/components/BootstrapClient';
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const arimo = Arimo({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const myName: string = "David Choy"
export const websiteTitle: string = `All About Me | ${myName}`;

export const metadata: Metadata = {
  authors: [{ name: myName }],
  creator: myName,
  title: websiteTitle,
  description: "A little website showcasing the projects that I've wroked on throughout my professional life.",
  keywords: [myName, ""],
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  twitter: null,
  openGraph: {
    images: "/images/logo-transparent.png",
    title: websiteTitle,
    type: "profile",
    description: "A little website showcasing the projects that I've wroked on throughout my professional life.",
    locale: "en_MY"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <NavBar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
