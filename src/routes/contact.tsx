import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { store } from "@/data/store";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface Enquiry {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const inputClass =
  "w-full border bg-transparent px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-space-indigo focus:outline-none";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      `Call Nandini Stores on ${store.phoneDisplay} or visit us on Main Road, Shalimar, Nashik.`,
    ),
  component: Contact,
});

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Enquiry>();
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Call us, send an enquiry or visit us on Main Road, Shalimar, Nashik."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight text-space-indigo">Reach Us</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-flag-red" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {store.addressLines[0]}
                  <br />
                  {store.addressLines[1]}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-flag-red" />
                <a
                  href={store.phoneHref}
                  className="text-sm text-muted-foreground transition-colors hover:text-flag-red"
                >
                  {store.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={store.phoneHref} className="btn btn-solid">
                Call Us
              </a>
              {store.whatsappUrl && (
                <a href={store.whatsappUrl} className="btn btn-outline">
                  WhatsApp Us
                </a>
              )}
              <a
                href={store.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Visit Store
                <ExternalLink className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="border border-border bg-card p-6 sm:p-10">
            <AnimatePresence mode="wait" initial={false}>
              {submittedName ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  role="status"
                >
                  <h2 className="font-display text-2xl tracking-tight text-space-indigo">
                    Thank you, {submittedName}.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Online enquiries are still being set up, so your message has not reached the
                    store. Please call us on {store.phoneDisplay} or drop in and we will be happy to
                    help.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setSubmittedName(null);
                    }}
                    className="btn btn-outline mt-6"
                  >
                    Back to form
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  noValidate
                  // Frontend-only for now. No backend, no paid email service.
                  onSubmit={handleSubmit((data) => setSubmittedName(data.name))}
                  className="space-y-5"
                >
                  <h2 className="font-display text-2xl tracking-tight text-space-indigo">
                    Send an Enquiry
                  </h2>
                  <Field id="name" label="Name" error={errors.name?.message}>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                      className={cn(inputClass, errors.name && "border-destructive")}
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="phone" label="Phone" error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your phone number"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[+\d][\d\s-]{7,}$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                        className={cn(inputClass, errors.phone && "border-destructive")}
                      />
                    </Field>
                    <Field id="email" label="Email (optional)" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...register("email", {
                          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                        })}
                        className={cn(inputClass, errors.email && "border-destructive")}
                      />
                    </Field>
                  </div>
                  <Field id="message" label="Message" error={errors.message?.message}>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      {...register("message", { required: "Message is required" })}
                      className={cn(inputClass, errors.message && "border-destructive")}
                    />
                  </Field>
                  <button type="submit" className="btn btn-red w-full">
                    Send Enquiry
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
