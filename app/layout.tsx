import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

export const metadata = {
  title: "MyManifest",
  description:
    "Personal life dashboard for insight into health, documents and more.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen min-w-0 overflow-x-hidden bg-crm-content font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

