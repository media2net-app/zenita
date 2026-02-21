import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Zenita",
  description:
    "Personal life dashboard for insight into health, documents and more.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-crm-content font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

