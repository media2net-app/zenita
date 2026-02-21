import { GlowingCard } from "@/components/ui/glowing-card";

const events = [
  { id: 1, date: "Today, 15:30", title: "Annual health check", type: "Health" },
  { id: 2, date: "Today, 09:00", title: "Logged weight: 74.2 kg", type: "Health" },
  { id: 3, date: "Today, 08:15", title: "Morning meditation · 10 min", type: "Soul" },
  { id: 4, date: "Yesterday, 18:00", title: "Added document: Lab results", type: "Documents" },
  { id: 5, date: "Yesterday, 10:00", title: "Mentor session: Career direction", type: "Mentor" },
  { id: 6, date: "Yesterday", title: "Weekly budget review completed", type: "Financial" },
  { id: 7, date: "17 Feb", title: "Salary received €3,200", type: "Financial" },
  { id: 8, date: "17 Feb", title: "Insurance renewal reminder set", type: "Legal" },
  { id: 9, date: "16 Feb", title: "Reflection: Calm day", type: "Soul" },
  { id: 10, date: "16 Feb", title: "Steps goal reached: 10,240", type: "Health" },
  { id: 11, date: "15 Feb", title: "Document uploaded: Rental contract", type: "Documents" },
  { id: 12, date: "14 Feb", title: "Agenda: Team stand-up added", type: "Agenda" },
];

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <GlowingCard noGlow className="p-4 md:p-5">
        <h2 className="text-base font-semibold text-foreground">Timeline</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Recent activity across your life areas
        </p>
        <ul className="mt-4 space-y-0">
          {events.map((e) => (
            <li key={e.id} className="flex gap-4 border-l-2 border-border pl-4 pb-5 last:pb-0">
              <div className="mt-1.5 h-2 w-2 shrink-0 -translate-x-[21px] rounded-full bg-zenita-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{e.title}</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                  <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {e.type}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </GlowingCard>
    </div>
  );
}
