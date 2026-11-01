import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col border border-border bg-card p-6 transition-colors duration-300 hover:border-lavender-grey sm:p-8">
      <span aria-hidden className="font-display text-5xl leading-none text-lavender-grey">
        &ldquo;
      </span>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground">
        {review.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-medium text-space-indigo">{review.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{review.detail}</p>
      </figcaption>
    </figure>
  );
}
