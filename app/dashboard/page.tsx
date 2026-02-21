"use client";

import Link from "next/link";
import { AppleWatchBadge } from "@/components/AppleWatchBadge";
import { AIChatPanel } from "@/components/AIChatPanel";
import {
  AIInsightsModalProvider,
  AISuggestionButtons,
} from "@/components/AIInsightsModal";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Watch, Sparkles } from "lucide-react";
import { dummyDocuments } from "@/lib/dummy-documents";

const aiInsights = {
  summary:
    "Based on your data: sleep is slightly below goal (7.4h). Steps and meditation are on track. One legal reminder (passport) in March. I can help you plan the week or adjust goals.",
};

const dummyHealth = {
  weightKg: 74.2,
  restingHeartRate: 63,
  sleepHours: 7.4,
  stepsToday: 8460,
  bloodPressure: "118/76",
  meditationStreak: 7,
};

const dummyAppointments = [
  { id: 1, title: "Annual health check", date: "Today · 15:30", type: "Health" },
  { id: 2, title: "Team stand-up", date: "Today · 09:00", type: "Work" },
  { id: 3, title: "Physiotherapist", date: "Thu 20 Feb · 09:00", type: "Health" },
  { id: 4, title: "Mentor session", date: "Fri 28 Feb · 10:00", type: "Mentor" },
  { id: 5, title: "Dentist check-up", date: "Mon 3 Mar · 14:00", type: "Health" },
];

const connectedDevices = [
  { name: "Apple Watch", model: "Series 9", connected: true, lastSync: "Just now" },
  { name: "iPhone Health", model: "Health app", connected: true, lastSync: "2 min ago" },
  { name: "Smart scale", model: "Withings", connected: false, lastSync: "5 days ago" },
];

const connectedWearable = connectedDevices[0];

/** Right-side global widgets (spec: Daily Score, Financial Health, Sleep, Alcohol, Hydration, Focus, Legal Alerts, Device Status) */
const globalWidgets = {
  dailyScore: 72,
  dailyScoreTrend: "+5 vs yesterday",
  weeklyFinancialHealth: "Good",
  weeklyFinancialDetail: "€2,100 saved this month",
  sleepQuality: "7.4h · OK",
  sleepTrend: "Best: Sat 8.2h",
  alcoholIntake: "0 glasses today",
  alcoholWeek: "3 this week",
  hydrationLevel: 68,
  hydrationGoal: "2.1 L / 2.5 L",
  focusScore: 6,
  focusNote: "Peak: 10:00–12:00",
  legalAlerts: 1,
  legalDetail: "Passport renewal Mar 2026",
  deviceStatus: "2 connected",
  deviceNote: "1 not synced",
  weeklySteps: 62480,
  meditationStreak: 7,
};

const stats = [
  {
    label: "Weight",
    value: `${dummyHealth.weightKg} kg`,
    sub: "−0.4 kg vs last week",
    accent: "teal",
    source: null as string | null,
  },
  {
    label: "Heart rate",
    value: `${dummyHealth.restingHeartRate} bpm`,
    sub: "Stable",
    accent: "teal",
    source: "apple_watch",
  },
  {
    label: "Sleep",
    value: `${dummyHealth.sleepHours}h`,
    sub: "Below 8h goal",
    accent: "amber",
    source: null as string | null,
  },
  {
    label: "Steps today",
    value: dummyHealth.stepsToday.toLocaleString(),
    sub: "Goal 8,000 · 106%",
    accent: "teal",
    source: "apple_watch",
  },
  {
    label: "Documents",
    value: "12",
    sub: "This month",
    accent: "indigo",
    source: null as string | null,
  },
  {
    label: "Meditation",
    value: `${dummyHealth.meditationStreak} days`,
    sub: "Current streak",
    accent: "emerald",
    source: null as string | null,
  },
];

const quickActions = [
  { label: "Add health measurement", href: "/dashboard/health/add" },
  { label: "Upload document", href: "/dashboard/documents/upload" },
  { label: "Log reflection", href: "/dashboard/soul" },
  { label: "View timeline", href: "/dashboard/timeline" },
  { label: "Zenita Core", href: "/dashboard/core" },
  { label: "Agenda", href: "/dashboard/agenda" },
];

