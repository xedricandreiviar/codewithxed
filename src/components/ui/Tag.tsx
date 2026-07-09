import { cn } from "@/lib/utils";

export interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-bg-tag px-4 py-2 font-body text-sm font-medium text-text-primary",
        className
      )}
    >
      {label}
    </span>
  );
}
