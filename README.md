# Nandini Stores

Build a **true multi-page website** for **Nandini Stores**.

This MUST NOT be a single-page website where all sections are placed on the Home page.

Use **React + TypeScript + pnpm + Tailwind CSS** and implement proper client-side routing with separate pages/routes.

## MULTI-PAGE WEBSITE REQUIREMENT

Create the following independent pages:

### 1. Home
Route:

`/`

Include:
- Premium hero section
- Brand introduction
- Featured collections
- New arrivals preview
- Festive collection preview
- Diwali offers preview
- Why Choose Nandini preview
- Customer reviews preview
- Visit store CTA
- Contact CTA

The Home page should provide previews and links to the detailed pages.

### 2. About Us
Route:

`/about`

Include:
- About Nandini Stores
- Brand story
- Our philosophy
- Quality & variety
- Family shopping experience
- Why customers choose us

Use an editorial fashion-store layout.

### 3. Collections
Route:

`/collections`

Create a collections landing page containing cards linking to individual collection pages.

Collections:

- Men's Collection → `/collections/men`
- Women's Collection → `/collections/women`
- Kids' Collection → `/collections/kids`
- Newborn & Woollen Collection → `/collections/newborn-woollen`
- New Arrivals → `/collections/new-arrivals`
- Festive Collection → `/collections/festive`

Each collection should have its own dedicated page.

### 4. Men's Collection
Route:

`/collections/men`

Include:
- Hero/banner
- Men's fashion imagery
- Category highlights
- Product/style cards
- CTA to visit store

Use static placeholder product data only.

### 5. Women's Collection
Route:

`/collections/women`

Include:
- Hero/banner
- Women's fashion imagery
- Category highlights
- Product/style cards
- CTA to visit store

### 6. Kids' Collection
Route:

`/collections/kids`

Include:
- Kids fashion imagery
- Comfortable everyday styles
- Occasion wear
- Product/style cards
- CTA to visit store

### 7. Newborn & Woollen Collection
Route:

`/collections/newborn-woollen`

Include:
- Newborn clothing
- Baby essentials
- Winter/woollen clothing
- Soft and comfortable fashion imagery
- Product/style cards

### 8. New Arrivals
Route:

`/collections/new-arrivals`

Create a dedicated latest-arrivals page.

Heading:

**Fresh In. Just Arrived.**

Include:
- Latest fashion categories
- 6–12 placeholder product/style cards
- Editorial image layout
- "Visit Store" CTA

Keep the data static and easy to replace later.

### 9. Festive Collection
Route:

`/collections/festive`

Create a premium festive fashion page.

Heading:

**Celebrate in Style**

Include:
- Festive hero
- Indian festive fashion imagery
- Men's festive styles
- Women's festive styles
- Kids festive styles
- Occasion-based sections
- Visit Store CTA

### 10. Offers & Discounts
Route:

`/offers`

Display:

**Diwali Offers Will Reveal Soon**

Supporting copy:

"Something special is coming your way. Stay tuned for our Diwali offers."

Do NOT create fake discount percentages or fake offers.

Use an elegant promotional layout with Punch Red and Flag Red accents.

### 11. Gallery
Route:

`/gallery`

Create a dedicated visual gallery.

Include:
- Store images
- Fashion images
- Family shopping
- Collections
- Festive fashion

Use a responsive editorial/masonry grid.

Add image hover effects and a lightweight image viewing interaction if possible without adding unnecessary dependencies.

### 12. Why Choose Nandini
Route:

`/why-choose-nandini`

Include:

- Quality You Can Trust
- Styles for Every Generation
- Wide Variety
- Comfortable & Trendy
- Family Shopping Destination
- Customer First

Create a premium storytelling layout rather than simple generic cards.

### 13. Visit Our Store
Route:

`/visit-us`

Include:
- Store introduction
- Address placeholder
- Opening hours placeholder
- Phone placeholder
- Map placeholder
- Get Directions CTA
- Call Us CTA
- WhatsApp CTA

IMPORTANT:
Do not invent the actual address, phone number, timings or location.

