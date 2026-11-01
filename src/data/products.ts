import mensImg from "@/assets/mens-collection.jpg";
import womensImg from "@/assets/womens-collection.jpg";
import kidsImg from "@/assets/kids-collection.jpg";
import newbornImg from "@/assets/newborn-collection.jpg";
import newArrivalsImg from "@/assets/new-arrivals.jpg";
import festiveImg from "@/assets/festive-collection.jpg";
import type { CollectionId } from "./collections";

/**
 * Static placeholder product data — easy to replace with real inventory later.
 * No prices: nothing here is for sale online, so cards stay price-free.
 */
export interface Product {
  id: string;
  name: string;
  category: string;
  collection: CollectionId;
  tag?: string;
  image: string;
  /** CSS object-position so repeated images crop differently. */
  position?: string;
}

export const products: Product[] = [
  // ---- Men ----
  {
    id: "men-1",
    name: "Linen Kurta Set",
    category: "Ethnic · Everyday",
    collection: "men",
    tag: "Everyday",
    image: mensImg,
    position: "center 20%",
  },
  {
    id: "men-2",
    name: "Classic Bandhgala",
    category: "Occasion Wear",
    collection: "men",
    tag: "Occasion",
    image: mensImg,
    position: "center 45%",
  },
  {
    id: "men-3",
    name: "Everyday Cotton Shirt",
    category: "Shirts",
    collection: "men",
    image: mensImg,
    position: "center 70%",
  },
  {
    id: "men-4",
    name: "Tailored Trousers",
    category: "Bottoms",
    collection: "men",
    image: mensImg,
    position: "center 90%",
  },
  {
    id: "men-5",
    name: "Festive Silk Kurta",
    category: "Ethnic · Festive",
    collection: "men",
    tag: "Festive",
    image: festiveImg,
    position: "center 30%",
  },
  {
    id: "men-6",
    name: "Woollen Crew Neck",
    category: "Winter Wear",
    collection: "men",
    tag: "Winter",
    image: newArrivalsImg,
    position: "left 60%",
  },

  // ---- Women ----
  {
    id: "women-1",
    name: "Handloom Cotton Saree",
    category: "Sarees",
    collection: "women",
    tag: "Everyday",
    image: womensImg,
    position: "center 30%",
  },
  {
    id: "women-2",
    name: "Chikankari Kurti",
    category: "Kurtis",
    collection: "women",
    image: womensImg,
    position: "center 55%",
  },
  {
    id: "women-3",
    name: "Co-ord Lounge Set",
    category: "Co-ords",
    collection: "women",
    tag: "New",
    image: newArrivalsImg,
    position: "right 40%",
  },
  {
    id: "women-4",
    name: "Festive Banarasi Saree",
    category: "Sarees · Festive",
    collection: "women",
    tag: "Festive",
    image: festiveImg,
    position: "center 50%",
  },
  {
    id: "women-5",
    name: "Straight-Cut Salwar Suit",
    category: "Suit Sets",
    collection: "women",
    image: womensImg,
    position: "center 80%",
  },
  {
    id: "women-6",
    name: "Woollen Shawl",
    category: "Winter Wear",
    collection: "women",
    tag: "Winter",
    image: newArrivalsImg,
    position: "center 70%",
  },

  // ---- Kids ----
  {
    id: "kids-1",
    name: "Boys' Festive Kurta Set",
    category: "Ethnic · Festive",
    collection: "kids",
    tag: "Festive",
    image: kidsImg,
    position: "left 30%",
  },
  {
    id: "kids-2",
    name: "Girls' Lehenga Set",
    category: "Occasion Wear",
    collection: "kids",
    tag: "Occasion",
    image: kidsImg,
    position: "right 40%",
  },
  {
    id: "kids-3",
    name: "Everyday Cotton Play Set",
    category: "Playwear",
    collection: "kids",
    image: kidsImg,
    position: "center 70%",
  },
  {
    id: "kids-4",
    name: "Party Frock",
    category: "Occasion Wear",
    collection: "kids",
    image: kidsImg,
    position: "center 20%",
  },
  {
    id: "kids-5",
    name: "Kids' Sweatshirt",
    category: "Winter Wear",
    collection: "kids",
    tag: "Winter",
    image: newArrivalsImg,
    position: "center 30%",
  },
  {
    id: "kids-6",
    name: "Warm Sweater Set",
    category: "Winter Wear",
    collection: "kids",
    image: newArrivalsImg,
    position: "right 70%",
  },

  // ---- Newborn & Woollen ----
  {
    id: "nb-1",
    name: "Cotton Jhabla Set",
    category: "Newborn",
    collection: "newborn-woollen",
    tag: "Soft Cotton",
    image: newbornImg,
    position: "center 25%",
  },
  {
    id: "nb-2",
    name: "Soft Sleepsuit",
    category: "Newborn",
    collection: "newborn-woollen",
    image: newbornImg,
    position: "center 45%",
  },
  {
    id: "nb-3",
    name: "Knitted Booties & Cap",
    category: "Baby Essentials",
    collection: "newborn-woollen",
    image: newbornImg,
    position: "center 70%",
  },
  {
    id: "nb-4",
    name: "Woollen Baby Sweater",
    category: "Woollen Wear",
    collection: "newborn-woollen",
    tag: "Winter",
    image: newbornImg,
    position: "center 90%",
  },
  {
    id: "nb-5",
    name: "Muslin Wrap",
    category: "Baby Essentials",
    collection: "newborn-woollen",
    image: newbornImg,
    position: "left 40%",
  },
  {
    id: "nb-6",
    name: "Baby Gift Set",
    category: "Gifting",
    collection: "newborn-woollen",
    tag: "Gifting",
    image: newbornImg,
    position: "right 60%",
  },

  // ---- Festive ----
  {
    id: "fest-men-1",
    name: "Silk Kurta Set",
    category: "Men · Festive",
    collection: "festive",
    image: festiveImg,
    position: "left 40%",
  },
  {
    id: "fest-men-2",
    name: "Embroidered Sherwani",
    category: "Men · Wedding",
    collection: "festive",
    image: festiveImg,
    position: "center 35%",
  },
  {
    id: "fest-women-1",
    name: "Banarasi Silk Saree",
    category: "Women · Festive",
    collection: "festive",
    image: festiveImg,
    position: "center 55%",
  },
  {
    id: "fest-women-2",
    name: "Anarkali Suit",
    category: "Women · Festive",
    collection: "festive",
    image: festiveImg,
    position: "center 75%",
  },
  {
    id: "fest-kids-1",
    name: "Boys' Sherwani",
    category: "Kids · Festive",
    collection: "festive",
    image: festiveImg,
    position: "right 40%",
  },
  {
    id: "fest-kids-2",
    name: "Girls' Festive Lehenga",
    category: "Kids · Festive",
    collection: "festive",
    image: kidsImg,
    position: "center 35%",
  },
];

const newArrivalIds = [
  "men-1",
  "women-3",
  "kids-1",
  "women-2",
  "men-5",
  "kids-4",
  "nb-1",
  "women-4",
];

export const newArrivals: Product[] = newArrivalIds.flatMap((id) =>
  products.filter((p) => p.id === id),
);

export function getProductsByCollection(id: CollectionId): Product[] {
  return products.filter((p) => p.collection === id);
}
