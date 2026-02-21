const dummyHealth = {
  weightKg: 74.2,
  restingHeartRate: 63,
  sleepHours: 7.4,
};

const dummyAppointments = [
  {
    id: 1,
    title: "Annual health check",
    date: "Today · 15:30",
  },
  {
    id: 2,
    title: "Physiotherapist",
    date: "Thu · 09:00",
  },
];

const dummyDocuments = [
  {
    id: 1,
    name: "Health insurance policy 2026.pdf",
    tag: "Health",
  },
  {
    id: 2,
    name: "Lab results – bloodwork.pdf",
    tag: "Health",
  },
  {
    id: 3,
    name: "ID card scan.png",
    tag: "Personal",
  },
];

export default function DashboardHomePage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <section className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-sm font-semibold text-slate-200">
          Today&apos;s overview
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          At a glance: your key health metrics, upcoming appointments and recent
          documents.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs font-medium text-slate-400">Weight</div>
            <div className="mt-1 text-lg font-semibold text-slate-50">
              {dummyHealth.weightKg.toFixed(1)} kg
            </div>
            <div className="mt-1 text-[11px] text-emerald-400">
              −0.4 kg vs last week
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs font-medium text-slate-400">
              Resting heart rate
            </div>
            <div className="mt-1 text-lg font-semibold text-slate-50">
              {dummyHealth.restingHeartRate} bpm
            </div>
            <div className="mt-1 text-[11px] text-emerald-400">
              Stable this week
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs font-medium text-slate-400">Sleep</div>
            <div className="mt-1 text-lg font-semibold text-slate-50">
              {dummyHealth.sleepHours.toFixed(1)} h
            </div>
            <div className="mt-1 text-[11px] text-amber-400">
              Slightly below 8h goal
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Upcoming appointments
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              {dummyAppointments.map((appt) => (
                <li
                  key={appt.id}
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
                >
                  <span>{appt.title}</span>
                  <span className="text-xs text-slate-400">{appt.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Recent documents
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              {dummyDocuments.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
                >
                  <span className="truncate pr-3">{doc.name}</span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200">
                    {doc.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-sm font-semibold text-slate-200">Quick actions</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li className="cursor-pointer rounded-lg bg-slate-800/60 px-3 py-2 hover:bg-slate-800">
            Add health measurement
          </li>
          <li className="cursor-pointer rounded-lg bg-slate-800/60 px-3 py-2 hover:bg-slate-800">
            Upload document
          </li>
        </ul>
      </section>
    </div>
  );
}

