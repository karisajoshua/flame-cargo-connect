import { useState } from "react";
interface Region {
  id: string;
  name: string;
  path: string;
  cx?: number;
  cy?: number;
}
const regions: Region[] = [{
  id: "north-america",
  name: "North America",
  path: "M 50 80 L 180 80 L 200 120 L 180 180 L 120 200 L 80 180 L 50 120 Z",
  cx: 120,
  cy: 130
}, {
  id: "south-america",
  name: "South America",
  path: "M 120 220 L 160 210 L 180 260 L 170 340 L 140 380 L 110 340 L 100 280 Z",
  cx: 140,
  cy: 290
}, {
  id: "europe",
  name: "Europe",
  path: "M 380 70 L 450 60 L 480 90 L 470 130 L 420 140 L 380 120 Z",
  cx: 420,
  cy: 100
}, {
  id: "africa",
  name: "East Africa",
  path: "M 380 160 L 460 150 L 500 200 L 490 280 L 440 320 L 380 300 L 360 240 Z",
  cx: 430,
  cy: 230
}, {
  id: "middle-east",
  name: "Middle East",
  path: "M 480 130 L 540 110 L 580 140 L 570 180 L 520 190 L 480 170 Z",
  cx: 530,
  cy: 150
}, {
  id: "asia",
  name: "Asia",
  path: "M 500 60 L 700 50 L 750 100 L 740 180 L 650 200 L 580 180 L 520 140 L 490 100 Z",
  cx: 620,
  cy: 120
}, {
  id: "australia",
  name: "Australia",
  path: "M 650 280 L 750 270 L 780 320 L 760 370 L 700 380 L 650 350 L 640 310 Z",
  cx: 710,
  cy: 320
}];
const WorldMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  return <div className="relative w-full max-w-4xl mx-auto">
      

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          
          
        </div>
        <div className="flex items-center gap-2">
          
          
        </div>
        <div className="flex items-center gap-2">
          
          
        </div>
      </div>
    </div>;
};
export default WorldMap;