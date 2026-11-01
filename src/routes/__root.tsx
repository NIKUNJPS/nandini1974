import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 py-24 text-center">
      <p className="eyebrow text-muted-foreground">Page not found</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-space-indigo sm:text-5xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 max-w-sm text-sm text-muted-foreground">
        It may have moved. Head back home or take a look at our collections.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-solid">
          Back to Home
        </Link>
        <Link to="/collections" className="btn btn-outline">
          Browse Collections
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 py-24">
      <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn btn-solid"
        >
          Try again
        </button>
        <a href="/" className="btn btn-outline">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nandini Stores — Family Clothing in Nashik Since Generations" },
      {
        name: "description",
        content:
          "Nandini Stores is a family clothing destination on Main Road, Nashik — men's, women's, kids', newborn and woollen collections, festive wear, new arrivals, and school & college uniforms, all under one roof.",
      },
      { name: "author", content: "Nandini Stores" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nandini Stores" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </MotionConfig>
    </QueryClientProvider>
  );
}
