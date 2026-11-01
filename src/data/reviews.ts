/**
 * Placeholder customer reviews.
 * These are sample layouts with editable placeholder details — replace the
 * quotes, names and details with real customer feedback. No invented
 * statistics (customer counts, ratings) are used anywhere.
 */
export interface Review {
  id: string;
  quote: string;
  name: string;
  detail: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    quote:
      "I shop for my whole family here — kurtas for my husband, frocks for my daughter and sarees for my mother. One store, and everything fits well.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Family shopper · Placeholder review",
  },
  {
    id: "r2",
    quote:
      "The variety is what keeps me coming back. Everyday wear, festive wear, winter wear — and the staff genuinely help you pick instead of just selling.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Regular customer · Placeholder review",
  },
  {
    id: "r3",
    quote:
      "We dressed the entire family for Diwali from Nandini Stores. Matching colours for everyone, comfortable fabrics, and compliments all evening.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Festive shopper · Placeholder review",
  },
  {
    id: "r4",
    quote:
      "Bought newborn clothes for my sister's baby. Everything was soft, gentle and nicely packed. It's my go-to for baby gifting now.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Baby & gifting shopper · Placeholder review",
  },
  {
    id: "r5",
    quote:
      "Good quality at honest prices. My children's school and play clothes all come from here and they last the whole year.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Kidswear shopper · Placeholder review",
  },
  {
    id: "r6",
    quote:
      "A store where you can take your time. No pressure, plenty of choice, and they remember what you like when you return.",
    name: "Customer Name", // placeholder — replace with real customer name
    detail: "Long-time customer · Placeholder review",
  },
];