Use clearly identifiable editable placeholder values.

### 14. Customer Reviews
Route:

`/reviews`

Include:
- Customer testimonials
- 4–6 placeholder reviews
- Customer names as editable placeholders
- Review cards
- CTA to visit store

Do not invent numerical claims such as "10,000+ happy customers".

### 15. FAQs
Route:

`/faq`

Create a dedicated FAQ page with an interactive accordion.

Questions should cover:

- Available collections
- Men's clothing
- Women's clothing
- Kidswear
- Newborn clothing
- Woollen collection
- New arrivals
- Festive collection
- Diwali offers
- Store location
- Store timings
- Contact information

## NAVIGATION

Create a global reusable navbar that appears on every page.

Desktop navigation:

**NANDINI STORES**

Home  
About Us  
Collections  
Offers  
Gallery  
Why Nandini  
Visit Us  
Reviews  
FAQ  
Contact

Collections should have a dropdown containing:

- Men's Collection
- Women's Collection
- Kids' Collection
- Newborn & Woollen
- New Arrivals
- Festive Collection

Add:

**Visit Store**

as the primary CTA.

Mobile navigation must use a clean hamburger menu.

## ROUTING

Use proper React routing.

The URL structure should be:

```text
/
 /about
 /collections
 /collections/men
 /collections/women
 /collections/kids
 /collections/newborn-woollen
 /collections/new-arrivals
 /collections/festive
 /offers
 /gallery
 /why-choose-nandini
 /visit-us
 /reviews
 /faq
 /contact
```

Every route must load independently.

Do NOT simply use anchor links such as:

`/#about`

`/#collections`

The pages must be separate routes.

## CONTACT PAGE

Create a dedicated Contact page:

`/contact`

Include:

- Contact form
- Name
- Phone
- Email
- Message
- Send Enquiry button
- Call Us
- WhatsApp Us
- Visit Store

The form should be frontend-only with validation and a success state.

Do not add paid email APIs, backend services or databases.

## SHARED COMPONENTS

Create reusable components:

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CollectionCard.tsx
│   ├── ProductCard.tsx
│   ├── ReviewCard.tsx
│   ├── FAQAccordion.tsx
│   ├── CTASection.tsx
│   └── PageHero.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Collections.tsx
│   ├── Men.tsx
│   ├── Women.tsx
│   ├── Kids.tsx
│   ├── NewbornWoollen.tsx
│   ├── NewArrivals.tsx
│   ├── Festive.tsx
│   ├── Offers.tsx
│   ├── Gallery.tsx
│   ├── WhyChooseNandini.tsx
│   ├── VisitUs.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
│
├── data/
│   ├── collections.ts
│   ├── products.ts
│   ├── reviews.ts
│   └── faqs.ts
│
├── App.tsx
└── main.tsx
```

## DESIGN SYSTEM

Use:

```css
--space-indigo: #2b2d42;
--lavender-grey: #8d99ae;
--platinum: #edf2f4;
--punch-red: #ef233c;
--flag-red: #d90429;
```

Use the **Redaction** font:

https://fonts.google.com/specimen/Redaction

Design direction:

**Premium Indian fashion retailer + modern editorial fashion magazine + family clothing store.**

Keep it:
- Elegant
- Minimal
- Premium
- Modern
- Spacious
- Image-focused
- Easy to navigate

Avoid:
- Generic templates
- Excessive gradients
- Excessive rounded cards
- Too many animations
- Overuse of red
- Cluttered layouts

## Constraints

- Do not create a backend
- Do not create a database
- Do not add authentication
- Do not add payment processing
- Do not add CMS
- Do not add paid APIs
- Do not add unnecessary integrations
- Do not install unnecessary packages
- Use static/local data
- Use reusable React components
- Keep the architecture simple
- Prioritize the visual quality and multi-page experience

The result should be a **complete, polished, responsive multi-page Nandini Stores website**, not a single-page landing page.

## Development

Requires Node.js 20.19+ and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Production build:

```sh
pnpm build
pnpm start
```

Store details (address, phone, hours, WhatsApp, email) live in `src/data/store.ts`.