const widgetCards = [
  { label: "Daily Score", value: globalWidgets.dailyScore, sub: globalWidgets.dailyScoreTrend, highlight: true },
  { label: "Weekly Financial Health", value: globalWidgets.weeklyFinancialHealth, sub: globalWidgets.weeklyFinancialDetail },
  { label: "Sleep Quality", value: globalWidgets.sleepQuality, sub: globalWidgets.sleepTrend },
  { label: "Alcohol Intake", value: globalWidgets.alcoholIntake, sub: globalWidgets.alcoholWeek },
  { label: "Hydration Level", value: `${globalWidgets.hydrationLevel}%`, sub: globalWidgets.hydrationGoal, hasBar: true, barPct: globalWidgets.hydrationLevel },
  { label: "Focus Score", value: `${globalWidgets.focusScore}/10`, sub: globalWidgets.focusNote },
  { label: "Weekly Steps", value: globalWidgets.weeklySteps.toLocaleString(), sub: "~8,900/day avg" },
  { label: "Meditation Streak", value: `${globalWidgets.meditationStreak} days`, sub: "Keep it up" },
  { label: "Legal Alerts", value: `${globalWidgets.legalAlerts} upcoming`, sub: globalWidgets.legalDetail },
  { label: "Device Status", value: globalWidgets.deviceStatus, sub: globalWidgets.deviceNote },
];

