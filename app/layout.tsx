import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@fontsource/google-sans/index.css";
import "@fontsource/google-sans/500.css";
import "@fontsource/google-sans/700.css";
import Navbar from "../home/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const absans = localFont({
  src: "../absans-main/fonts/Absans-Regular.woff2",
  variable: "--font-absans",
});

export const metadata: Metadata = {
  title: "IEEE MUJ",
  description: "IEEE ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${absans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
