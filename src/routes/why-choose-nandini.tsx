import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import storeInside from "@/assets/store-inside.jpeg";
import womens from "@/assets/womens-collection.jpg";
import kids from "@/assets/kids-collection.jpg";
import festive from "@/assets/festive-collection.jpg";
import storeInsides from "@/assets/store-insides.jpeg";
import storeFront from "@/assets/store-front.jpeg";

const reasons = [
  {
    title: "Quality You Can Trust",
    description:
      "Honest fabrics and careful finishes, chosen so that everyday clothes keep up with everyday life.",
    image: womens,
  },
  {
    title: "Styles for Every Generation",
    description:
      "From a baby's first cottons to outfits for grandparents, there is something here for every member of the family.",
    image: kids,
  },
  {
    title: "Wide Variety",
    description:
      "Men's, women's, kids', newborn and festive wear, plus school and college uniforms across sizes.",
    image: storeInsides,
  },
  {
    title: "Comfortable & Trendy",
    description:
      "From daily cotton wear to Diwali and wedding outfits, the range keeps comfort and style together.",
    image: festive,
  },
  {
    title: "Family Shopping Destination",
    description:
      "One trip, one roof. Everyone in the family can find what they need without going from shop to shop.",
    image: storeFront,
  },
  {
    title: "Customer First",
    description:
      "A team that helps you choose, finds your size and remembers what regular customers like.",
    image: storeInside,
  },
];

export const Route = createFileRoute("/why-choose-nandini")({
  head: () =>
    pageHead(
      "Why Choose Nandini",
      "Trust, variety and a familiar face behind the counter — why Nashik families choose Nandini Stores.",
    ),
  component: WhyNandini,
});

function WhyNandini() {
  return (
    <>
      <PageHero
        eyebrow="Why Nandini"
        title="More Than a Clothing Store"
        description="Nashik families keep coming back for trust, variety and a familiar face behind the counter."
      />

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 sm:py-28 lg:space-y-28 lg:px-8">
        {reasons.map((reason, i) => (
          <div key={reason.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
            <Reveal
              className={`aspect-[3/2] overflow-hidden bg-muted ${i % 2 ? "md:order-2" : ""}`}
            >
              <img
                src={reason.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-sm text-flag-red">0{i + 1}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-space-indigo sm:text-4xl">
                {reason.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </Reveal>
          </div>
        ))}
      </section>

      <CTASection
        eyebrow="Visit Nandini"
        title="See why families keep coming back"
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "red" },
          { label: "Read Reviews", to: "/reviews", style: "outline" },
        ]}
      />
    </>
  );
}
