const reflections = [
  { id: 1, date: "Today", mood: "Calm", note: "Started the day with a short meditation. Feeling focused." },
  { id: 2, date: "Yesterday", mood: "Grateful", note: "Good talk with mentor. Clearer on next steps." },
  { id: 3, date: "15 Feb", mood: "Tired", note: "Long week. Need to protect rest this weekend." },
];

const practices = [
  { name: "Meditation", streak: 7, unit: "days" },
  { name: "Journaling", streak: 3, unit: "days" },
];

export default function SoulPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {practices.map((p) => (
          <div key={p.name} className="card p-4 md:p-5">
            <p className="text-xs font-medium text-slate-500">{p.name}</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {p.streak} <span className="text-sm font-normal text-slate-500">{p.unit}</span>
            </p>
            <p className="mt-1 text-xs text-zenita-primary">Current streak</p>
          </div>
        ))}
      </div>

      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Recent reflections</h2>
        <ul className="mt-3 space-y-2">
          {reflections.map((r) => (
            <li key={r.id} className="rounded-crm border border-slate-100 bg-slate-50/50 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">{r.date}</span>
                <span className="rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary">
                  {r.mood}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-gray-700">{r.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
