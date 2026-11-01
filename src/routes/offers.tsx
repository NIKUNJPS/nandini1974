import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import festiveImg from "@/assets/festive-collection.jpg";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/offers")({
  head: () =>
    pageHead(
      "Offers & Discounts",
      "Diwali offers at Nandini Stores will reveal soon. Stay tuned for something special.",
    ),
  component: Offers,
});

function Offers() {
  return (
    <>
      <section className="relative overflow-hidden bg-space-indigo">
        <img
          src={festiveImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-indigo via-space-indigo/70 to-space-indigo/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 block h-px w-24 bg-punch-red"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow text-on-dark/75"
          >
            Offers & Discounts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-on-dark sm:text-6xl lg:text-7xl"
          >
            Diwali Offers Will
            <br />
            <span className="text-punch-red">Reveal Soon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark/85"
          >
            Something special is coming your way. Stay tuned for our Diwali offers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link to="/collections/festive" className="btn btn-red">
              Festive Collection
            </Link>
            <Link to="/visit-us" className="btn btn-ghost-dark">
              Visit Store
            </Link>
          </motion.div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          No offers have been announced yet. Any offers will be listed on this page and in store.
        </p>
      </Reveal>
    </>
  );
}
