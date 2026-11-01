import type { Product } from "./products";

/**
 * Kids' collection images loaded from the stack1-formals and stack2-casuals
 * asset folders. Kept frontend-only; swap in real inventory data later.
 *
 * Catalogue photos carry price labels along the bottom, so they are cropped
 * from the top (`position`) wherever they are displayed.
 */
const imageModules = import.meta.glob<string>(
  ["../assets/stack1-formals/**/*.{jpg,jpeg,png}", "../assets/stack2-casuals/**/*.{jpg,jpeg,png}"],
  { eager: true, query: "?url", import: "default" },
);

export type KidsStyle = "Formal" | "Casual";

export interface KidsProduct extends Product {
  style: KidsStyle;
}

// Some photos sit in both folders under the same file name.
const seen = new Set<string>();
const counts: Record<KidsStyle, number> = { Formal: 0, Casual: 0 };

export const kidsProducts: KidsProduct[] = Object.entries(imageModules).flatMap(([path, url]) => {
  const fileName = path.split("/").at(-1) ?? path;
  if (seen.has(fileName)) return [];
  seen.add(fileName);

  const style: KidsStyle = path.includes("stack1-formals") ? "Formal" : "Casual";
  counts[style] += 1;

  return {
    id: `kids-${style.toLowerCase()}-${counts[style]}`,
    name: `${style} Style ${counts[style]}`,
    category: `Kids · ${style}`,
    collection: "kids" as const,
    style,
    image: url,
    position: "center top",
  };
});
