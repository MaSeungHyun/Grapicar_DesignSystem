export type SpinnerProps = {
  size?: number;
  trackColor?: string;
  arcColor?: string;
  strokeWidth?: number;
  speed?: number;
  glowIntensity?: number;
};

export const Spinner = ({
  size = 70,
  trackColor = "var(--color-black-300)",
  arcColor = "var(--color-accent-100)",
  strokeWidth = 6,
  speed = 1.2,
  glowIntensity = 12,
}: SpinnerProps): React.ReactNode => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.25;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ animation: `spin ${speed}s linear infinite` }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation={glowIntensity / 3} result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={arcColor} stopOpacity="0" />
            <stop offset="60%" stopColor={arcColor} stopOpacity="0.6" />
            <stop offset="100%" stopColor={arcColor} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference - arcLength}`}
          filter="url(#glow)"
        />
      </svg>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
