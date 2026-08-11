import * as React from "react";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

export function StoreBadge({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("store-badge cursor-pointer text-left", className)}
    >
      <Play className="h-6 w-6 fill-current" strokeWidth={0} />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] opacity-80">GET IT ON</span>
        <span className="text-base font-semibold -mt-0.5">Google Play</span>
      </span>
    </button>
  );
}