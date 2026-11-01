import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

/**
 * Editorial page banner used at the top of every inner page.
 * With an image: a wide, softly-overlaid photo banner.
 * Without: a calm platinum band with display type.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition,
}: PageHeroProps) {
  if (!image) {
    return (
      <section className="border-b border-border bg-platinum">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          {eyebrow && (
            <motion.p {...rise(0)} className="eyebrow text-muted-foreground">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            {...rise(0.08)}
            className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-space-indigo sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              {...rise(0.16)}
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-space-indigo">
      <motion.img
        src={image}
        alt={imageAlt}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease }}
        style={{ objectPosition: imagePosition ?? "center 25%" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-space-indigo/90 via-space-indigo/45 to-space-indigo/15"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-36 sm:px-6 lg:px-8">
        {eyebrow && (
          <motion.p {...rise(0.1)} className="eyebrow text-on-dark/75">
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          {...rise(0.18)}
          className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-on-dark sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            {...rise(0.26)}
            className="mt-4 max-w-2xl text-base leading-relaxed text-on-dark/85"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
