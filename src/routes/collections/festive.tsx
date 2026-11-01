import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage, ProductGrid } from "@/components/CollectionPage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { pageHead } from "@/lib/seo";

const collection = getCollection("festive");
const festive = getProductsByCollection("festive");

const groups = [
  { title: "For Men", match: "Men" },
  { title: "For Women", match: "Women" },
  { title: "For Kids", match: "Kids" },
];

const occasions = [
  { title: "Diwali", text: "Bright, comfortable outfits for the whole family's celebrations." },
  { title: "Weddings", text: "Richer fabrics and finishes for the wedding season." },
  { title: "Family Gatherings", text: "Coordinated looks for pujas, get-togethers and photos." },
];

export const Route = createFileRoute("/collections/festive")({
  head: () => pageHead(collection.name, collection.description),
  component: Festive,
});

function Festive() {
  return (
    <CollectionPage collection={collection} title="Celebrate in Style">
      {groups.map((group, i) => (
        <section key={group.title} className={`py-16 sm:py-20 ${i % 2 ? "bg-platinum/50" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Festive Styles" title={group.title} />
            <div className="mt-12">
              <ProductGrid products={festive.filter((p) => p.category.startsWith(group.match))} />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Dress for the Day" title="Made for the occasion" />
          <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
            {occasions.map((occasion, i) => (
              <Reveal key={occasion.title} delay={i * 0.08}>
                <h3 className="font-display text-2xl tracking-tight text-space-indigo">
                  {occasion.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {occasion.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </CollectionPage>
  );
}
