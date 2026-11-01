import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { collections } from "@/data/collections";
import { kidsProducts } from "@/data/kids-products";
import { routeTree } from "@/routeTree.gen";

const pages = [
  "/",
  "/about",
  "/collections",
  "/offers",
  "/gallery",
  "/why-choose-nandini",
  "/visit-us",
  "/reviews",
  "/faq",
  "/contact",
  ...collections.map((c) => c.href),
];

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(pages)("matches a page for %s instead of falling back to not found", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Kids products", () => {
  it("lists each catalogue photo once", () => {
    const images = kidsProducts.map((p) => p.image);

    expect(images.length).toBeGreaterThan(0);
    expect(new Set(images).size).toBe(images.length);
  });
});
