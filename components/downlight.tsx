import { cn } from "@/lib/utils";

export const Downlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-medium line-through bg-red-100 text-red-700 dark:bg-red-700/[0.2] dark:text-red-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
