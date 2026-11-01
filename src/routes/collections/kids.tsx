import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OtherCollections, VisitCTA } from "@/components/CollectionPage";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { getCollection } from "@/data/collections";
import { kidsProducts, type KidsStyle } from "@/data/kids-products";
import { pageHead } from "@/lib/seo";

const collection = getCollection("kids");
const PAGE_SIZE = 15;
const filters: ("All" | KidsStyle)[] = ["All", "Formal", "Casual"];

export const Route = createFileRoute("/collections/kids")({
  head: () => pageHead(collection.name, collection.description),
  component: Kids,
});

function Kids() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? kidsProducts : kidsProducts.filter((p) => p.style === filter)),
    [filter],
  );
  const shown = filtered.slice(0, visible);

  const images: LightboxImage[] = useMemo(
    () =>
      shown.map((p) => ({
        src: p.image,
        alt: p.name,
        caption: p.category,
        cropBottom: true,
      })),
    [shown],
  );

  return (
    <>
      <PageHero
        eyebrow={collection.tagline}
        title={collection.name}
        description={collection.description}
        image={collection.image}
        imageAlt={collection.name}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-6" role="group" aria-label="Filter styles">
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  onClick={() => {
                    setFilter(option);
                    setVisible(PAGE_SIZE);
                  }}
                  className="relative pb-1 text-sm font-medium text-muted-foreground transition-colors hover:text-space-indigo aria-pressed:text-space-indigo"
                >
                  {option}
                  {filter === option && (
                    <motion.span
                      layoutId="kids-filter"
                      className="absolute inset-x-0 -bottom-px h-px bg-punch-red"
                    />
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Showing {shown.length} of {filtered.length} styles
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:grid-cols-5"
            >
              {shown.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priority={i < 5}
                  onSelect={() => setSelected(i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {visible < filtered.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((count) => count + PAGE_SIZE)}
                className="btn btn-outline"
              >
                Show More Styles
              </button>
            </div>
          )}

          <p className="mt-10 text-sm text-muted-foreground">
            Availability changes through the season. Visit the store for current sizes and prices.
          </p>
        </div>
      </section>

      <VisitCTA />
      <OtherCollections current="kids" />

      <Lightbox
        images={images}
        index={selected}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </>
  );
}
