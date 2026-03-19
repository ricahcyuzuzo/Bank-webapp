"use client";

import { useEffect, useMemo, useState } from "react";

type AIAssistantPreviewProps = {
  className?: string;
};

export default function AIAssistantPreview({ className }: AIAssistantPreviewProps) {
  const [open, setOpen] = useState(false);

  const suggestions = useMemo(
    () => [
      { title: "Estimate a loan", desc: "See monthly payments in seconds" },
      { title: "Find nearby branches", desc: "Kigali, Huye, Musanze and more" },
      { title: "Card & fraud help", desc: "Freeze a card and report issues" },
      { title: "Bills & transfers", desc: "Guided steps for common payments" },
    ],
    [],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div className={className}>
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-amber-200/70 bg-linear-to-r from-amber-300/90 via-amber-200/80 to-yellow-200/70 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-zinc-950 text-amber-200">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 12.8l.7 2.1 2.2.8-2.2.8-.7 2.1-.7-2.1-2.2-.8 2.2-.8.7-2.1Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-zinc-950">AB Assist AI</div>
                <div className="mt-0.5 text-zinc-900/70">
                  Ask about loans, transfers, card support, or finding the right account — in one chat.
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-900"
              onClick={() => setOpen(true)}
            >
              Get started
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M8 12h8m0 0-3-3m3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-zinc-950 shadow-lg shadow-amber-200/40 transition hover:-translate-y-0.5 hover:bg-amber-200 active:translate-y-0 dark:shadow-black/30"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
          <path
            d="M7.5 9.2c0-2.4 2-4.4 4.5-4.4s4.5 2 4.5 4.4v3.2c0 2.4-2 4.4-4.5 4.4-.8 0-1.6-.2-2.3-.6L9 18.8v-2c-.9-.8-1.5-2-1.5-3.3V9.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M10 10.6h4M10 13h2.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className={"fixed inset-0 z-50 " + (open ? "" : "pointer-events-none")} aria-hidden={!open}>
        <div
          className={
            "absolute inset-0 bg-zinc-950/20 backdrop-blur-sm transition-opacity duration-200 dark:bg-black/40 " +
            (open ? "opacity-100" : "opacity-0")
          }
          onClick={() => setOpen(false)}
        />

        <div
          className={
            "absolute bottom-5 right-5 w-[calc(100%-2.5rem)] max-w-md overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/90 shadow-2xl backdrop-blur transition-all duration-200 dark:border-white/10 dark:bg-zinc-950/85 " +
            (open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
          }
        >
          <div className="flex items-center justify-between border-b border-zinc-200/70 px-5 py-4 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-linear-to-br from-sky-600 to-cyan-500 text-white">
                <span className="text-xs font-semibold">AI</span>
              </div>
              <div>
                <div className="text-sm font-semibold">AB Assist</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Preview UI (not connected yet)</div>
              </div>
            </div>

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

          <div className="px-5 py-4">
            <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              Hi! I can help you choose products, estimate fees, and guide you through common banking tasks.
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Try one of these
              </div>
              <div className="mt-2 grid gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s.title}
                    type="button"
                    className="group rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    onClick={() => setOpen(true)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold">{s.title}</div>
                        <div className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">{s.desc}</div>
                      </div>
                      <div className="mt-0.5 rounded-full bg-sky-600/10 px-2 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                        AI
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                className="h-11 flex-1 rounded-2xl border border-zinc-200 bg-white/70 px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus:ring-sky-500/20"
                placeholder="Ask AB Assist… (coming soon)"
                disabled
              />
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-50"
                disabled
              >
                Send
              </button>
            </div>

            <div className="mt-3 text-center text-[11px] text-zinc-500 dark:text-zinc-400">
              Powered by AB Assist AI (preview)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
