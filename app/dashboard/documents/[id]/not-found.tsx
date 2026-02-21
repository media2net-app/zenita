import Link from "next/link";

export default function DocumentNotFound() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">This document could not be found.</p>
      <Link
        href="/dashboard/documents"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zenita-primary hover:underline"
      >
        ← Back to documents
      </Link>
    </div>
  );
}
