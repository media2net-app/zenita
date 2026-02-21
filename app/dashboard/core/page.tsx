/**
 * Zenita Core – central identity & direction (MyManifest Core).
 * Subsections: Vision & Life Direction, Core Values, Long-Term Objectives,
 * Identity Statement, Weekly Alignment Score, Life Balance Overview.
 */

import { GlowingCard } from "@/components/ui/glowing-card";

const dummyVision = {
  statement:
    "Live with intention: health as foundation, growth as practice, and connection as purpose. Build a life that feels aligned and sustainable.",
  lastUpdated: "2 weeks ago",
};

const dummyCoreValues = [
  { id: "1", name: "Health first", description: "Body and mind as base for everything else.", color: "teal" },
  { id: "2", name: "Continuous learning", description: "Stay curious and adapt.", color: "indigo" },
  { id: "3", name: "Authentic connection", description: "Quality relationships over quantity.", color: "amber" },
  { id: "4", name: "Financial clarity", description: "Spend and save with intention.", color: "emerald" },
];

const dummyObjectives = [
  { id: "1", title: "Sustainable fitness routine", progress: 72, due: "This year" },
  { id: "2", title: "Complete legal document review", progress: 40, due: "Q2" },
  { id: "3", title: "Build emergency fund (6 months)", progress: 55, due: "End of year" },
];

const dummyIdentityStatement =
  "I am someone who chooses direction over drift, who invests in health and relationships, and who uses tools like Zenita to stay aligned with what matters.";

const dummyAlignment = {
  score: 78,
  label: "Good alignment",
  summary: "Sleep and movement are slightly below target. Legal and financial tasks are on track.",
};

const dummyLifeBalance = [
  { area: "Health", level: 75, status: "ok" as const },
  { area: "Finance", level: 70, status: "ok" as const },
  { area: "Relationships", level: 80, status: "good" as const },
  { area: "Growth", level: 65, status: "ok" as const },
  { area: "Rest", level: 55, status: "low" as const },
];

export default function CorePage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Central identity & direction. Your vision, values, objectives and alignment.
      </p>

      {/* Vision & Life Direction */}
      <GlowingCard>
        <h2 className="text-base font-semibold text-foreground">Vision & Life Direction</h2>
        <p className="mt-3 text-sm text-foreground leading-relaxed">{dummyVision.statement}</p>
        <p className="mt-2 text-xs text-muted-foreground">Last updated {dummyVision.lastUpdated}</p>
      </GlowingCard>

      {/* Core Values */}
      <GlowingCard>
        <h2 className="text-base font-semibold text-foreground">Core Values</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {dummyCoreValues.map((v) => (
            <li
              key={v.id}
              className="rounded-crm border border-border bg-muted/50 p-4"
            >
              <span className="font-medium text-foreground">{v.name}</span>
              <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
            </li>
          ))}
        </ul>
      </GlowingCard>

      {/* Long-Term Objectives */}
      <GlowingCard>
        <h2 className="text-base font-semibold text-foreground">Long-Term Objectives</h2>
        <ul className="mt-4 space-y-4">
          {dummyObjectives.map((o) => (
            <li key={o.id} className="rounded-crm bg-muted p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-foreground">{o.title}</span>
                <span className="text-xs text-muted-foreground">{o.due}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-zenita-primary"
                    style={{ width: `${o.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground">{o.progress}%</span>
              </div>
            </li>
          ))}
        </ul>
      </GlowingCard>

      {/* Identity Statement */}
      <GlowingCard>
        <h2 className="text-base font-semibold text-foreground">Identity Statement</h2>
        <p className="mt-3 text-sm text-foreground leading-relaxed italic">
          &ldquo;{dummyIdentityStatement}&rdquo;
        </p>
      </GlowingCard>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Alignment Score */}
        <GlowingCard>
          <h2 className="text-base font-semibold text-foreground">Weekly Alignment Score</h2>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-zenita-primary/10 text-2xl font-bold text-zenita-primary">
              {dummyAlignment.score}
            </div>
            <div>
              <p className="font-medium text-foreground">{dummyAlignment.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{dummyAlignment.summary}</p>
            </div>
          </div>
        </GlowingCard>

        {/* Life Balance Overview */}
        <GlowingCard>
          <h2 className="text-base font-semibold text-foreground">Life Balance Overview</h2>
          <ul className="mt-4 space-y-3">
            {dummyLifeBalance.map((b) => (
              <li key={b.area} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-sm text-foreground">{b.area}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${
                      b.status === "good"
                        ? "bg-zenita-primary"
                        : b.status === "ok"
                          ? "bg-amber-500"
                          : "bg-rose-500"
                    }`}
                    style={{ width: `${b.level}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm font-medium text-foreground">
                  {b.level}%
                </span>
              </li>
            ))}
          </ul>
        </GlowingCard>
      </div>
    </div>
  );
}
