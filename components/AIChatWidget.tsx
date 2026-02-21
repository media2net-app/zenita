"use client";

import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";

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

export function AIChatWidget() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Toggle button: bottom-right, above mobile nav */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-zenita-primary text-white shadow-lg transition-all hover:bg-teal-600 hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
        aria-label={open ? "Close chat" : "Open AI assistant"}
        aria-expanded={open}
      >
        <Sparkles className="h-7 w-7" aria-hidden />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-36 right-4 z-40 flex w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-crm border border-border bg-background shadow-xl md:bottom-24 md:right-6 md:w-96"
          role="dialog"
          aria-label="AI assistant chat"
        >
          <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zenita-primary text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold text-foreground">AI assistant</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-border hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex max-h-[min(60vh,320px)] flex-1 flex-col overflow-hidden">
            <ul className="flex-1 space-y-3 overflow-y-auto p-4">
              {dummyMessages.map((msg) => (
                <li
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
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

            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-crm border border-border bg-muted px-3 py-2 text-muted-foreground">
                <Send className="h-4 w-4 shrink-0" />
                <span className="text-sm">Type a message… (demo)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
