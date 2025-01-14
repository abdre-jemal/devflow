import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import "./globals.css";

import localFont from "next/font/local";

const oswald = localFont({
  src: "./fonts/Oswald.ttf",
  variable: "--font-oswald",
  weight: "100 200 300 400 500 ",
});

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "devflow is a community driven platform for developers",
  icons: {
    // icon: "../public/favicon.ico",
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
