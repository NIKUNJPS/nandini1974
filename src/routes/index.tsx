import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";

import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import storeFrontImg from "@/assets/store-front.jpeg";
import storeInsideImg from "@/assets/store-inside.jpeg";
import kidsImg from "@/assets/kids-collection.jpg";
import womensImg from "@/assets/womens-collection.jpg";
import mensImg from "@/assets/mens-collection.jpg";
import festiveImg from "@/assets/festive-collection.jpg";
import newbornImg from "@/assets/newborn-collection.jpg";
import newArrivalsImg from "@/assets/new-arrivals.jpg";

import { reviews } from "@/data/reviews";
import { store } from "@/data/store";

const categoryRows = [
  {
    id: "men",
    number: "01",
    name: "Men",
    tagline: "Everyday ease & occasion polish",
    image: mensImg,
    href: "/collections/men",
  },
  {
    id: "women",
    number: "02",
    name: "Women",
    tagline: "Grace for every day & celebration",
    image: womensImg,
    href: "/collections/women",
  },
  {
    id: "kids",
    number: "03",
    name: "Kids",
    tagline: "Built for play, dressed for occasions",
    image: kidsImg,
    href: "/collections/kids",
  },
  {
    id: "newborn-woollen",
    number: "04",
    name: "Newborn & Woollen",
    tagline: "Softness for the littlest ones",
    image: newbornImg,
    href: "/collections/newborn-woollen",
  },
  {
    id: "uniforms",
    number: "05",
    name: "Uniforms",
    tagline: "School & college uniforms",
    image: kidsImg,
    href: "/collections/uniforms",
  },
  {
    id: "festive",
    number: "06",
    name: "Festive",
    tagline: "Celebrate in style",
    image: festiveImg,
    href: "/collections/festive",
  },
];

const newArrivals = [
  {
    id: "na-1",
    name: "Fresh Cotton Kurtas",
    collection: "New Arrivals · Men",
    image: newArrivalsImg,
  },
  {
    id: "na-2",
    name: "Festive Wear",
    collection: "New Arrivals · Women",
    image: festiveImg,
  },
  {
    id: "na-3",
    name: "Kids' Party Wear",
    collection: "New Arrivals · Kids",
    image: kidsImg,
  },
];

const whyPoints = [
  { title: "Quality you can trust", text: "Honest fabrics and finishes chosen to last." },
  { title: "Styles for every generation", text: "From a baby's first cottons to grandparents." },
  { title: "Customer first", text: "Staff who help you choose rather than just sell." },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return;

    const timer = setInterval(() => {
      setCurrentReview((i) => (i + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentReview]);

  const currentReviewData = reviews[currentReview];

  return (
    <div className="overflow-x-clip">
      <Hero />

      {/* COLLECTIONS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Explore Nandini" title="Collections for Everyone" />
            <Reveal delay={0.1}>
              <Link to="/collections" className="link-arrow group">
                View all collections
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {categoryRows.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.04} y={14}>
                <Link
                  to={cat.href}
                  className="group flex min-h-[92px] items-center gap-4 py-4 transition-[padding] duration-300 hover:px-3 sm:min-h-[112px] sm:gap-6"
                >
                  <span className="w-8 shrink-0 text-[11px] font-semibold text-muted-foreground">
                    {cat.number}
                  </span>

                  <div className="relative h-16 w-24 shrink-0 overflow-hidden sm:h-20 sm:w-32">
                    <img
                      src={cat.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg tracking-tight text-space-indigo transition-colors group-hover:text-flag-red sm:text-2xl">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{cat.tagline}</p>
                  </div>

                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-flag-red" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="bg-platinum/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <SectionHeading eyebrow="New Arrivals" title="Fresh In" />
            <Link to="/collections/new-arrivals" className="link-arrow group hidden sm:inline-flex">
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {newArrivals.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <Link to="/collections/new-arrivals" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-flag-red">
                    {item.collection}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg tracking-tight text-space-indigo">
                      {item.name}
                    </h3>
                    <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-flag-red" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / STORY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <Reveal className="relative aspect-[4/5] overflow-hidden">
            <img
              src={storeInsideImg}
              alt="Inside Nandini Stores"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute left-5 top-5 bg-space-indigo px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-on-dark">
              Main Road, Nashik
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-muted-foreground">A part of Nashik</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-space-indigo sm:text-6xl">
              Trusted by families, generation after generation.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground">
              From everyday essentials and festive clothing to school and college uniforms, Nandini
              Stores brings fashion for every age under one roof on Nashik's Main Road.
            </p>

            <ul className="mt-8 max-w-xl divide-y divide-border border-y border-border">
              {whyPoints.map((point) => (
                <li key={point.title} className="py-4">
                  <p className="font-display text-base text-space-indigo">{point.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{point.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-6">
              <Link to="/about" className="link-arrow group">
                Our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/why-choose-nandini" className="link-arrow group">
                Why choose Nandini
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIWALI OFFERS */}
      <section className="border-y border-border bg-platinum">
        <Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow text-flag-red">Offers</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-space-indigo sm:text-4xl">
              Diwali Offers Will Reveal Soon
            </h2>
          </div>
          <Link to="/offers" className="btn btn-solid shrink-0 self-start md:self-auto">
            Stay Tuned
          </Link>
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="bg-space-indigo py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Customer Reviews"
            title="What families say"
          />

          <div className="relative mt-12 min-h-[190px] sm:min-h-[170px]">
            {currentReviewData ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="font-display text-xl leading-relaxed text-on-dark/90 sm:text-2xl">
                    &ldquo;{currentReviewData.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-on-dark/60">
                    {currentReviewData.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <p className="text-sm text-on-dark/60">Customer reviews coming soon.</p>
            )}
          </div>

          {reviews.length > 0 && (
            <div className="mt-8 flex justify-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => setCurrentReview((i) => (i - 1 + reviews.length) % reviews.length)}
                className="flex size-10 items-center justify-center border border-on-dark/20 transition-colors hover:border-punch-red hover:bg-punch-red"
              >
                <ChevronRight className="size-4 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => setCurrentReview((i) => (i + 1) % reviews.length)}
                className="flex size-10 items-center justify-center border border-on-dark/20 transition-colors hover:border-punch-red hover:bg-punch-red"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* VISIT */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="group relative min-h-[430px] overflow-hidden bg-space-indigo">
            <img
              src={storeFrontImg}
              alt="The Nandini Stores shopfront"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-space-indigo/85 via-space-indigo/50 to-transparent" />

            <div className="relative z-10 flex min-h-[430px] items-end p-7 sm:p-10 lg:p-14">
              <div>
                <p className="eyebrow text-on-dark/75">Visit Us</p>
                <h2 className="mt-3 font-display text-4xl tracking-tight text-on-dark sm:text-6xl">
                  Come see us.
                </h2>
                <p className="mt-5 text-sm leading-6 text-on-dark/85">
                  {store.addressLines[0]}
                  <br />
                  {store.addressLines[1]}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={store.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red group/link"
                  >
                    Get Directions
                    <ExternalLink className="size-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                  <Link to="/contact" className="btn btn-ghost-dark">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
