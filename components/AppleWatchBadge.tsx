import { Watch } from "lucide-react";

export function AppleWatchBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full bg-gray-900 px-2 py-0.5 text-[10px] font-medium text-white"
      title="Data from Apple Watch"
    >
      <Watch className="h-3 w-3 shrink-0" aria-hidden />
      Apple Watch
    </span>
  );
}
