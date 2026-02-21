const latestMetrics = {
  weightKg: 74.2,
  systolic: 118,
  diastolic: 76,
  heartRate: 63,
  sleepHours: 7.4,
  steps: 8460,
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
      <header>
        <h1 className="text-lg font-semibold text-slate-50">Health</h1>
        <p className="text-sm text-slate-400">
          Insight into your key measurements and appointments.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Latest measurement
          </h2>
          <dl className="mt-3 space-y-2 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Weight</dt>
              <dd className="font-medium text-slate-50">
                {latestMetrics.weightKg.toFixed(1)} kg
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Blood pressure</dt>
              <dd className="font-medium text-slate-50">
                {latestMetrics.systolic}/{latestMetrics.diastolic} mmHg
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Resting heart rate</dt>
              <dd className="font-medium text-slate-50">
                {latestMetrics.heartRate} bpm
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Sleep (last night)</dt>
              <dd className="font-medium text-slate-50">
                {latestMetrics.sleepHours.toFixed(1)} h
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-400">Steps (today)</dt>
              <dd className="font-medium text-slate-50">
                {latestMetrics.steps.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Weekly steps trend
          </h2>
          <div className="mt-3 flex items-end gap-2">
            {weeklyTrend.map((day) => {
              const height = Math.max(16, Math.round((day.value / maxSteps) * 72));
              return (
                <div key={day.label} className="flex flex-1 flex-col items-center">
                  <div
                    style={{ height }}
                    className="w-full rounded-t-md bg-emerald-500/80"
                  />
                  <span className="mt-1 text-[11px] text-slate-400">
                    {day.label}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            Goal: 8,000 steps/day · Best day: Sat (
            {weeklyTrend
              .find((d) => d.value === maxSteps)
              ?.value.toLocaleString()}{" "}
            steps)
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Upcoming appointments
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {healthAppointments.map((appt) => (
              <li
                key={appt.id}
                className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-slate-50">
                    {appt.title}
                  </span>
                  <span className="text-xs text-slate-400">{appt.date}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{appt.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

