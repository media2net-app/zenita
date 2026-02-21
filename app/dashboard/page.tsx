import Link from "next/link";
import { AppleWatchBadge } from "@/components/AppleWatchBadge";
import { dummyDocuments } from "@/lib/dummy-documents";

const dummyHealth = {
  weightKg: 74.2,
  restingHeartRate: 63,
  sleepHours: 7.4,
};

const dummyAppointments = [
  { id: 1, title: "Annual health check", date: "Today · 15:30" },
  { id: 2, title: "Physiotherapist", date: "Thu · 09:00" },
];

const connectedWearable = {
  name: "Apple Watch",
  model: "Series 9",
  connected: true,
  lastSync: "Just now",
};

/** Right-side global widgets (spec: Daily Score, Financial Health, Sleep, Alcohol, Hydration, Focus, Legal Alerts, Device Status) */
const globalWidgets = {
  dailyScore: 72,
  weeklyFinancialHealth: "Good",
  sleepQuality: "7.4h · OK",
  alcoholIntake: "0 glasses today",
  hydrationLevel: 68,
  focusScore: 6,
  legalAlerts: 1,
  deviceStatus: "1 connected",
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
    label: "Documents",
    value: "12",
    sub: "This month",
    accent: "indigo",
    source: null as string | null,
  },
];

export default function DashboardHomePage() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      {/* Main content */}
      <div className="min-w-0 flex-1 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card p-4 md:p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </span>
              {stat.source === "apple_watch" && <AppleWatchBadge />}
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</div>
            <div
              className={`mt-1 text-xs ${
                stat.accent === "teal"
                  ? "text-zenita-primary"
                  : stat.accent === "amber"
                    ? "text-amber-600"
                    : "text-indigo-600"
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
                    : "bg-indigo-500"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="card lg:col-span-2 p-4 md:p-5">
          <h2 className="text-base font-semibold text-gray-900">
            Today&apos;s overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Key health metrics, upcoming appointments and recent documents.
          </p>

          <div className="mt-4 md:mt-5 grid gap-3 grid-cols-1 sm:grid-cols-3">
            <div className="card-secondary p-4">
              <div className="text-xs font-medium text-slate-500">Weight</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {dummyHealth.weightKg.toFixed(1)} kg
              </div>
              <div className="mt-1 text-xs text-zenita-primary">
                −0.4 kg vs last week
              </div>
            </div>
            <div className="card-secondary p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">
                  Resting heart rate
                </span>
                <AppleWatchBadge />
              </div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {dummyHealth.restingHeartRate} bpm
              </div>
              <div className="mt-1 text-xs text-zenita-primary">
                Stable this week · from wearable
              </div>
            </div>
            <div className="card-secondary p-4">
              <div className="text-xs font-medium text-slate-500">Sleep</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {dummyHealth.sleepHours.toFixed(1)} h
              </div>
              <div className="mt-1 text-xs text-amber-600">
                Slightly below 8h goal
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Upcoming appointments
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                {dummyAppointments.map((appt) => (
                  <li
                    key={appt.id}
                    className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5"
                  >
                    <span>{appt.title}</span>
                    <span className="text-xs text-slate-500">{appt.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Recent documents
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                {dummyDocuments.slice(0, 3).map((doc) => (
                  <li key={doc.id}>
                    <Link
                      href={`/dashboard/documents/${doc.id}`}
                      className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5 transition-colors hover:bg-slate-100 active:bg-slate-100"
                    >
                      <span className="truncate pr-3">{doc.name}</span>
                      <span className="rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary shrink-0">
                        {doc.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <div className="card p-4 md:p-5">
            <h2 className="text-base font-semibold text-gray-900">
              Connected devices
            </h2>
            <div className="mt-3 flex items-center gap-3 rounded-crm bg-slate-50 px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white text-lg" aria-hidden>
                ⌚
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900">{connectedWearable.name}</p>
                <p className="text-xs text-slate-500">{connectedWearable.model} · {connectedWearable.lastSync}</p>
              </div>
              <span className="rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary">
                Connected
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Heart rate and activity sync from Apple Watch.
            </p>
          </div>
          <div className="card p-4 md:p-5">
            <h2 className="text-base font-semibold text-gray-900">
              Quick actions
            </h2>
<ul className="mt-3 space-y-1 text-sm text-gray-700">
            <li>
              <Link
                href="/dashboard/health/add"
                className="block rounded-crm px-3 py-2.5 hover:bg-slate-50 active:bg-slate-100"
              >
                Add health measurement
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/documents/upload"
                className="block rounded-crm px-3 py-2.5 hover:bg-slate-50 active:bg-slate-100"
              >
                Upload document
              </Link>
            </li>
          </ul>
          </div>
        </section>
      </div>
      </div>

      {/* Right-side panel: global widgets (desktop only) */}
      <aside
        className="hidden w-full shrink-0 flex-col gap-3 lg:flex lg:w-72 lg:gap-4"
        aria-label="Global widgets"
      >
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Daily Score</p>
          <p className="mt-1 text-2xl font-bold text-zenita-primary">{globalWidgets.dailyScore}</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Weekly Financial Health</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.weeklyFinancialHealth}</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Sleep Quality</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.sleepQuality}</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Alcohol Intake</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.alcoholIntake}</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Hydration Level</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-sky-500"
                style={{ width: `${globalWidgets.hydrationLevel}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{globalWidgets.hydrationLevel}%</span>
          </div>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Focus Score</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.focusScore}/10</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Legal Alerts</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.legalAlerts} upcoming</p>
        </div>
        <div className="card p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Device Status</p>
          <p className="mt-1 font-semibold text-gray-900">{globalWidgets.deviceStatus}</p>
        </div>
      </aside>
    </div>
  );
}
