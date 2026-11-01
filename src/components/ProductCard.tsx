import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onSelect?: () => void;
}

export function ProductCard({ product, priority = false, onSelect }: ProductCardProps) {
  const image = (
    <div className="relative aspect-[5/6] overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={product.position ? { objectPosition: product.position } : {}}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      {product.tag && (
        <span className="absolute left-3 top-3 bg-on-dark/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-space-indigo">
          {product.tag}
        </span>
      )}
      {onSelect && (
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-space-indigo/95 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-on-dark transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
          View Style
        </span>
      )}
    </div>
  );

  const caption = (
    <figcaption className="mt-3.5 text-left">
      <p className="text-sm font-medium text-space-indigo transition-colors duration-300 group-hover:text-flag-red">
        {product.name}
      </p>
      <p className="mt-0.5 text-xs text-muted-foreground">{product.category}</p>
    </figcaption>
  );

  if (onSelect) {
    return (
      <button type="button" onClick={onSelect} className="group block w-full">
        <figure>
          {image}
          {caption}
        </figure>
      </button>
    );
  }

  return (
    <figure className="group">
      {image}
      {caption}
    </figure>
  );
}
