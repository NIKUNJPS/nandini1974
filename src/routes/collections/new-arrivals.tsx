import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { getCollection } from "@/data/collections";
import { newArrivals } from "@/data/products";
import { pageHead } from "@/lib/seo";

const collection = getCollection("new-arrivals");

export const Route = createFileRoute("/collections/new-arrivals")({
  head: () => pageHead(collection.name, collection.description),
  component: () => (
    <CollectionPage
      collection={collection}
      title="Fresh In. Just Arrived."
      products={newArrivals}
    />
  ),
});
