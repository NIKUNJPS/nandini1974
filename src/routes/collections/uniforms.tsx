import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getCollection } from "@/data/collections";
import { pageHead } from "@/lib/seo";

const collection = getCollection("uniforms");

export const Route = createFileRoute("/collections/uniforms")({
  head: () => pageHead(collection.name, collection.description),
  component: Uniforms,
});

function Uniforms() {
  return (
    <CollectionPage collection={collection}>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Store"
            title="Everything for the school year"
            description="Bring your school or college name and we will help you find the right pieces and sizes."
          />
          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {collection.highlights.map((item, i) => (
              <li key={item} className="bg-background">
                <Reveal delay={(i % 3) * 0.06} y={12} className="p-7">
                  <p className="font-display text-xl text-space-indigo">{item}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </CollectionPage>
  );
}
