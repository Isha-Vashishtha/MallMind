import { useState } from "react";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/UploadImage";
import TryOnPreview from "@/components/TryOnPreview";
import { Sparkles } from "lucide-react";

const TryOn = () => {
  const [selfie, setSelfie] = useState<string>();
  const [clothing, setClothing] = useState<string>();

  return (
    <div className="min-h-screen pt-14 pb-20">
      <div className="px-4 py-6 max-w-lg mx-auto">
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Virtual Try-On</h1>
        <p className="font-body text-sm text-muted-foreground mb-6">See how outfits look on you with AI</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <UploadImage
            label="Your Selfie"
            preview={selfie}
            onImageSelect={(_, url) => setSelfie(url)}
            onClear={() => setSelfie(undefined)}
          />
          <UploadImage
            label="Clothing"
            preview={clothing}
            onImageSelect={(_, url) => setClothing(url)}
            onClear={() => setClothing(undefined)}
          />
        </div>

        {selfie && clothing && (
          <Button className="w-full gradient-gold text-primary-foreground font-body font-semibold py-6 rounded-xl text-base mb-4 gap-2">
            <Sparkles className="w-4 h-4" />
            Generate Try-On
          </Button>
        )}

        <TryOnPreview selfie={selfie} clothing={clothing} />
      </div>
    </div>
  );
};

export default TryOn;
