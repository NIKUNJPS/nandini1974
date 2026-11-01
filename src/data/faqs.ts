import { store } from "./store";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What collections are available at Nandini Stores?",
    answer:
      "We stock Men's, Women's, Kids', Newborn & Woollen, New Arrivals, Festive and School & College Uniforms. Explore each one from the Collections page.",
  },
  {
    question: "What men's clothing do you stock?",
    answer:
      "The Men's Collection covers everyday kurtas, shirts and trousers, festive and occasion wear, plus winter essentials. See the full range on the Men's Collection page.",
  },
  {
    question: "What is available for women?",
    answer:
      "For women we carry sarees and dress materials, kurtis and co-ord sets, suit sets, festive and occasion wear, and comfortable everyday pieces.",
  },
  {
    question: "Do you have kidswear?",
    answer:
      "Yes — comfortable everyday playwear, school-friendly styles, occasion wear and winter layers for children of all ages.",
  },
  {
    question: "Do you stock newborn clothing?",
    answer:
      "We do. Our Newborn & Woollen Collection includes soft cotton jhablas, sleepsuits, wraps, booties, caps and baby gift sets — all chosen for gentle, skin-friendly fabrics.",
  },
  {
    question: "Is there a woollen or winter collection?",
    answer:
      "Yes. Woollen sweaters, shawls, cardigans and baby winter wear are available across men's, women's, kids' and newborn sizes during the winter season.",
  },
  {
    question: "How often do new arrivals come in?",
    answer:
      "Fresh styles arrive through the season. The New Arrivals page is updated as new stock reaches the store — check back often or visit us to see the latest racks.",
  },
  {
    question: "Do you have a festive collection?",
    answer:
      "Yes — our Festive Collection is curated for Diwali, weddings and family gatherings, with styles for men, women and children. Browse it on the Festive Collection page.",
  },
  {
    question: "When will the Diwali offers be announced?",
    answer:
      "Our Diwali offers will reveal soon. We haven't announced any offers yet — keep an eye on the Offers page, and visit the store around the festive season for the reveal.",
  },
  {
    question: "Do you stock school and college uniforms?",
    answer:
      "Yes — uniforms across sizes, along with shirts, trousers, skirts, sweaters, rainwear and school accessories. Visit the store to check availability for your school or college.",
  },
  {
    question: "Where is the store located?",
    answer: `You'll find us at ${store.addressLines.join(", ")}. The Visit Us page has directions.`,
  },
  {
    question: "What are the store timings?",
    answer:
      "Opening hours will be updated soon on the Visit Us page. Please call ahead if you are planning a special trip.",
  },
  {
    question: "How can I contact the store?",
    answer: `Call us on ${store.phoneDisplay} or drop in at the store — we'd love to see you.`,
  },
];
