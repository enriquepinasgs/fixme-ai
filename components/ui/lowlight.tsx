import { cn } from "@/lib/utils";

export const Lowlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-medium line-through bg-rose-100 text-rose-700 dark:bg-rose-700/[0.2] dark:text-rose-500 px-1 py-0.5 border rounded-[6px] border-rose-300 dark:border-rose-600",
        className
      )}
    >
      {children}
    </span>
  );
};
