import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { pageHead } from "@/lib/seo";

const collection = getCollection("women");

export const Route = createFileRoute("/collections/women")({
  head: () => pageHead(collection.name, collection.description),
  component: () => (
    <CollectionPage collection={collection} products={getProductsByCollection("women")} />
  ),
});
