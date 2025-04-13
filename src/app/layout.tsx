import type { Metadata } from "next";
import { Inter, Poppins, Roboto, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
