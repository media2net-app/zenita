"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const metricTypes = [
  { value: "weight", label: "Weight (kg)", unit: "kg" },
  { value: "heart_rate", label: "Heart rate (bpm)", unit: "bpm" },
  { value: "sleep", label: "Sleep (hours)", unit: "h" },
  { value: "steps", label: "Steps", unit: "" },
];

export default function AddHealthMeasurementPage() {
  const router = useRouter();
  const [type, setType] = useState("weight");
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentMetric = metricTypes.find((m) => m.value === type);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setIsSubmitting(true);
    // Dummy: simulate save, then redirect
    setTimeout(() => {
      router.push("/dashboard/health?added=1");
    }, 500);
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Link href="/dashboard/health" className="hover:text-zenita-primary">
          Health
        </Link>
        <span aria-hidden>/</span>
        <span className="font-medium text-gray-900">Add measurement</span>
      </div>

      <div className="card p-4 md:p-5">
        <h1 className="text-lg font-semibold text-gray-900">
          Add health measurement
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Log a manual measurement. Data from Apple Watch syncs automatically.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            >
              {metricTypes.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="value"
              className="block text-sm font-medium text-gray-700"
            >
              Value {currentMetric?.unit && `(${currentMetric.unit})`}
            </label>
            <input
              id="value"
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              placeholder={type === "steps" ? "e.g. 8500" : type === "sleep" ? "e.g. 7.5" : "e.g. 72.5"}
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            />
          </div>

          <div>
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Note (optional)
            </label>
            <input
              id="note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. After morning run"
              className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-2.5 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-crm-lg bg-zenita-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zenita-primary-hover focus:outline-none focus:ring-2 focus:ring-zenita-primary focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? "Saving…" : "Save"}
            </button>
            <Link
              href="/dashboard/health"
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
