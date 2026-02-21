const documents = [
  { id: 1, name: "Rental contract", expiry: "30 Jun 2026", status: "Valid" },
  { id: 2, name: "Insurance liability", expiry: "31 Dec 2026", status: "Valid" },
  { id: 3, name: "Will (draft)", expiry: "—", status: "Draft" },
];

const reminders = [
  { id: 1, task: "Renew passport", due: "Mar 2026" },
  { id: 2, task: "Review insurance", due: "Nov 2026" },
];

export default function LegalPage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Legal documents</h2>
        <ul className="mt-3 space-y-1.5">
          {documents.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between gap-3 rounded-crm bg-slate-50 px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{d.name}</p>
                <p className="text-xs text-slate-500">Expires {d.expiry}</p>
              </div>
              <span
                className={
                  d.status === "Valid"
                    ? "rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary"
                    : "rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700"
                }
              >
                {d.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Reminders</h2>
        <ul className="mt-3 space-y-2">
          {reminders.map((r) => (
            <li key={r.id} className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5">
              <span className="text-sm text-gray-900">{r.task}</span>
              <span className="text-xs text-slate-500">{r.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
