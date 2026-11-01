import mensImg from "@/assets/mens-collection.jpg";
import womensImg from "@/assets/womens-collection.jpg";
import kidsImg from "@/assets/kids-collection.jpg";
import newbornImg from "@/assets/newborn-collection.jpg";
import newArrivalsImg from "@/assets/new-arrivals.jpg";
import festiveImg from "@/assets/festive-collection.jpg";

export type CollectionId =
  "men" | "women" | "kids" | "newborn-woollen" | "new-arrivals" | "festive" | "uniforms";

export interface Collection {
  id: CollectionId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  highlights: string[];
}

export const collections: Collection[] = [
  {
    id: "men",
    name: "Men's Collection",
    shortName: "Men",
    tagline: "From everyday ease to occasion polish",
    description:
      "Kurtas, shirts, trousers and festive wear for men — comfortable cuts, honest fabrics and finishes that last.",
    href: "/collections/men",
    image: mensImg,
    highlights: [
      "Kurtas & Ethnic Sets",
      "Shirts & Trousers",
      "Festive & Occasion Wear",
      "Winter Essentials",
    ],
  },
  {
    id: "women",
    name: "Women's Collection",
    shortName: "Women",
    tagline: "Grace for every day and every celebration",
    description:
      "Sarees, kurtis, dress materials and co-ord sets — a wardrobe that moves easily from home to celebration.",
    href: "/collections/women",
    image: womensImg,
    highlights: [
      "Sarees & Dress Materials",
      "Kurtis & Co-ord Sets",
      "Festive & Occasion Wear",
      "Everyday Comforts",
    ],
  },
  {
    id: "kids",
    name: "Kids' Collection",
    shortName: "Kids",
    tagline: "Built for play, dressed for occasions",
    description:
      "Comfortable everyday styles and occasion wear for children — soft fabrics, easy fits and colours they love.",
    href: "/collections/kids",
    image: kidsImg,
    highlights: [
      "Everyday Playwear",
      "Occasion & Festive Wear",
      "School-friendly Styles",
      "Winter Layers",
    ],
  },
  {
    id: "newborn-woollen",
    name: "Newborn & Woollen Collection",
    shortName: "Newborn & Woollen",
    tagline: "Softness for the littlest ones",
    description:
      "Gentle newborn clothing, baby essentials and warm woollen wear for the whole family — chosen for softness first.",
    href: "/collections/newborn-woollen",
    image: newbornImg,
    highlights: [
      "Newborn Clothing",
      "Baby Essentials",
      "Woollen & Winter Wear",
      "Gentle, Skin-friendly Fabrics",
    ],
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    shortName: "New Arrivals",
    tagline: "Fresh in, just arrived",
    description:
      "The latest pieces to reach our racks — fresh styles across every department, updated through the season.",
    href: "/collections/new-arrivals",
    image: newArrivalsImg,
    highlights: ["Latest Styles", "Fresh Season Picks", "Across All Departments", "In Store Now"],
  },
  {
    id: "festive",
    name: "Festive Collection",
    shortName: "Festive",
    tagline: "Celebrate in style",
    description:
      "Festive wear for Diwali, weddings and family gatherings — traditional silhouettes with a modern, elegant finish.",
    href: "/collections/festive",
    image: festiveImg,
    highlights: ["Diwali Picks", "Wedding Season", "Family Coordinates", "Kids' Festive Wear"],
  },
  {
    id: "uniforms",
    name: "School & College Uniforms",
    shortName: "Uniforms",
    tagline: "Everything students need, under one roof",
    description:
      "School and college uniforms across sizes — shirts, trousers, skirts, sweaters, rainwear and school accessories. Visit the store for availability and sizing.",
    href: "/collections/uniforms",
    image: kidsImg,
    highlights: [
      "School Uniforms",
      "College Uniforms",
      "Shirts & Trousers",
      "Sweaters & Rainwear",
      "School Accessories",
      "Multiple Sizes",
    ],
  },
];

export function getCollection(id: CollectionId): Collection {
  const found = collections.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown collection: ${id}`);
  return found;
}
