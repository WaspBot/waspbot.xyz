import React from 'react';

interface HeroPatternProps {
  id?: string;
  width?: number;
  height?: number;
  patternUnits?: "userSpaceOnUse" | "objectBoundingBox";
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}

const HeroPattern: React.FC<HeroPatternProps> = ({
  id = "hero-pattern",
  width = 20,
  height = 20,
  patternUnits = "userSpaceOnUse",
  fill = "hsl(var(--background))",
  stroke = "hsl(var(--muted-foreground))",
  strokeWidth = 0.5,
  className,
}) => {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits={patternUnits}
        >
          <path d="M0 20V0H20" fill="none" stroke={stroke} strokeWidth={strokeWidth} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export default HeroPattern;
