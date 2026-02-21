"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

export type AIInsightsModalKey = "plan" | "sleep" | "budget" | null;

const modalContent: Record<NonNullable<AIInsightsModalKey>, { title: string; body: string }> = {
  plan: {
    title: "Plan my week",
    body: "Here’s a suggested outline for your week based on your goals and calendar:\n\n• Monday — Run or cardio (e.g. 30 min), Annual health check 15:30\n• Tuesday — Rest or light walk; focus on sleep (aim for 8h)\n• Wednesday — Strength or class (e.g. 45 min), Team stand-up 09:00\n• Thursday — Physiotherapist 09:00; gentle movement in the afternoon\n• Friday — Walk or bike; optional mentor prep for next week\n\nI can add these as reminders to your agenda if you’d like. Say “Add to calendar” in the chat.",
  },
  sleep: {
    title: "Sleep tips",
    body: "Based on your recent 7.4h average (goal 8h), here are a few practical tips:\n\n• Keep a fixed wake time, especially on weekends, to stabilise your rhythm.\n• Avoid caffeine after 14:00 and heavy meals close to bedtime.\n• Wind down 30–45 min before bed: dim lights, no screens, try reading or breathing exercises.\n• If you use your phone in bed, enable a blue-light filter and set a “bedtime” focus mode.\n• Track for another week; if sleep doesn’t improve, we can look at stress or environment next.",
  },
  budget: {
    title: "Budget check",
    body: "Quick snapshot of your finances:\n\n• Total balance across accounts: €20,650 — in line with your last sync.\n• This month you’ve saved about €2,100; weekly financial health is Good.\n• Groceries: €320 of €400 (80%); Leisure: €85 of €200 (43%) — both on track.\n\nRecommendation: Keep the current pace. If you want, we can set a specific savings goal or adjust category limits in the Financial section.",
  },
};

type ContextValue = {
  openModal: (key: NonNullable<AIInsightsModalKey>) => void;
  closeModal: () => void;
};

const AIInsightsModalContext = createContext<ContextValue | null>(null);

export function useAIInsightsModal() {
  const ctx = useContext(AIInsightsModalContext);
  if (!ctx) throw new Error("useAIInsightsModal must be used within AIInsightsModalProvider");
  return ctx;
}

type AIInsightsModalProviderProps = {
  children: ReactNode;
};

export function AIInsightsModalProvider({ children }: AIInsightsModalProviderProps) {
  const [key, setKey] = useState<AIInsightsModalKey>(null);
  const openModal = useCallback((k: NonNullable<AIInsightsModalKey>) => setKey(k), []);
  const closeModal = useCallback(() => setKey(null), []);

  const content = key ? modalContent[key] : null;

  useEffect(() => {
    if (!key) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [key, closeModal]);

  return (
    <AIInsightsModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {content && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md rounded-crm border border-border bg-background shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 id="ai-modal-title" className="font-semibold text-foreground">
                {content.title}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-4 py-4">
              <p className="whitespace-pre-wrap text-sm text-foreground">
                {content.body}
              </p>
            </div>
          </div>
        </div>
      )}
    </AIInsightsModalContext.Provider>
  );
}

const suggestions: { key: NonNullable<AIInsightsModalKey>; label: string }[] = [
  { key: "plan", label: "Plan my week" },
  { key: "sleep", label: "Sleep tips" },
  { key: "budget", label: "Budget check" },
];

type AISuggestionButtonsProps = {
  variant?: "default" | "compact";
};

export function AISuggestionButtons({ variant = "default" }: AISuggestionButtonsProps) {
  const { openModal } = useAIInsightsModal();
  const isCompact = variant === "compact";

  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((s) => (
        <button
          key={s.key}
          type="button"
          onClick={() => openModal(s.key)}
          className={
            isCompact
              ? "rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted"
              : "rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground hover:bg-border"
          }
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
