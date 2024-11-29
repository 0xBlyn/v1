import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import TopInfoSection from "@/components/TopInfoSection";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={inter.className}
        style={{
          background: 'linear-gradient(359.69deg, #000F15 57.59%, #02354C 99.76%)',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <TopInfoSection />
        {children}
      </body>
    </html>
  );
}
