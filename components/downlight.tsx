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
        "font-bold bg-pink-100 text-pink-700 dark:bg-pink-700/[0.2] dark:text-pink-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
