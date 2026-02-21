"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { dummyFolders } from "@/lib/dummy-documents";

export default function UploadDocumentPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [folderId, setFolderId] = useState(String(dummyFolders[0].id));
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setIsSubmitting(true);
    // Dummy: simulate upload, then redirect
    setTimeout(() => {
      router.push("/dashboard/documents?uploaded=1");
    }, 600);
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Link href="/dashboard/documents" className="hover:text-zenita-primary">
          Documents
        </Link>
        <span aria-hidden>/</span>
        <span className="font-medium text-gray-900">Upload</span>
      </div>

      <div className="card p-4 md:p-5">
        <h1 className="text-lg font-semibold text-gray-900">
          Upload document
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Add a title and choose a folder. File preview will be available when storage is connected.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g. Insurance policy 2026.pdf"
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            />
          </div>

          <div>
            <label
              htmlFor="folder"
              className="block text-sm font-medium text-gray-700"
            >
              Folder
            </label>
            <select
              id="folder"
              value={folderId}
              onChange={(e) => setFolderId(e.target.value)}
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            >
              {dummyFolders.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description (optional)
            </label>
            <textarea
              id="description"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the document"
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            />
          </div>

          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              File (optional for demo)
            </label>
            <input
              id="file"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-gray-900 file:mr-3 file:rounded-crm file:border-0 file:bg-zenita-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-zenita-primary focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            />
            {file && (
              <p className="mt-1 text-xs text-slate-500">
                Selected: {file.name}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-crm-lg bg-zenita-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zenita-primary-hover focus:outline-none focus:ring-2 focus:ring-zenita-primary focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? "Uploading…" : "Upload"}
            </button>
            <Link
              href="/dashboard/documents"
              className="rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
