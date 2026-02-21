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
      <header>
        <h1 className="text-lg font-semibold text-slate-50">Documents</h1>
        <p className="text-sm text-slate-400">
          Secure storage and quick access to your important documents.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Recently added
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {recentDocs.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-slate-50">{doc.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Added {doc.added}
                  </p>
                </div>
                <span className="ml-3 whitespace-nowrap rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200">
                  {doc.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Folders &amp; tags
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {folders.map((folder) => (
              <li
                key={folder.id}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <span>{folder.name}</span>
                <span className="text-xs text-slate-400">
                  {folder.count} documents
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-slate-400">
            Example structure – in the real app you&apos;ll create your own
            folders and tags.
          </p>
        </div>
      </section>
    </div>
  );
}

