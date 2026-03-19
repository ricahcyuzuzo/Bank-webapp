"use client";

import { useEffect, useState } from "react";
import SmoothScrollLink from "@/components/SmoothScrollLink";

type MobileNavProps = {
  links: Array<{ href: string; label: string }>;
};

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10 md:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      <div
        className={["fixed inset-0 z-50 md:hidden", open ? "" : "pointer-events-none"].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-zinc-950/20 backdrop-blur-sm transition-opacity duration-200 dark:bg-black/40",
            open ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        <div
          className={[
            "absolute right-0 top-0 h-dvh w-[86%] max-w-sm border-l border-zinc-200/70 bg-white/90 shadow-2xl backdrop-blur transition-transform duration-200 ease-out dark:border-white/10 dark:bg-zinc-950/85",
            "rounded-l-3xl",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
            <div className="flex items-center justify-between px-5 pb-3 pt-5">
              <div className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Menu</div>
              <button
                type="button"
                aria-label="Close"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-5 pb-5">
              <div className="grid gap-1">
                {links.map((l) => (
                  <SmoothScrollLink
                    key={l.href}
                    href={l.href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-none dark:text-zinc-50 dark:hover:bg-white/10"
                    offsetPx={96}
                    onClick={() => setOpen(false)}
                  >
                    <span>{l.label}</span>
                    <svg viewBox="0 0 24 24" className="h-5 w-5 opacity-60" fill="none" aria-hidden="true">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </SmoothScrollLink>
                ))}
              </div>

              <div className="mt-5 h-px w-full bg-zinc-200/70 dark:bg-white/10" />

              <div className="mt-5 grid gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  href="#"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-sky-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                  href="#"
                  onClick={() => setOpen(false)}
                >
                  Open an account
                </a>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
