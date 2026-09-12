type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

/** Mark: folded page — Docs product identity. */
export function Logo({ className = "", markOnly = false }: LogoProps) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect x="2" y="2" width="28" height="28" rx="7" fill="#2A2A28" />
        <path
          d="M9 8.5h10.5L23 12v11.5a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 23.5v-13A1.5 1.5 0 0 1 9 8.5Z"
          stroke="#FAFAF8"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M19.5 8.5V12H23" stroke="#FAFAF8" strokeWidth="1.4" strokeLinejoin="round" />
        <path
          d="M11.5 16.5h9M11.5 19.5h6.5"
          stroke="#FAFAF8"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
      {!markOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-fg">
          Dynamogic <span className="font-medium text-fg-muted">Docs</span>
        </span>
      )}
      <span className="sr-only" data-base={base}>
        Dynamogic Docs
      </span>
    </span>
  );
}
