import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Zenita",
  description:
    "Personal life dashboard for insight into health, documents and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6">
          <header className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-zenita-primary" />
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Zenita</h1>
                <p className="text-xs text-slate-400">
                  Everything in one place: health & documents.
                </p>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
            Zenita · Personal life dashboard
          </footer>
        </div>
      </body>
    </html>
  );
}

