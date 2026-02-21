const sessions = [
  { id: 1, date: "Last week", topic: "Career direction", note: "Explored next steps and priorities." },
  { id: 2, date: "2 weeks ago", topic: "Work–life balance", note: "Set boundaries and weekly review habit." },
  { id: 3, date: "1 month ago", topic: "Goals 2026", note: "Defined 3 main goals and first actions." },
];

const nextSession = { date: "Fri 28 Feb", time: "10:00", topic: "Follow-up on goals" };

const goals = [
  { id: 1, text: "Clarify career path", progress: 60 },
  { id: 2, text: "Better sleep routine", progress: 40 },
  { id: 3, text: "Weekly reflection", progress: 80 },
];

export default function MentorPage() {
  return (
    <div className="space-y-6">
      <div className="card p-4 md:p-5">
        <h2 className="text-base font-semibold text-foreground">Next session</h2>
        <div className="mt-3 rounded-crm bg-muted p-4">
          <p className="font-medium text-foreground">{nextSession.topic}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {nextSession.date} · {nextSession.time}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-4 md:p-5">
          <h2 className="text-base font-semibold text-foreground">Focus goals</h2>
          <ul className="mt-3 space-y-3">
            {goals.map((g) => (
              <li key={g.id} className="rounded-crm bg-muted p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">{g.text}</span>
                  <span className="text-xs text-muted-foreground">{g.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                  <div
                    className="h-1.5 rounded-full bg-zenita-primary"
                    style={{ width: `${g.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-4 md:p-5">
          <h2 className="text-base font-semibold text-foreground">Recent sessions</h2>
          <ul className="mt-3 space-y-2">
            {sessions.map((s) => (
              <li key={s.id} className="rounded-crm bg-muted px-3 py-2.5">
                <p className="text-sm font-medium text-foreground">{s.topic}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.date}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
