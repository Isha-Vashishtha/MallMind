import { MapPin } from "lucide-react";

const stores = [
  { name: "Zara", x: 20, y: 25, floor: 1 },
  { name: "Nike", x: 65, y: 20, floor: 1 },
  { name: "H&M", x: 45, y: 55, floor: 1 },
  { name: "Apple", x: 75, y: 60, floor: 2 },
  { name: "Sephora", x: 25, y: 70, floor: 1 },
  { name: "Food Court", x: 50, y: 85, floor: 1 },
];

const MallMap = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto bg-secondary rounded-2xl border border-border overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Mall outline */}
        <rect x="5" y="5" width="90" height="90" rx="4" fill="none" stroke="hsl(40, 12%, 82%)" strokeWidth="0.5" />
        
        {/* Corridors */}
        <rect x="40" y="5" width="20" height="90" fill="hsl(40, 20%, 92%)" />
        <rect x="5" y="40" width="90" height="20" fill="hsl(40, 20%, 92%)" />
        
        {/* Path highlight */}
        <path
          d="M 20 25 L 20 50 L 50 50 L 50 55 L 65 55 L 65 20"
          fill="none"
          stroke="hsl(36, 72%, 52%)"
          strokeWidth="1.5"
          strokeDasharray="3 2"
          strokeLinecap="round"
        />
        
        {/* Store blocks */}
        <rect x="10" y="10" width="25" height="25" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
        <rect x="55" y="8" width="25" height="25" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
        <rect x="35" y="42" width="25" height="20" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
        <rect x="62" y="48" width="25" height="22" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
        <rect x="10" y="58" width="25" height="22" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
        <rect x="30" y="75" width="40" height="18" rx="2" fill="hsl(40, 30%, 96%)" stroke="hsl(40, 12%, 82%)" strokeWidth="0.3" />
      </svg>

      {/* Store markers */}
      {stores.map((store) => (
        <div
          key={store.name}
          className="absolute flex flex-col items-center gap-0.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: `${store.x}%`, top: `${store.y}%` }}
        >
          <div className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center shadow-card group-hover:scale-125 transition-transform">
            <MapPin className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="text-[9px] font-body font-semibold text-foreground bg-background/80 px-1.5 py-0.5 rounded-md whitespace-nowrap">
            {store.name}
          </span>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <div className="w-4 h-0.5 bg-primary rounded" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(36,72%,52%) 0, hsl(36,72%,52%) 4px, transparent 4px, transparent 7px)" }} />
          <span>Suggested Path</span>
        </div>
      </div>
    </div>
  );
};

export default MallMap;
