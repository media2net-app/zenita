"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Home", icon: "⌂" },
  { href: "/dashboard/mentor", label: "Mentor", icon: "◇" },
  { href: "/dashboard/documents", label: "Documents", icon: "▤" },
  { href: "/dashboard/agenda", label: "Agenda", icon: "▦" },
  { href: "/dashboard/health", label: "Health", icon: "♥" },
  { href: "/dashboard/financial", label: "Financial", icon: "¤" },
  { href: "/dashboard/legal", label: "Legal", icon: "⚖" },
  { href: "/dashboard/soul", label: "Soul", icon: "◎" },
  { href: "/dashboard/marketplace", label: "Marketplace", icon: "☷" },
  { href: "/dashboard/devices", label: "Devices", icon: "⌚" },
  { href: "/dashboard/timeline", label: "Timeline", icon: "◷" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

const bottomNavItems = [
  navItems[0],
  navItems[2],
  navItems[4],
  navItems[11],
];

const pathToTitle: Record<string, string> = {
  "/dashboard": "Home",
  "/dashboard/mentor": "Mentor",
  "/dashboard/documents": "Documents",
  "/dashboard/agenda": "Agenda",
  "/dashboard/health": "Health",
  "/dashboard/financial": "Financial",
  "/dashboard/legal": "Legal",
  "/dashboard/soul": "Soul",
  "/dashboard/marketplace": "Marketplace",
  "/dashboard/devices": "Devices",
  "/dashboard/timeline": "Timeline",
  "/dashboard/settings": "Settings",
};

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
  const exactMatch = pathname === href;
  const subMatch = href !== "/dashboard" && pathname.startsWith(href + "/");
  const active = exactMatch || subMatch;

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

function getPageTitle(pathname: string): string {
  let p = pathname;
  while (p) {
    if (pathToTitle[p]) return pathToTitle[p];
    const lastSlash = p.lastIndexOf("/");
    if (lastSlash <= 0) break;
    p = p.slice(0, lastSlash);
  }
  return "Zenita";
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <div className="flex min-h-screen min-w-0">
      {/* Sidebar: hidden on mobile, visible from md */}
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-[260px] flex-col border-r border-slate-700/50 bg-crm-sidebar md:flex">
        <Link
          href="/dashboard"
          className="flex h-14 md:h-16 items-center gap-2 border-b border-slate-700/50 px-4"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-crm bg-zenita-primary text-white font-bold text-sm">
            Z
          </div>
          <span className="text-lg font-semibold text-white">Zenita</span>
        </Link>
        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
        <div className="border-t border-slate-700/50 p-3 space-y-2">
          <p className="text-xs text-slate-500">Zenita.app</p>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-crm px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-crm-sidebar-hover hover:text-white"
          >
            <span aria-hidden>⎋</span>
            Log out
          </Link>
        </div>
      </aside>

      {/* Main: full width on mobile (with bottom nav padding), sidebar margin from md */}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col pb-20 md:ml-[260px] md:pb-0">
        <header className="sticky top-0 z-20 flex h-14 md:h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm md:px-6">
          <h1 className="truncate text-lg font-semibold text-gray-900 md:text-xl">
            {pageTitle}
          </h1>
          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            <div className="hidden sm:block">
              <input
                type="search"
                placeholder="Search..."
                className="w-36 rounded-crm border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-1 focus:ring-zenita-primary md:w-48"
              />
            </div>
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-zenita-primary md:hidden"
            >
              Log out
            </Link>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zenita-primary/20 text-sm font-semibold text-zenita-primary">
              U
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 p-4 md:p-6">{children}</main>
      </div>

      {/* Bottom nav: mobile only */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-slate-200 bg-white py-2 pb-[env(safe-area-inset-bottom)] md:hidden"
        aria-label="Main navigation"
      >
        {bottomNavItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-2 py-3 text-xs font-medium transition-colors active:opacity-80 ${
                active
                  ? "text-zenita-primary"
                  : "text-slate-500 hover:bg-slate-50 hover:text-gray-900"
              }`}
            >
              <span className="text-lg leading-none" aria-hidden>
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
