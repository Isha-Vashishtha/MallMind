import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Map, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mall.jpg";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    desc: "Get personalized product recommendations through natural conversation.",
  },
  {
    icon: Map,
    title: "Smart Navigation",
    desc: "Find stores and get the fastest route through the mall.",
  },
  {
    icon: Shirt,
    title: "Virtual Try-On",
    desc: "See how clothes look on you before buying.",
  },
];

const Landing = () => {
  const [canPlayHeroVideo, setCanPlayHeroVideo] = useState(true);

  return (
    <div className="min-h-screen pb-20 pt-14">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        {canPlayHeroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover hero-zoom-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroImage}
            onError={() => setCanPlayHeroVideo(false)}
          >
            <source src="/hero-mall.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Modern shopping mall interior"
            className="absolute inset-0 h-full w-full object-cover hero-zoom-media"
          />
        )}
        <div className="absolute inset-0 gradient-hero opacity-70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 justify-center mb-4">
              <Sparkles className="w-5 h-5 text-gold-light" />
              <span className="text-gold-light text-sm font-body font-medium tracking-wide uppercase">AI-Powered Shopping</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream leading-tight mb-4">
              Your Personal
              <br />
              <span className="text-gradient-gold">Mall Assistant</span>
            </h1>
            <p className="font-body text-cream/70 text-base max-w-sm mx-auto mb-8 leading-relaxed">
              Navigate the mall smarter with AI recommendations, interactive maps, and virtual try-ons.
            </p>
            <Link to="/chat">
              <Button className="gradient-gold text-primary-foreground font-body font-semibold px-8 py-6 rounded-full text-base shadow-elevated hover:opacity-90 hover:shadow-elevated/80">
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-12 max-w-lg mx-auto">
        <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
          How It Works
        </h2>
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card interactive-card hover:border-primary/25"
            >
              <div className="w-11 h-11 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-0.5">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
