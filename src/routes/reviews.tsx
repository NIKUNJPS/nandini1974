import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/data/reviews";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => pageHead("Customer Reviews", "What families say about shopping at Nandini Stores."),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="What Families Say"
        description="These are sample reviews for now. Real customer feedback from Nandini Stores will appear here soon."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={(i % 3) * 0.08} className="h-full">
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        eyebrow="Visit Nandini"
        title="Come and see for yourself"
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "red" },
          { label: "Get in Touch", to: "/contact", style: "outline" },
        ]}
      />
    </>
  );
}
