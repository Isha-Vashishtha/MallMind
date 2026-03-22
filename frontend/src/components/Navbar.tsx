import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, MessageSquare, Map, Shirt, Home } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/chat", icon: MessageSquare, label: "Chat" },
  { to: "/map", icon: Map, label: "Map" },
  { to: "/try-on", icon: Shirt, label: "Try-On" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between px-4 h-14 max-w-lg mx-auto">
          <Link to="/" className="group flex items-center gap-2 rounded-xl px-2 py-1 transition-all duration-200 ease-out hover:bg-muted/60 active:scale-[0.98]">
            <ShoppingBag className="w-6 h-6 text-primary transition-transform duration-200 group-hover:scale-105" />
            <span className="font-display text-lg font-bold text-foreground">Mall-Mind</span>
          </Link>
        </div>
      </header>

      {/* Bottom tab bar - mobile first */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border pb-safe">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl interactive-tab ${
                  isActive
                    ? "text-primary bg-muted/60"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
