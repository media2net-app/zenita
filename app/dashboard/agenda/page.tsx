const upcoming = [
  { id: 1, title: "Annual health check", date: "Today", time: "15:30", type: "Health" },
  { id: 2, title: "Team stand-up", date: "Wed 19 Feb", time: "09:00", type: "Work" },
  { id: 3, title: "Physiotherapist", date: "Thu 20 Feb", time: "09:00", type: "Health" },
  { id: 4, title: "Mentor session", date: "Fri 28 Feb", time: "10:00", type: "Mentor" },
];

const week = [
  { day: "Mon 17", count: 2 },
  { day: "Tue 18", count: 0 },
  { day: "Wed 19", count: 1 },
  { day: "Thu 20", count: 1 },
  { day: "Fri 21", count: 0 },
];

export default function AgendaPage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Upcoming</h2>
        <ul className="mt-3 space-y-1.5">
          {upcoming.map((e) => (
            <li
              key={e.id}
              className="flex items-center justify-between gap-3 rounded-crm bg-slate-50 px-3 py-2.5"
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900">{e.title}</p>
                <p className="text-xs text-slate-500">
                  {e.date} · {e.time}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary">
                {e.type}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">This week</h2>
        <div className="mt-3 flex gap-2">
          {week.map((d) => (
            <div
              key={d.day}
              className="flex flex-1 flex-col items-center rounded-crm bg-slate-50 py-3"
            >
              <span className="text-xs font-medium text-slate-500">{d.day.slice(0, 3)}</span>
              <span className="mt-1 text-lg font-semibold text-gray-900">{d.count}</span>
              <span className="text-[10px] text-slate-400">events</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
