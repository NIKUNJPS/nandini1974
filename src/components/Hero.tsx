import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-storefront.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: delay + 0.7, ease },
  };
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-space-indigo">
      {/* Cinematic entrance: curtain wipe + blur-to-sharp zoom, then a slow endless Ken Burns drift */}
      <motion.div
        initial={reduceMotion ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-x-0 top-0 h-[58vh] sm:bottom-0 sm:h-auto"
      >
        <motion.div
          animate={reduceMotion ? false : { scale: [1, 1.08, 1], x: ["0%", "-1.5%", "0%"] }}
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity, delay: 2.2 }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroImg}
            width={1774}
            height={887}
            alt="Nandini Stores shopfront with its illuminated sign — नाशिकची वस्त्रसंस्कृती"
            fetchPriority="high"
            initial={reduceMotion ? false : { scale: 1.18, filter: "blur(14px) brightness(0.6)" }}
            animate={{ scale: 1.04, filter: "blur(0px) brightness(1)" }}
            transition={{ duration: 2.2, ease }}
            className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-[50%_20%]"
          />
        </motion.div>
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-r from-space-indigo/80 via-space-indigo/30 to-transparent sm:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-space-indigo/90 via-space-indigo/20 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-[30vh] h-[28vh] bg-gradient-to-b from-transparent to-space-indigo sm:hidden"
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
