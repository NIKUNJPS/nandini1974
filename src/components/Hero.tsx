import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-main.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  };
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-space-indigo">
      <motion.img
        src={heroImg}
        width={1600}
        height={912}
        alt="Clothing on display inside Nandini Stores"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-space-indigo/90 via-space-indigo/55 to-space-indigo/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-space-indigo/85 via-transparent to-space-indigo/10"
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p {...rise(0.1)} className="eyebrow text-on-dark/75">
            Nashik · Main Road
          </motion.p>
          <motion.h1
            {...rise(0.22)}
            className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-on-dark sm:text-7xl lg:text-8xl"
          >
            A Legacy
            <br />
            <span className="text-punch-red">Of Style.</span>
          </motion.h1>
          <motion.p
            {...rise(0.38)}
            className="mt-7 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg"
          >
            Clothing for everyday moments, celebrations and everything in between — for every member
            of the family.
          </motion.p>
          <motion.div {...rise(0.52)} className="mt-9 flex flex-wrap gap-3">
            <Link to="/collections" className="btn btn-red group">
              Explore Collections
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/visit-us" className="btn btn-ghost-dark">
              Visit Our Store
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
