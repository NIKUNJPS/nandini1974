import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { store } from "@/data/store";
import { pageHead } from "@/lib/seo";
import storeFront from "@/assets/store-front.jpeg";

export const Route = createFileRoute("/visit-us")({
  head: () =>
    pageHead(
      "Visit Our Store",
      `Find Nandini Stores at ${store.addressLines.join(", ")}. Get directions or call us.`,
    ),
  component: VisitUs,
});

function VisitUs() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Come See Us in Person"
        description="Find Nandini Stores on Main Road, Shalimar, Nashik — clothing for every member of the family, under one roof."
        image={storeFront}
        imageAlt="The Nandini Stores shopfront"
        imagePosition="center 30%"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-space-indigo">
              Store Details
            </h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              <Detail icon={MapPin} label="Address">
                {store.addressLines[0]}
                <br />
                {store.addressLines[1]}
              </Detail>
              <Detail icon={Phone} label="Phone">
                <a href={store.phoneHref} className="transition-colors hover:text-flag-red">
                  {store.phoneDisplay}
                </a>
              </Detail>
              <Detail icon={Clock} label="Opening Hours">
                {store.hours ?? "Timings coming soon"}
              </Detail>
              <Detail icon={MessageCircle} label="WhatsApp">
                {store.whatsappUrl ? (
                  <a href={store.whatsappUrl} className="transition-colors hover:text-flag-red">
                    Message us
                  </a>
                ) : (
                  "Coming soon"
                )}
              </Detail>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={store.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-red"
              >
                Get Directions
                <ExternalLink className="size-4" />
              </a>
              <a href={store.phoneHref} className="btn btn-outline">
                Call Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[420px] bg-muted">
            <iframe
              title="Map showing Nandini Stores"
              src={store.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        variant="platinum"
        eyebrow="What to Expect"
        title="Helpful staff and a wide selection"
        description="Men's, women's, kids', newborn and festive wear — and school & college uniforms across sizes."
        actions={[
          { label: "Browse Collections", to: "/collections", style: "solid" },
          { label: "Send an Enquiry", to: "/contact", style: "outline" },
        ]}
      />
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 py-5">
      <Icon className="mt-0.5 size-5 shrink-0 text-flag-red" />
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </li>
  );
}
