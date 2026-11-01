/** Per-route <head> tags. Pass to a route's `head` option. */
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Nandini Stores`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
    ],
  };
}
