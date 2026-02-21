"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DEMO_EMAIL = "demo@zenita.app";
const DEMO_PASSWORD = "Zenita-Demo-2026!";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // Dummy login: accept any, redirect to dashboard
    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-crm-content px-4 py-8 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[400px]">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card-crm">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zenita-primary text-white font-bold text-lg">
              Z
            </div>
            <span className="text-2xl font-semibold text-gray-900">Zenita</span>
          </div>

          <h1 className="text-center text-xl font-semibold text-gray-900">
            Sign in
          </h1>
          <p className="mt-1 text-center text-sm text-slate-500">
            Use the demo account below or enter your own.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="mt-1.5 w-full rounded-crm-lg border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-slate-400 focus:border-zenita-primary focus:outline-none focus:ring-2 focus:ring-zenita-primary/20"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-crm-lg bg-zenita-primary py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zenita-primary-hover focus:outline-none focus:ring-2 focus:ring-zenita-primary focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Demo: {DEMO_EMAIL} / {DEMO_PASSWORD}
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Zenita.app · Health & documents
        </p>
      </div>
    </div>
  );
}
