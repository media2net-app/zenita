import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getFolderById,
  getDocumentsByFolderId,
  type DummyDocument,
} from "@/lib/dummy-documents";

type Props = { params: Promise<{ folderId: string }> };

function DocumentRow({ doc }: { doc: DummyDocument }) {
  return (
    <Link
      href={`/dashboard/documents/${doc.id}`}
      className="flex items-center justify-between rounded-crm bg-muted px-3 py-2.5 transition-colors hover:bg-border active:bg-border"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-foreground">{doc.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">Added {doc.added}</p>
      </div>
      <span className="ml-3 shrink-0 text-xs text-muted-foreground">{doc.size}</span>
    </Link>
  );
}

export default async function FolderPage({ params }: Props) {
  const { folderId } = await params;
  const folder = getFolderById(folderId);
  if (!folder) notFound();

  const documents = getDocumentsByFolderId(folderId);

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/dashboard/documents"
          className="hover:text-zenita-primary"
        >
          Documents
        </Link>
        <span aria-hidden>/</span>
        <span className="font-medium text-foreground">{folder.name}</span>
      </nav>

      <div className="card min-w-0 p-4 md:p-5">
        <h1 className="text-lg font-semibold text-foreground md:text-xl">
          {folder.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {documents.length} document{documents.length !== 1 ? "s" : ""} in this folder
        </p>

        {documents.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">
            No documents in this folder yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-1.5 text-sm text-foreground">
            {documents.map((doc) => (
              <li key={doc.id}>
                <DocumentRow doc={doc} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
