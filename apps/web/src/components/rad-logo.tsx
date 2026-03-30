import { cn } from "@/registry/web/ui";

interface RadLogoProps {
  className?: string;
  size?: number;
}

export function RadLogo({ className, size = 24 }: RadLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      className={cn("text-primary", className)}
      aria-label="Rad UI logo"
    >
      <path
        d="M178.13,998.96l75.08,1c2.04.03,4-.77,5.44-2.21L807.61,448.78c1.42-1.42,2.21-3.34,2.21-5.34v-76.08c0-6.73-8.13-10.09-12.89-5.34L172.89,986.07c-4.72,4.72-1.44,12.8,5.24,12.89Z"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M410.6,1000h76.07c2,0,3.92-.8,5.34-2.21l315.6-315.6c1.42-1.42,2.21-3.34,2.21-5.34v-76.07c0-6.73-8.13-10.1-12.89-5.34l-391.67,391.67c-4.76,4.76-1.39,12.89,5.34,12.89Z"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M809.81,120.1V7.56c0-4.17-3.39-7.55-7.55-7.55h-51.41c-5.48,0-9.93,4.44-9.93,9.92v174.95c.01,2.63-1.04,5.16-2.9,7.02l-227.52,227.52c-1.86,1.86-2.91,4.39-2.91,7.02v69.34c0,8.85,10.7,13.28,16.95,7.02l282.37-282.37c1.86-1.86,2.91-4.39,2.91-7.02v-93.32h0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
}
