import { useState } from "react";

interface Region {
  id: string;
  name: string;
  path: string;
  cx?: number;
  cy?: number;
}

const regions: Region[] = [
  {
    id: "north-america",
    name: "North America",
    path: "M 50 80 L 180 80 L 200 120 L 180 180 L 120 200 L 80 180 L 50 120 Z",
    cx: 120,
    cy: 130,
  },
  {
    id: "south-america",
    name: "South America",
    path: "M 120 220 L 160 210 L 180 260 L 170 340 L 140 380 L 110 340 L 100 280 Z",
    cx: 140,
    cy: 290,
  },
  {
    id: "europe",
    name: "Europe",
    path: "M 380 70 L 450 60 L 480 90 L 470 130 L 420 140 L 380 120 Z",
    cx: 420,
    cy: 100,
  },
  {
    id: "africa",
    name: "East Africa",
    path: "M 380 160 L 460 150 L 500 200 L 490 280 L 440 320 L 380 300 L 360 240 Z",
    cx: 430,
    cy: 230,
  },
  {
    id: "middle-east",
    name: "Middle East",
    path: "M 480 130 L 540 110 L 580 140 L 570 180 L 520 190 L 480 170 Z",
    cx: 530,
    cy: 150,
  },
  {
    id: "asia",
    name: "Asia",
    path: "M 500 60 L 700 50 L 750 100 L 740 180 L 650 200 L 580 180 L 520 140 L 490 100 Z",
    cx: 620,
    cy: 120,
  },
  {
    id: "australia",
    name: "Australia",
    path: "M 650 280 L 750 270 L 780 320 L 760 370 L 700 380 L 650 350 L 640 310 Z",
    cx: 710,
    cy: 320,
  },
];

const WorldMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 420"
        className="w-full h-auto"
        style={{ maxHeight: "400px" }}
      >
        {/* Background */}
        <rect width="800" height="420" fill="hsl(var(--secondary))" rx="12" />
        
        {/* Grid lines for ocean effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 21}
            x2="800"
            y2={i * 21}
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 20}
            y1="0"
            x2={i * 20}
            y2="420"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Regions */}
        {regions.map((region) => (
          <g key={region.id}>
            <path
              d={region.path}
              fill={
                hoveredRegion === region.id
                  ? "hsl(var(--accent))"
                  : "hsl(var(--primary))"
              }
              stroke="hsl(var(--primary-foreground))"
              strokeWidth="2"
              className="transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              opacity={hoveredRegion === region.id ? 1 : 0.85}
            />
            {/* Region marker dot */}
            {region.cx && region.cy && (
              <circle
                cx={region.cx}
                cy={region.cy}
                r={hoveredRegion === region.id ? 8 : 5}
                fill="hsl(var(--accent))"
                className="transition-all duration-300"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}

        {/* Connection lines from East Africa (hub) to other regions */}
        {regions
          .filter((r) => r.id !== "africa")
          .map((region) => (
            <line
              key={`line-${region.id}`}
              x1={430}
              y1={230}
              x2={region.cx}
              y2={region.cy}
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              strokeDasharray="5,5"
              opacity="0.4"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="10;0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          ))}

        {/* Region labels on hover */}
        {hoveredRegion && (
          <g>
            {regions
              .filter((r) => r.id === hoveredRegion)
              .map((region) => (
                <text
                  key={`label-${region.id}`}
                  x={region.cx}
                  y={(region.cy || 0) - 20}
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  fontSize="14"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {region.name}
                </text>
              ))}
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span className="text-sm text-muted-foreground">Service Regions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-accent" />
          <span className="text-sm text-muted-foreground">Hub (East Africa)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-accent opacity-50" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent)) 5px, transparent 5px, transparent 10px)" }} />
          <span className="text-sm text-muted-foreground">Network Connections</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
