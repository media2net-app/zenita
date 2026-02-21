const devices = [
  { id: 1, name: "Apple Watch", model: "Series 9", status: "Connected", lastSync: "Just now", icon: "⌚" },
  { id: 2, name: "iPhone", model: "Health app", status: "Connected", lastSync: "2 min ago", icon: "📱" },
  { id: 3, name: "Fitbit", model: "Charge 6", status: "Not connected", lastSync: "3 days ago", icon: "⌚" },
];

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Connected devices</h2>
        <p className="mt-1 text-sm text-slate-500">
          Devices that sync data with Zenita.app
        </p>
        <ul className="mt-4 space-y-3">
          {devices.map((d) => (
            <li
              key={d.id}
              className="flex items-center gap-3 rounded-crm bg-slate-50 p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-lg">
                {d.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900">{d.name}</p>
                <p className="text-xs text-slate-500">
                  {d.model} · {d.lastSync}
                </p>
              </div>
              <span
                className={
                  d.status === "Connected"
                    ? "rounded-full bg-zenita-primary/10 px-2 py-0.5 text-xs font-medium text-zenita-primary"
                    : "rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600"
                }
              >
                {d.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
