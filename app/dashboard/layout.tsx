"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Sparkles,
  FileText,
  Calendar,
  Heart,
  Wallet,
  Scale,
  Sun,
  ShoppingBag,
  Smartphone,
  Clock,
  Settings,
  Bell,
  Watch,
  LogOut,
  Moon,
} from "lucide-react";
import { AIChatWidget } from "@/components/AIChatWidget";
import { useTheme } from "@/components/ThemeProvider";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const navItems: { href: string; label: string; icon: typeof Home }[] = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/core", label: "Core", icon: Compass },
  { href: "/dashboard/mentor", label: "Mentor", icon: Sparkles },
  { href: "/dashboard/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/agenda", label: "Agenda", icon: Calendar },
  { href: "/dashboard/health", label: "Health", icon: Heart },
  { href: "/dashboard/financial", label: "Financial", icon: Wallet },
  { href: "/dashboard/legal", label: "Legal", icon: Scale },
  { href: "/dashboard/soul", label: "Soul", icon: Sun },
  { href: "/dashboard/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/dashboard/devices", label: "Devices", icon: Smartphone },
  { href: "/dashboard/timeline", label: "Timeline", icon: Clock },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const pathToTitle: Record<string, string> = {
  "/dashboard": "Home",
  "/dashboard/core": "Core",
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

const headerUser = {
  name: "Demo User",
  initial: "D",
  dailyStatus: "green" as "green" | "yellow" | "red",
  notificationsCount: 2,
  devicesConnected: 1,
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen min-w-0 flex-col">
      {/* Main: full width, padding bottom for dock */}
      <div className="flex min-w-0 flex-1 flex-col pb-36">
        <header className={`sticky top-0 z-20 flex h-14 md:h-16 items-center justify-between gap-3 border-b px-4 shadow-sm md:px-6 ${
            theme === "dark"
              ? "border-border bg-background"
              : "border-[#0a7369] bg-[#0E9488]"
          }`}>
          <Link href="/dashboard" className="flex items-center gap-2 min-w-0">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-crm font-bold text-sm ${
                theme === "dark"
                  ? "bg-zenita-primary text-white"
                  : "bg-white/20 text-white"
              }`}
            >
              Z
            </div>
            <span
              className={`truncate text-lg font-semibold md:text-xl ${
                theme === "dark" ? "text-foreground" : "text-white"
              }`}
            >
              {pageTitle}
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <div
              className={`hidden items-center gap-1.5 rounded-crm px-2.5 py-1.5 text-xs font-medium sm:flex ${
                theme === "dark"
                  ? "bg-muted text-muted-foreground"
                  : "bg-white/20 text-white"
              }`}
              title="Connected devices"
            >
              <Watch className="h-4 w-4 shrink-0" aria-hidden />
              <span>{headerUser.devicesConnected}</span>
            </div>
            <button
              type="button"
              className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                theme === "dark"
                  ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                  : "text-white hover:bg-white/20"
              }`}
              title="Notifications"
              aria-label={`${headerUser.notificationsCount} notifications`}
            >
              <Bell className="h-5 w-5 shrink-0" aria-hidden />
              {headerUser.notificationsCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  {headerUser.notificationsCount}
                </span>
              )}
            </button>
            <Link
              href="/dashboard/mentor"
              className={`flex h-9 items-center gap-1.5 rounded-crm px-3 py-2 text-xs font-semibold transition-colors ${
                theme === "dark"
                  ? "bg-zenita-primary text-white hover:bg-teal-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              title="Quick AI"
            >
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">AI</span>
            </Link>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                theme === "dark"
                  ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                  : "text-white hover:bg-white/20"
              }`}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 shrink-0" aria-hidden />
              ) : (
                <Moon className="h-5 w-5 shrink-0" aria-hidden />
              )}
            </button>
            <span
              className={`hidden h-2.5 w-2.5 shrink-0 rounded-full sm:block ${
                headerUser.dailyStatus === "green"
                  ? "bg-emerald-500"
                  : headerUser.dailyStatus === "yellow"
                    ? "bg-amber-500"
                    : "bg-rose-500"
              }`}
              title={
                headerUser.dailyStatus === "green"
                  ? "Good day"
                  : headerUser.dailyStatus === "yellow"
                    ? "Needs attention"
                    : "Critical"
              }
              aria-label="Daily status"
            />
            <span className={`hidden text-sm font-medium md:block ${theme === "dark" ? "text-foreground" : "text-white"}`}>
              {headerUser.name}
            </span>
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                theme === "dark"
                  ? "bg-zenita-primary/20 text-zenita-primary"
                  : "bg-white/20 text-white"
              }`}
              title={headerUser.name}
              aria-hidden
            >
              {headerUser.initial}
            </div>
            <Link
              href="/"
              className={`text-sm font-medium md:hidden ${theme === "dark" ? "text-muted-foreground hover:text-zenita-primary" : "text-white hover:bg-white/20"}`}
            >
              Log out
            </Link>
          </div>
        </header>

        <main className="min-w-0 flex-1 p-4 md:p-6">{children}</main>
      </div>

      {/* Dock: fixed at bottom center */}
      <div className="fixed bottom-2 left-0 right-0 z-30 flex justify-center px-2 pb-[env(safe-area-inset-bottom)]">
        <Dock
          className="border border-border bg-muted/95 backdrop-blur-sm dark:bg-neutral-900/95"
          magnification={72}
          distance={120}
          panelHeight={56}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href + "/"));
            return (
              <Link key={item.href} href={item.href} className="contents">
                <DockItem
                  className={`aspect-square rounded-xl ${
                    active
                      ? "bg-zenita-primary/30 ring-2 ring-zenita-primary"
                      : "bg-muted hover:bg-border dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  }`}
                >
                  <DockLabel>{item.label}</DockLabel>
                  <DockIcon>
                    <Icon
                      className={`h-full w-full ${
                        active ? "text-zenita-primary" : "text-muted-foreground dark:text-neutral-300"
                      }`}
                      aria-hidden
                    />
                  </DockIcon>
                </DockItem>
              </Link>
            );
          })}
          <Link href="/" className="contents">
            <DockItem className="aspect-square rounded-xl bg-muted hover:bg-border dark:bg-neutral-800 dark:hover:bg-neutral-700">
              <DockLabel>Log out</DockLabel>
              <DockIcon>
                <LogOut className="h-full w-full text-muted-foreground dark:text-neutral-300" aria-hidden />
              </DockIcon>
            </DockItem>
          </Link>
        </Dock>
      </div>

      <AIChatWidget />
    </div>
  );
}
