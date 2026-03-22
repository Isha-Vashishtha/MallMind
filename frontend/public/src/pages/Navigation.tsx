import MallMap from "@/components/MallMap";

const Navigation = () => {
  return (
    <div className="min-h-screen pt-14 pb-20">
      <div className="px-4 py-6 max-w-lg mx-auto">
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Mall Map</h1>
        <p className="font-body text-sm text-muted-foreground mb-6">Tap a store to get directions</p>
        <MallMap />
        <div className="mt-6 space-y-3">
          <h2 className="font-display text-lg font-semibold text-foreground">Nearby Stores</h2>
          {["Zara · Ground Floor", "Nike Store · Ground Floor", "H&M · Ground Floor", "Apple · First Floor", "Sephora · Ground Floor"].map((s) => (
            <div key={s} className="flex items-center justify-between p-3 bg-card rounded-xl border border-border shadow-card interactive-card hover:border-primary/25">
              <span className="font-body text-sm text-foreground">{s}</span>
              <span className="text-xs text-primary font-body font-semibold">Directions →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
