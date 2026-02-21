const events = [
  { id: 1, date: "Today, 15:30", title: "Annual health check", type: "Health" },
  { id: 2, date: "Today, 09:00", title: "Logged weight: 74.2 kg", type: "Health" },
  { id: 3, date: "Yesterday", title: "Added document: Lab results", type: "Documents" },
  { id: 4, date: "Yesterday", title: "Mentor session: Career direction", type: "Mentor" },
  { id: 5, date: "17 Feb", title: "Salary received €3,200", type: "Financial" },
  { id: 6, date: "16 Feb", title: "Reflection: Calm day", type: "Soul" },
];

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Timeline</h2>
        <p className="mt-1 text-sm text-slate-500">
          Recent activity across your life areas
        </p>
        <ul className="mt-4 space-y-0">
          {events.map((e) => (
            <li key={e.id} className="flex gap-4 border-l-2 border-slate-200 pl-4 pb-5 last:pb-0">
              <div className="mt-1.5 h-2 w-2 shrink-0 -translate-x-[21px] rounded-full bg-zenita-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{e.title}</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="text-xs text-slate-500">{e.date}</span>
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                    {e.type}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
