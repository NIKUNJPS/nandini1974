import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection } from "@/components/CTASection";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageHead } from "@/lib/seo";
import storeFront from "@/assets/store-front.jpeg";
import storeFrontWide from "@/assets/store-front.jpg";
import storeInside from "@/assets/store-inside.jpeg";
import storeInsides from "@/assets/store-insides.jpeg";
import hero from "@/assets/hero-main.jpg";
import mens from "@/assets/mens-collection.jpg";
import womens from "@/assets/womens-collection.jpg";
import kids from "@/assets/kids-collection.jpg";
import newborn from "@/assets/newborn-collection.jpg";
import festive from "@/assets/festive-collection.jpg";
import arrivals from "@/assets/new-arrivals.jpg";
import photo1 from "@/assets/store-photos/store-photo-1.jpg";
import photo2 from "@/assets/store-photos/store-photo-2.jpg";
import photo3 from "@/assets/store-photos/store-photo-3.jpg";
import photo4 from "@/assets/store-photos/store-photo-4.jpg";
import photo5 from "@/assets/store-photos/store-photo-5.jpg";
import photo6 from "@/assets/store-photos/store-photo-6.jpg";
import photo7 from "@/assets/store-photos/store-photo-7.jpg";
import photo8 from "@/assets/store-photos/store-photo-8.jpg";

const images: LightboxImage[] = [
  {
    src: photo8,
    alt: "Nandini Stores shopfront lit up in the evening",
    caption: "Our store at night",
  },
  { src: photo3, alt: "Customers being served at the counter", caption: "Serving our customers" },
  {
    src: photo4,
    alt: "Long aisle of display counters inside the store",
    caption: "Inside the store",
  },
  {
    src: photo1,
    alt: "Shelves stacked with clothing behind the counter",
    caption: "Fully stocked shelves",
  },
  { src: photo7, alt: "Glass display counters along the store aisle", caption: "Display counters" },
  { src: photo5, alt: "Store aisle with menswear displays", caption: "Menswear section" },
  { src: photo2, alt: "Counter and stacked clothing racks", caption: "Our collection racks" },
  { src: photo6, alt: "Staff at the display counters", caption: "Our friendly staff" },
  { src: storeFront, alt: "The Nandini Stores shopfront", caption: "Our store" },
  { src: womens, alt: "Women's fashion", caption: "Women's collection" },
  { src: storeInside, alt: "Inside Nandini Stores", caption: "Inside the store" },
  { src: festive, alt: "Festive fashion", caption: "Festive collection" },
  { src: kids, alt: "Kids' fashion", caption: "Kids' collection" },
  { src: hero, alt: "Family clothing at Nandini Stores", caption: "Shopping together" },
  { src: mens, alt: "Men's fashion", caption: "Men's collection" },
  { src: storeInsides, alt: "Kidswear on display", caption: "Kidswear department" },
  { src: newborn, alt: "Newborn clothing", caption: "Newborn & woollen" },
  { src: storeFrontWide, alt: "Nandini Stores on Main Road", caption: "Main Road, Nashik" },
  { src: arrivals, alt: "New arrivals", caption: "New arrivals" },
];

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Gallery",
      "A look inside Nandini Stores, Nashik — the store, the collections and more.",
    ),
  component: Gallery,
});

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside Nandini"
        description="The store, the racks and the collections that keep Nashik's families coming back."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="columns-2 gap-4 lg:columns-3 lg:gap-6">
          {images.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 0.06}
              className="mb-4 break-inside-avoid lg:mb-6"
            >
              <button
                type="button"
                aria-label={`View ${image.alt}`}
                onClick={() => setSelected(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-space-indigo/80 to-transparent p-4 pt-10 text-left text-sm text-on-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {image.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Visit Nandini"
        title="Better in person"
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "red" },
          { label: "Browse Collections", to: "/collections", style: "outline" },
        ]}
      />

      <Lightbox
        images={images}
        index={selected}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </>
  );
}
