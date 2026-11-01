import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/faqs";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead(
      "FAQs",
      "Answers about Nandini Stores' collections, uniforms, Diwali offers, location and contact details.",
    ),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked"
        title="Questions You Might Have"
        description="Straightforward answers about Nandini Stores."
      />
      <Reveal className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <FAQAccordion items={faqs} />
      </Reveal>
      <CTASection
        variant="platinum"
        title="Still Have a Question?"
        description="We're happy to help — visit the store or get in touch."
        actions={[
          { label: "Visit Store", to: "/visit-us", style: "solid" },
          { label: "Contact Us", to: "/contact", style: "outline" },
        ]}
      />
    </>
  );
}
