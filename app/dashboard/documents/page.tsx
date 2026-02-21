import Link from "next/link";
import {
  dummyDocuments,
  dummyFolders,
  getDocumentCountByFolderId,
  type DummyDocument,
} from "@/lib/dummy-documents";

function DocumentRow({ doc }: { doc: DummyDocument }) {
  return (
    <Link
      href={`/dashboard/documents/${doc.id}`}
      className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5 transition-colors hover:bg-slate-100 active:bg-slate-100"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-gray-900">{doc.name}</p>
        <p className="mt-0.5 text-xs text-slate-500">Added {doc.added}</p>
      </div>
      <span className="ml-3 shrink-0 rounded-full bg-zenita-docs/10 px-2 py-0.5 text-xs font-medium text-zenita-docs">
        {doc.category}
      </span>
    </Link>
  );
}

export default function DocumentsOverviewPage() {
  const recentDocs = [...dummyDocuments].slice(0, 5);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:gap-6 lg:grid-cols-3">
        <div className="card min-w-0 p-4 md:p-5 lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Recently added
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            {recentDocs.map((doc) => (
              <li key={doc.id}>
                <DocumentRow doc={doc} />
              </li>
            ))}
          </ul>
        </div>

        <div className="card min-w-0 p-4 md:p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Folders
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
            {dummyFolders.map((folder) => {
              const count = getDocumentCountByFolderId(folder.id);
              return (
                <li key={folder.id}>
                  <Link
                    href={`/dashboard/documents/folder/${folder.id}`}
                    className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5 transition-colors hover:bg-slate-100 active:bg-slate-100"
                  >
                    <span className="font-medium text-gray-900">
                      {folder.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {count} document{count !== 1 ? "s" : ""}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Click a folder to see its documents.
          </p>
        </div>
      </section>
    </div>
  );
}
