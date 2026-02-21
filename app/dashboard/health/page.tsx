import { AppleWatchBadge } from "@/components/AppleWatchBadge";

const latestMetrics = {
  weightKg: 74.2,
  systolic: 118,
  diastolic: 76,
  heartRate: 63,
  sleepHours: 7.4,
  steps: 8460,
};

const connectedWearable = {
  name: "Apple Watch",
  model: "Series 9",
  lastSync: "Just now",
};

const weeklyTrend = [
  { label: "Mon", value: 7200 },
  { label: "Tue", value: 9650 },
  { label: "Wed", value: 8100 },
  { label: "Thu", value: 10230 },
  { label: "Fri", value: 6800 },
  { label: "Sat", value: 12040 },
  { label: "Sun", value: 9340 },
];

const healthAppointments = [
  {
    id: 1,
    title: "Annual health check",
    date: "Today · 15:30",
    location: "City clinic · Room 3",
  },
  {
    id: 2,
    title: "Physiotherapist",
    date: "Thu · 09:00",
    location: "FlexMove Physio",
  },
];

export default function HealthOverviewPage() {
  const maxSteps = Math.max(...weeklyTrend.map((d) => d.value));

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 gap-y-2 sm:gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white text-lg" aria-hidden>
              ⌚
            </div>
            <div>
              <p className="font-medium text-gray-900">{connectedWearable.name} connected</p>
              <p className="text-xs text-slate-500">{connectedWearable.model} · Synced {connectedWearable.lastSync.toLowerCase()}</p>
            </div>
          </div>
          <AppleWatchBadge />
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card min-w-0 p-4 md:p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Latest measurement
          </h2>
          <dl className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Weight</dt>
              <dd className="font-medium text-gray-900">
                {latestMetrics.weightKg.toFixed(1)} kg
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Blood pressure</dt>
              <dd className="font-medium text-gray-900">
                {latestMetrics.systolic}/{latestMetrics.diastolic} mmHg
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="flex items-center gap-1.5 text-gray-500">
                Resting heart rate
                <AppleWatchBadge />
              </dt>
              <dd className="font-medium text-gray-900">
                {latestMetrics.heartRate} bpm
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Sleep (last night)</dt>
              <dd className="font-medium text-gray-900">
                {latestMetrics.sleepHours.toFixed(1)} h
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="flex items-center gap-1.5 text-gray-500">
                Steps (today)
                <AppleWatchBadge />
              </dt>
              <dd className="font-medium text-gray-900">
                {latestMetrics.steps.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>

        <div className="card min-w-0 p-4 md:p-5">
          <h2 className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Weekly steps trend
            <AppleWatchBadge />
          </h2>
          <div className="mt-3 flex items-end gap-2">
            {weeklyTrend.map((day) => {
              const height = Math.max(16, Math.round((day.value / maxSteps) * 72));
              return (
                <div key={day.label} className="flex flex-1 flex-col items-center">
                  <div
                    style={{ height }}
                    className="w-full rounded-t bg-zenita-primary"
                  />
                  <span className="mt-1 text-[11px] text-slate-500">
                    {day.label}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Goal: 8,000 steps/day · Best day: Sat (
            {weeklyTrend
              .find((d) => d.value === maxSteps)
              ?.value.toLocaleString()}{" "}
            steps). Data from Apple Watch.
          </p>
        </div>

        <div className="card min-w-0 p-4 md:p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Upcoming appointments
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            {healthAppointments.map((appt) => (
              <li
                key={appt.id}
                className="rounded-crm bg-slate-50 px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-gray-900">
                    {appt.title}
                  </span>
                  <span className="text-xs text-gray-500">{appt.date}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{appt.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
