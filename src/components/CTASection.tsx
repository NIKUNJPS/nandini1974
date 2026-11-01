import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface CTAAction {
  label: string;
  to: string;
  style?: "solid" | "outline" | "red";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: CTAAction[];
  variant?: "indigo" | "platinum";
}

const darkStyles: Record<NonNullable<CTAAction["style"]>, string> = {
  solid: "btn-light",
  outline: "btn-ghost-dark",
  red: "btn-red",
};

const lightStyles: Record<NonNullable<CTAAction["style"]>, string> = {
  solid: "btn-solid",
  outline: "btn-outline",
  red: "btn-red",
};

/**
 * Full-width call-to-action band reused across pages.
 * `indigo` = dark editorial band; `platinum` = light band for light pages.
 */
export function CTASection({
  eyebrow,
  title,
  description,
  actions = [],
  variant = "indigo",
}: CTASectionProps) {
  const dark = variant === "indigo";
  const styles = dark ? darkStyles : lightStyles;

  return (
    <section className={dark ? "bg-space-indigo" : "border-y border-border bg-platinum"}>
      <Reveal className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && (
          <p className={`eyebrow ${dark ? "text-on-dark/70" : "text-muted-foreground"}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            dark ? "text-on-dark" : "text-space-indigo"
          }`}
        >
          {title}
        </h2>
        {description && (
          <div
            className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed ${
              dark ? "text-on-dark/80" : "text-muted-foreground"
            }`}
          >
            {description}
          </div>
        )}
        {actions.length > 0 && (
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {actions.map((a) => (
              <Link key={a.label} to={a.to} className={`btn ${styles[a.style ?? "solid"]}`}>
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
