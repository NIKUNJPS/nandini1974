import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border border-border bg-card">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-accent sm:px-7"
            >
              <span className="text-[15px] font-medium text-space-indigo sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7 sm:pr-16">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
