import { Sparkles } from "lucide-react";

interface TryOnPreviewProps {
  selfie?: string;
  clothing?: string;
}

const TryOnPreview = ({ selfie, clothing }: TryOnPreviewProps) => {
  const hasImages = selfie && clothing;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
        Preview Result
      </label>
      <div className="w-full aspect-[3/4] rounded-xl border border-border bg-secondary/30 flex flex-col items-center justify-center gap-4 overflow-hidden">
        {hasImages ? (
          <div className="relative w-full h-full">
            <img src={selfie} alt="Try-on preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border">
              <div className="flex items-center gap-2 text-sm text-foreground font-body">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-medium">AI-generated preview</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">This is a simulated preview. Real AI processing would render your outfit here.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-body font-medium text-foreground">Upload both images</p>
              <p className="text-xs text-muted-foreground mt-1">Add a selfie and a clothing image to see the virtual try-on result</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TryOnPreview;
