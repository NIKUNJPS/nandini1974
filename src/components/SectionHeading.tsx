import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`eyebrow ${onDark ? "text-on-dark/70" : "text-muted-foreground"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          onDark ? "text-on-dark" : "text-space-indigo"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${onDark ? "text-on-dark/80" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
