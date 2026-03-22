import { useRef, useState } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";

interface UploadImageProps {
  label: string;
  onImageSelect: (file: File, preview: string) => void;
  preview?: string;
  onClear?: () => void;
}

const UploadImage = ({ label, onImageSelect, preview, onClear }: UploadImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageSelect(file, url);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      {preview ? (
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-border">
          <img src={preview} alt={label} className="w-full h-full object-cover" />
          {onClear && (
            <button
              onClick={onClear}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-foreground/60 text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full aspect-[3/4] rounded-xl border-2 border-dashed border-border bg-secondary/50 flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-secondary transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <Upload className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground font-body">Tap to upload</span>
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
    </div>
  );
};

export default UploadImage;
