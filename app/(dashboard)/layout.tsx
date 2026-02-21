"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`block w-full rounded-lg px-3 py-2 text-sm ${
        active
          ? "bg-slate-800 text-slate-50"
          : "text-slate-300 hover:bg-slate-900 hover:text-slate-50"
      }`}
    >
      {label}
    </Link>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-[220px,1fr]">
      <aside className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <nav className="space-y-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/health" label="Health" />
          <NavLink href="/documents" label="Documents" />
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}

