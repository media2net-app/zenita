const recentDocs = [
  {
    id: 1,
    name: "Health insurance policy 2026.pdf",
    category: "Health",
    added: "2 days ago",
  },
  {
    id: 2,
    name: "Lab results – bloodwork.pdf",
    category: "Health",
    added: "5 days ago",
  },
  {
    id: 3,
    name: "ID card scan.png",
    category: "Personal",
    added: "1 week ago",
  },
];

const folders = [
  {
    id: 1,
    name: "Health",
    count: 12,
  },
  {
    id: 2,
    name: "Finance",
    count: 24,
  },
  {
    id: 3,
    name: "Work",
    count: 18,
  },
  {
    id: 4,
    name: "Personal",
    count: 9,
  },
];

export default function DocumentsOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Recently added
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            {recentDocs.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-gray-900">{doc.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Added {doc.added}
                  </p>
                </div>
                <span className="ml-3 whitespace-nowrap rounded-full bg-zenita-docs/10 px-2 py-0.5 text-xs font-medium text-zenita-docs">
                  {doc.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Folders &amp; tags
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            {folders.map((folder) => (
              <li
                key={folder.id}
                className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5"
              >
                <span>{folder.name}</span>
                <span className="text-xs text-slate-500">
                  {folder.count} documents
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Example structure – create your own folders and tags in the app.
          </p>
        </div>
      </section>
    </div>
  );
}

