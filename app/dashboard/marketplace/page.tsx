const categories = [
  { id: 1, name: "Health & wellness", count: 12 },
  { id: 2, name: "Finance & legal", count: 8 },
  { id: 3, name: "Learning", count: 5 },
];

const featured = [
  { id: 1, title: "Meditation basics", provider: "Zenita Guides", type: "Course" },
  { id: 2, title: "Tax checklist 2026", provider: "Legal hub", type: "Template" },
  { id: 3, title: "Sleep routine planner", provider: "Health", type: "Tool" },
];

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Categories</h2>
        <ul className="mt-3 space-y-1.5">
          {categories.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5"
            >
              <span className="font-medium text-gray-900">{c.name}</span>
              <span className="text-xs text-slate-500">{c.count} items</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-gray-900">Featured</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <div
              key={f.id}
              className="rounded-crm border border-slate-200 bg-white p-4 transition-colors hover:border-zenita-primary/50"
            >
              <p className="font-medium text-gray-900">{f.title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{f.provider}</p>
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                {f.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
