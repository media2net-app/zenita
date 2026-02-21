import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocumentById, getFolderById } from "@/lib/dummy-documents";

type Props = { params: Promise<{ id: string }> };

export default async function DocumentDetailPage({ params }: Props) {
  const { id } = await params;
  const doc = getDocumentById(id);
  if (!doc) notFound();
  const folder = getFolderById(doc.folderId);

  return (
    <div className="space-y-6">
      <nav className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/dashboard/documents"
            className="hover:text-zenita-primary"
          >
            Documents
          </Link>
          {folder && (
            <>
              <span aria-hidden>/</span>
              <Link
                href={`/dashboard/documents/folder/${folder.id}`}
                className="hover:text-zenita-primary"
              >
                {folder.name}
              </Link>
              <span aria-hidden>/</span>
              <span className="truncate font-medium text-foreground">
                {doc.name}
              </span>
            </>
          )}
        </div>
        <Link
          href={folder ? `/dashboard/documents/folder/${folder.id}` : "/dashboard/documents"}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-zenita-primary shrink-0"
        >
          <span aria-hidden>←</span> Back to {folder ? folder.name : "documents"}
        </Link>
      </nav>

      <div className="card min-w-0 overflow-hidden p-0">
        <div className="border-b border-b border-border bg-muted px-4 py-4 md:px-6 md:py-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-semibold text-foreground md:text-xl">
                {doc.name}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-zenita-docs/10 px-2.5 py-0.5 text-xs font-medium text-zenita-docs">
                  {doc.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  Added {doc.added}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <span className="rounded-crm bg-muted px-3 py-1.5 text-xs text-muted-foreground border border-border">
                {doc.mimeType.split("/")[1]?.toUpperCase() ?? doc.mimeType}
              </span>
              <span className="rounded-crm bg-muted px-3 py-1.5 text-xs text-muted-foreground border border-border">
                {doc.size}
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 md:px-6 md:py-5 space-y-5">
          {doc.description && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Description
              </h2>
              <p className="mt-1.5 text-sm text-foreground">
                {doc.description}
              </p>
            </div>
          )}

          {doc.validUntil && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Valid until
              </h2>
              <p className="mt-1.5 text-sm text-foreground">
                {doc.validUntil}
              </p>
            </div>
          )}

          {doc.tags.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Tags
              </h2>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {doc.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-crm border border-border bg-muted p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Document preview will appear here when file storage is connected.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {doc.name} · {doc.size}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
