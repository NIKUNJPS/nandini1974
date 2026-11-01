import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Collection } from "@/data/collections";

export function CollectionCard({
  collection,
  wide = false,
}: {
  collection: Collection;
  wide?: boolean;
}) {
  return (
    <Link to={collection.href} className="group block">
      <div
        className={`overflow-hidden bg-muted ${wide ? "aspect-[4/3] lg:h-[calc(100%-5.5rem)] lg:min-h-80 lg:w-full lg:aspect-auto" : "aspect-[4/3]"}`}
      >
        <img
          src={collection.image}
          alt={collection.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3 className="font-display text-xl tracking-tight text-space-indigo transition-colors duration-300 group-hover:text-flag-red sm:text-2xl">
            {collection.name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{collection.tagline}</p>
        </div>
        <ArrowRight className="mt-1.5 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-flag-red" />
      </div>
    </Link>
  );
}
