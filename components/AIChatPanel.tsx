"use client";

import { Sparkles, Send } from "lucide-react";

const dummyMessages: { id: string; role: "user" | "assistant"; text: string }[] = [
  { id: "1", role: "user", text: "Hi, can you help me with my weekly goals?" },
  {
    id: "2",
    role: "assistant",
    text: "Hello! Of course. I see you're focusing on health and finances this week. Would you like to start with a concrete action for exercise or with a budget check?",
  },
  { id: "3", role: "user", text: "Exercise first. I want to work out at least 3 times." },
  {
    id: "4",
    role: "assistant",
    text: "Good plan. I suggest: running on Monday, strength (or a class) on Wednesday, and a walk or bike ride on Friday. Shall I add these to your calendar as reminders?",
  },
  { id: "5", role: "user", text: "Yes please, Monday and Wednesday at 6:00 PM." },
  {
    id: "6",
    role: "assistant",
    text: "Done. I've added Monday 6:00 PM and Wednesday 6:00 PM as workout blocks. Good luck this week! Feel free to ask if you want to change anything.",
  },
];

type AIChatPanelProps = {
  /** Optional compact mode (e.g. smaller header, less padding) */
  compact?: boolean;
  /** Optional max height for the messages area */
  maxHeight?: string;
  className?: string;
};

export function AIChatPanel({ compact = false, maxHeight = "min(50vh, 340px)", className = "" }: AIChatPanelProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-crm border border-border bg-background ${className}`}
      role="region"
      aria-label="AI assistant chat"
    >
      <div
        className={`flex items-center gap-2 border-b border-border bg-muted px-3 py-2 ${
          compact ? "py-2" : "px-4 py-3"
        }`}
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zenita-primary text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <span className={`font-semibold text-foreground ${compact ? "text-sm" : "text-base"}`}>
          AI assistant
        </span>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden" style={{ maxHeight }}>
        <ul className="flex-1 space-y-2 overflow-y-auto p-3">
          {dummyMessages.map((msg) => (
            <li
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm ${
                  msg.role === "user"
                    ? "bg-zenita-primary text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-border p-2">
          <div className="flex items-center gap-2 rounded-crm border border-border bg-muted px-3 py-2 text-muted-foreground">
            <Send className="h-4 w-4 shrink-0" />
            <span className="text-sm">Type a message… (demo)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
