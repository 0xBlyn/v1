import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

const gillSans = localFont({
  src: [
    {
      path: '/fonts/GillSansUltraBoNova.woff',
      weight: '1000',
      style: 'normal',
    },
    // Add other variations (italic, light, etc.) if needed
  ],
  variable: '--font-gill-sans', // This creates a CSS variable
});

export const metadata: Metadata = {
  title: "Matara",
  description: "Official Tap Game for FTLD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={`${inter.className} ${gillSans.variable} fixed-background`}>
        {children}
      </body>
    </html>
  );
}
