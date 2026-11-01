import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  /** Crop from the top — hides catalogue labels printed along the bottom of a photo. */
  cropBottom?: boolean;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const controlClass =
  "inline-flex size-11 items-center justify-center border border-on-dark/30 text-on-dark transition-colors hover:bg-on-dark hover:text-space-indigo";

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  const image = index === null ? undefined : images[index];

  return (
    <AnimatePresence>
      {index !== null && image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-space-indigo/95 p-4"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className={`absolute right-5 top-5 z-10 ${controlClass}`}
          >
            <X className="size-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 sm:left-6 ${controlClass}`}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                className={`absolute right-3 top-1/2 z-10 -translate-y-1/2 sm:right-6 ${controlClass}`}
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {image.cropBottom ? (
                <div className="aspect-[5/6] max-h-[78vh] w-[min(calc(100vw-2rem),65vh)] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              )}
              {image.caption && (
                <figcaption className="mt-4 text-center text-sm text-on-dark/80">
                  {image.caption}
                </figcaption>
              )}
            </motion.figure>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
