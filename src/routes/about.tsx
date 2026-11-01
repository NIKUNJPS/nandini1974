import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pageHead } from "@/lib/seo";
import storeFront from "@/assets/store-front.jpeg";
import storeInside from "@/assets/store-inside.jpeg";

const departments = [
  { title: "Men", items: ["Kurtas & shirts", "Trousers", "Festive wear", "Winter essentials"] },
  {
    title: "Women",
    items: ["Sarees & dress materials", "Kurtis & co-ords", "Suit sets", "Festive wear"],
  },
  { title: "Kids", items: ["Playwear", "School-friendly styles", "Party wear", "Winter layers"] },
  {
    title: "School & College Uniforms",
    items: [
      "Uniforms across sizes",
      "Shirts, trousers, skirts",
      "Sweaters & rainwear",
      "Accessories",
    ],
  },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Us",
      "Nandini Stores has been part of Nashik's Main Road shopping experience for generations.",
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Nandini Stores"
        title="Part of Nashik's Shopping Story"
        description="A familiar name on Main Road, where families shop together for everyday wear, festive clothing and school uniforms."
        image={storeFront}
        imageAlt="Nandini Stores storefront on Main Road, Nashik"
        imagePosition="center 30%"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-20 lg:px-8">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Our Story</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-space-indigo sm:text-4xl lg:text-5xl">
              A Legacy Built on Trust
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Nandini Stores has been part of Nashik's Main Road shopping experience for
              generations. From school uniforms and everyday essentials to festive clothing for the
              entire family, the store has grown through familiarity, variety and the trust of its
              customers.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Parents who once shopped here as children now bring their own families. That is the
              kind of store we want to stay: welcoming, dependable and always ready with the right
              size.
            </p>
            <Link to="/why-choose-nandini" className="btn btn-outline group mt-8">
              Why Choose Nandini
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={storeInside}
              alt="Inside Nandini Stores"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-platinum/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality & Variety"
            title="Clothing for Every Age, Every Occasion"
          />
          <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 0.07}>
                <h3 className="font-display text-xl tracking-tight text-space-indigo">
                  {dept.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {dept.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Family Shopping"
        title="Come Visit Us"
        description="Find us on Main Road, Shalimar, Nashik — we'd love to welcome you in person."
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "red" },
          { label: "Browse Collections", to: "/collections", style: "outline" },
        ]}
      />
    </>
  );
}
