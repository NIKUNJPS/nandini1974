import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { ProductCard } from "./ProductCard";
import { CollectionCard } from "./CollectionCard";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { collections, type Collection } from "@/data/collections";
import type { Product } from "@/data/products";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % 4) * 0.06}>
          <ProductCard product={product} priority={i < 4} />
        </Reveal>
      ))}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.slice(0, 4).map((item, i) => (
          <Reveal key={item} delay={i * 0.06} y={12} className="py-6 sm:py-8">
            <p className="text-[11px] font-semibold text-flag-red">0{i + 1}</p>
            <p className="mt-1.5 pr-4 font-display text-base text-space-indigo sm:text-lg">
              {item}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function OtherCollections({ current }: { current: Collection["id"] }) {
  const others = collections.filter((c) => c.id !== current).slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Explore More" title="Discover other collections" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((collection, i) => (
            <Reveal key={collection.id} delay={i * 0.08}>
              <CollectionCard collection={collection} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitCTA() {
  return (
    <CTASection
      eyebrow="Visit Nandini"
      title="See it in person"
      description="Try it on, feel the fabric and find the right fit with help from our team."
      actions={[
        { label: "Visit Store", to: "/visit-us", style: "red" },
        { label: "All Collections", to: "/collections", style: "outline" },
      ]}
    />
  );
}

interface CollectionPageProps {
  collection: Collection;
  title?: string;
  /** Rendered before the product grid. */
  children?: ReactNode;
  products?: Product[];
}

/** Shared layout for every /collections/* page. */
export function CollectionPage({ collection, title, children, products }: CollectionPageProps) {
  return (
    <>
      <PageHero
        eyebrow={collection.tagline}
        title={title ?? collection.name}
        description={collection.description}
        image={collection.image}
        imageAlt={collection.name}
      />
      <Highlights items={collection.highlights} />
      {children}
      {products && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="In Store" title="Styles to look out for" />
            <div className="mt-12">
              <ProductGrid products={products} />
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              Styles shown are examples. Visit the store for the current range, sizes and prices.
            </p>
          </div>
        </section>
      )}
      <VisitCTA />
      <OtherCollections current={collection.id} />
    </>
  );
}
