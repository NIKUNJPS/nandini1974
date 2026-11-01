import { Link } from "@tanstack/react-router";
import { collections } from "@/data/collections";
import { store } from "@/data/store";

const explore = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/collections", label: "Collections" },
  { to: "/offers", label: "Offers & Discounts" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-choose-nandini", label: "Why Choose Nandini" },
  { to: "/visit-us", label: "Visit Our Store" },
  { to: "/reviews", label: "Customer Reviews" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-space-indigo text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl">
            Nandini Stores
            <span
              aria-hidden
              className="ml-2 inline-block h-1.5 w-1.5 translate-y-[-6px] rounded-full bg-punch-red"
            />
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark/70">
            A family clothing store for every generation — everyday essentials, festive wear and
            everything in between, under one roof.
          </p>
        </div>

        <nav aria-label="Footer — explore">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark/60">
            Explore
          </p>
          <ul className="mt-5 space-y-2.5">
            {explore.slice(0, 5).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — more">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark/60">More</p>
          <ul className="mt-5 space-y-2.5">
            {explore.slice(5).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — collections">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark/60">
            Collections
          </p>
          <ul className="mt-5 space-y-2.5">
            {collections.map((c) => (
              <li key={c.id}>
                <Link to={c.href} className="footer-link">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-on-dark/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-on-dark/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Nandini Stores. All rights reserved.</p>
          <p>
            {store.addressLines.join(", ")} &bull;{" "}
            <a href={store.phoneHref} className="transition-colors hover:text-on-dark">
              {store.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
