"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable mouse-follow glow (default true) */
  glow?: boolean;
  /** Disable glow effect entirely */
  noGlow?: boolean;
}

export function GlowingCard({ children, className, glow = true, noGlow = false }: GlowingCardProps) {
  if (noGlow) {
    return (
      <div
        className={cn(
          "rounded-[1.25rem] border border-border bg-background p-4 shadow-sm md:rounded-[1.5rem] md:p-5 dark:border-border dark:bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3", className)}>
      <GlowingEffect
        spread={40}
        glow={glow}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex min-h-0 flex-col overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-4 shadow-sm dark:border-border dark:bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-5">
        {children}
      </div>
    </div>
  );
}