export default function DashboardHomePage() {
  return (
    <AIInsightsModalProvider>
    <div className="flex min-h-0 min-w-0">
      {/* Fixed left sidebar: AI insights + chat (desktop) */}
      <aside
        id="ai-panel"
        className="fixed left-0 top-16 z-10 hidden h-[calc(100vh-4rem)] w-80 flex-col border-r border-border bg-background lg:flex"
        aria-label="AI assistant"
      >
        <div className="flex h-full flex-col overflow-hidden">
          <div className="shrink-0 border-b border-border bg-muted px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zenita-primary text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold text-foreground">AI insights</span>
            </div>
            <p className="mt-2 text-sm text-foreground">{aiInsights.summary}</p>
            <div className="mt-3">
              <AISuggestionButtons variant="compact" />
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-hidden">
            <AIChatPanel compact maxHeight="100%" className="h-full border-0 rounded-none" />
          </div>
        </div>
      </aside>

      {/* Main content: ruimte links voor sidebar op desktop */}
      <div className="min-w-0 flex-1 flex flex-col gap-6 lg:ml-80">
      {/* Widget cards: horizontaal bovenaan, volle breedte */}
      <section aria-label="Key metrics" className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
        {widgetCards.map((w) => (
          <div key={w.label} className="card p-3 sm:p-4">
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:text-xs">
              {w.label}
            </p>
            <p className={`mt-1 text-lg font-bold sm:text-xl ${w.highlight ? "text-zenita-primary" : "text-foreground"}`}>
              {w.value}
            </p>
            {w.hasBar ? (
              <>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-sky-500"
                      style={{ width: `${w.barPct}%` }}
                    />
                  </div>
                </div>
                <p className="mt-1.5 text-[10px] text-muted-foreground sm:text-xs">{w.sub}</p>
              </>
            ) : (
              <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{w.sub}</p>
            )}
          </div>
        ))}
      </section>

      <div className="min-w-0 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
          <GlowingCard key={i} noGlow>
          <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </span>
              {stat.source === "apple_watch" && <AppleWatchBadge />}
            </div>
            <div className="mt-1 text-2xl font-bold text-foreground">{stat.value}</div>
            <div
              className={`mt-1 text-xs ${
                stat.accent === "teal"
                  ? "text-zenita-primary"
                  : stat.accent === "amber"
                    ? "text-amber-400"
                    : stat.accent === "emerald"
                      ? "text-emerald-500"
                      : "text-indigo-400"
              }`}
            >
              {stat.sub}
            </div>
            <div
              className={`mt-3 h-1 w-12 rounded-full ${
                stat.accent === "teal"
                  ? "bg-zenita-primary"
                  : stat.accent === "amber"
                    ? "bg-amber-500"
                    : stat.accent === "emerald"
                      ? "bg-emerald-500"
                      : "bg-indigo-500"
              }`}
            />
          </GlowingCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlowingCard className="lg:col-span-2">
          <h2 className="text-base font-semibold text-foreground">
            Today&apos;s overview
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Key health metrics, upcoming appointments and recent documents.
          </p>

          <div className="mt-4 md:mt-5 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-secondary p-4">
              <div className="text-xs font-medium text-muted-foreground">Weight</div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                {dummyHealth.weightKg.toFixed(1)} kg
              </div>
              <div className="mt-1 text-xs text-zenita-primary">
                −0.4 kg vs last week
              </div>
            </div>
            <div className="card-secondary p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Resting heart rate
                </span>
                <AppleWatchBadge />
              </div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                {dummyHealth.restingHeartRate} bpm
              </div>
              <div className="mt-1 text-xs text-zenita-primary">
                Stable · from wearable
              </div>
            </div>
            <div className="card-secondary p-4">
              <div className="text-xs font-medium text-muted-foreground">Sleep</div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                {dummyHealth.sleepHours.toFixed(1)} h
              </div>
              <div className="mt-1 text-xs text-amber-400">
                Slightly below 8h goal
              </div>
            </div>
            <div className="card-secondary p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-muted-foreground">Steps today</span>
                <AppleWatchBadge />
              </div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                {dummyHealth.stepsToday.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-zenita-primary">
                Goal 8,000 · 106%
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Upcoming appointments
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground">
                {dummyAppointments.map((appt) => (
                  <li
                    key={appt.id}
                    className="flex items-center justify-between gap-2 rounded-crm bg-muted px-3 py-2.5"
                  >
                    <span className="min-w-0 truncate">{appt.title}</span>
                    <span className="shrink-0 rounded-full bg-zenita-primary/10 px-2 py-0.5 text-[10px] font-medium text-zenita-primary">
                      {appt.type}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">{appt.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Recent documents
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground">
                {dummyDocuments.slice(0, 5).map((doc) => (
                  <li key={doc.id}>
                    <Link
                      href={`/dashboard/documents/${doc.id}`}
                      className="flex items-center justify-between rounded-crm bg-muted px-3 py-2.5 transition-colors hover:bg-border active:bg-border"
                    >
                      <span className="truncate pr-3">{doc.name}</span>
                      <span className="rounded-full bg-zenita-primary/20 px-2 py-0.5 text-xs font-medium text-zenita-primary shrink-0">
                        {doc.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlowingCard>

        <section className="space-y-4 md:space-y-5">
          <GlowingCard>
            <h2 className="text-base font-semibold text-foreground">
              Connected devices
            </h2>
            <ul className="mt-3 space-y-2">
              {connectedDevices.map((device) => (
                <li
                  key={device.name}
                  className="flex items-center gap-3 rounded-crm bg-muted px-3 py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background" aria-hidden>
                    <Watch className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{device.name}</p>
                    <p className="text-xs text-muted-foreground">{device.model} · {device.lastSync}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      device.connected
                        ? "bg-zenita-primary/20 text-zenita-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {device.connected ? "Connected" : "Not synced"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Heart rate and activity sync from connected wearables.
            </p>
          </GlowingCard>
          {/* Short AI teaser on desktop: points to chat in panel */}
          <div className="hidden lg:block">
            <Link
              href="#ai-panel"
              className="card flex items-center gap-3 rounded-crm border border-border bg-muted/50 p-3 transition-colors hover:bg-muted"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zenita-primary/20">
                <Sparkles className="h-4 w-4 text-zenita-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">From your AI</p>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {aiInsights.summary}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium text-zenita-primary">Chat in sidebar ←</span>
            </Link>
          </div>
          <GlowingCard>
            <h2 className="text-base font-semibold text-foreground">
              Quick actions
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-foreground">
              {quickActions.map((action) => (
                <li key={action.href}>
                  <Link
                    href={action.href}
                    className="block rounded-crm px-3 py-2.5 hover:bg-muted active:bg-muted"
                  >
                    {action.label}
                  </Link>
                </li>
              ))}
            </ul>
          </GlowingCard>

          {/* AI insights + chat on mobile (in main column) */}
          <GlowingCard className="lg:hidden">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zenita-primary/20">
                <Sparkles className="h-4 w-4 text-zenita-primary" />
              </div>
              <h2 className="text-base font-semibold text-foreground">AI insights</h2>
            </div>
            <p className="mt-3 text-sm text-foreground">{aiInsights.summary}</p>
            <div className="mt-4">
              <AISuggestionButtons />
            </div>
            <div className="mt-4">
              <AIChatPanel compact maxHeight="280px" />
            </div>
          </GlowingCard>
        </section>
      </div>
      </div>
      </div>
    </div>
    </AIInsightsModalProvider>
  );
}
