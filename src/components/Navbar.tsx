import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { collections } from "@/data/collections";
import nandiniLogo from "@/assets/nandini logo.jpeg";

const leadLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
] as const;

const trailLinks = [
  { to: "/offers", label: "Offers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-choose-nandini", label: "Why Nandini" },
  { to: "/visit-us", label: "Visit Us" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/60 bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="Nandini Stores home">
            <img
              src={nandiniLogo}
              alt=""
              width={52}
              height={52}
              className="size-[52px] rounded-full object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
            {leadLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}

            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setDropdownOpen(false);
              }}
            >
              <Link
                to="/collections"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className="nav-link flex items-center gap-1.5"
                data-active={isActive(pathname, "/collections")}
              >
                Collections
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-300",
                    dropdownOpen && "rotate-180",
                  )}
                />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4"
                  >
                    <div className="border border-border bg-background p-2 shadow-xl">
                      <Link
                        to="/collections"
                        className={cn(
                          "group flex items-center justify-between px-4 py-3 text-xs font-medium transition-colors",
                          pathname === "/collections"
                            ? "bg-platinum text-space-indigo"
                            : "hover:bg-platinum",
                        )}
                      >
                        <span>All Collections</span>
                        <ArrowIcon />
                      </Link>

                      <div className="my-1 border-t border-border" />

                      {collections.map((collection) => (
                        <Link
                          key={collection.id}
                          to={collection.href}
                          className={cn(
                            "group flex items-center justify-between px-4 py-2.5 text-xs transition-colors",
                            isActive(pathname, collection.href)
                              ? "bg-platinum font-medium text-space-indigo"
                              : "text-muted-foreground hover:bg-platinum hover:text-space-indigo",
                          )}
                        >
                          <span>{collection.name}</span>
                          <ArrowIcon />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {trailLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <Link to="/visit-us" className="btn btn-outline hidden !px-5 !py-2 sm:inline-flex">
              Visit Store
            </Link>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex size-10 items-center justify-center text-space-indigo xl:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 overflow-y-auto border-t border-border bg-background xl:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
              {leadLinks.map((link) => (
                <MobileLink key={link.to} to={link.to} label={link.label} />
              ))}

              {/* Mobile Collections */}
              <div className="border-b border-border py-4">
                <Link
                  to="/collections"
                  className={cn(
                    "text-base font-medium",
                    isActive(pathname, "/collections") ? "text-flag-red" : "text-foreground",
                  )}
                >
                  Collections
                </Link>

                <div className="mt-3 flex flex-col border-l-2 border-border pl-4">
                  {collections.map((collection) => (
                    <Link
                      key={collection.id}
                      to={collection.href}
                      className={cn(
                        "py-2 text-sm transition-colors",
                        isActive(pathname, collection.href)
                          ? "font-medium text-flag-red"
                          : "text-muted-foreground hover:text-space-indigo",
                      )}
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </div>

              {trailLinks.map((link) => (
                <MobileLink key={link.to} to={link.to} label={link.label} />
              ))}

              <Link to="/visit-us" className="btn btn-solid mt-6">
                Visit Store
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Desktop Nav Link */
function NavLink({ to, label }: { to: string; label: string }) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <Link to={to} className="nav-link" data-active={isActive(pathname, to)}>
      {label}
    </Link>
  );
}

/* Mobile Nav Link */
function MobileLink({ to, label }: { to: string; label: string }) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <Link
      to={to}
      className={cn(
        "border-b border-border py-4 text-base font-medium transition-colors",
        isActive(pathname, to) ? "text-flag-red" : "text-foreground hover:text-flag-red",
      )}
    >
      {label}
    </Link>
  );
}

function ArrowIcon() {
  return (
    <span className="text-[11px] text-muted-foreground transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}
