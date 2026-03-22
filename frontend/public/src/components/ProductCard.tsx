import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  store: string;
  price: string;
  image: string;
  available: boolean;
  onNavigate?: () => void;
}

const ProductCard = ({ name, store, price, image, available, onNavigate }: ProductCardProps) => {
  return (
    <div className="flex gap-3 p-3 bg-card rounded-xl border border-border shadow-card interactive-card hover:border-primary/25">
      <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h4 className="font-body font-semibold text-sm text-foreground truncate">{name}</h4>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
            <ShoppingBag className="w-3 h-3" />
            {store}
          </p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <span className="font-body font-bold text-sm text-foreground">{price}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
              available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
              {available ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-7 text-xs gap-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={onNavigate}
          >
            <MapPin className="w-3 h-3" />
            Navigate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
