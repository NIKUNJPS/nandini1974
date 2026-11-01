import { createFileRoute } from "@tanstack/react-router";
import { CollectionCard } from "@/components/CollectionCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/data/collections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/collections/")({
  head: () =>
    pageHead(
      "Collections",
      "Men's, women's, kids', newborn, festive and uniform collections at Nandini Stores, Nashik.",
    ),
  component: Collections,
});

function Collections() {
  return (
    <>
      <PageHero
        eyebrow="Nandini Stores"
        title="Collections"
        description="Clothing for every age, every occasion and every generation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, i) => {
            const wide = i === 0 || i === collections.length - 1;
            return (
              <Reveal
                key={collection.id}
                delay={(i % 3) * 0.08}
                className={wide ? "lg:col-span-2" : ""}
              >
                <CollectionCard collection={collection} wide={wide} />
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        eyebrow="Visit Nandini"
        title="The full range is in store"
        description="Our racks change through the season. Drop in to see everything we have."
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "red" },
          { label: "Contact Us", to: "/contact", style: "outline" },
        ]}
      />
    </>
  );
}
