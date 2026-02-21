"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "◉" },
  { href: "/dashboard/health", label: "Health", icon: "♥" },
  { href: "/dashboard/documents", label: "Documents", icon: "▤" },
];

function NavLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-crm px-3 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-teal-500/10 text-teal-300 border-l-2 border-zenita-primary -ml-[2px] pl-[14px]"
          : "text-slate-300 hover:bg-crm-sidebar-hover hover:text-white"
      }`}
    >
      <span className="text-base opacity-80" aria-hidden>
        {icon}
      </span>
      {label}
    </Link>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageTitle =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname === "/dashboard/health"
        ? "Health"
        : pathname === "/dashboard/documents"
          ? "Documents"
          : "Zenita";

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-30 flex h-full w-[260px] flex-col border-r border-slate-700/50 bg-crm-sidebar">
        <Link
          href="/dashboard"
          className="flex h-16 items-center gap-2 border-b border-slate-700/50 px-4"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-crm bg-zenita-primary text-white font-bold text-sm">
            Z
          </div>
          <span className="text-lg font-semibold text-white">Zenita</span>
        </Link>
        <nav className="flex-1 space-y-0.5 p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
        <div className="border-t border-slate-700/50 p-3">
          <p className="text-xs text-slate-500">Personal life dashboard</p>
        </div>
      </aside>

      <div className="ml-[260px] flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">{pageTitle}</h1>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <input
                type="search"
                placeholder="Search..."
                className="w-48 rounded-crm border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-1 focus:ring-zenita-primary"
              />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zenita-primary/20 text-sm font-semibold text-zenita-primary">
              U
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
