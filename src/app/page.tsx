import Reveal from "@/components/Reveal";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-zinc-950 selection:bg-sky-200 selection:text-sky-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1 absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-linear-to-tr from-sky-200/60 via-cyan-200/40 to-indigo-200/30 blur-3xl dark:from-sky-500/15 dark:via-cyan-500/10 dark:to-indigo-500/10" />
        <div className="blob blob-2 absolute -bottom-56 right-[-10%] h-[520px] w-[520px] rounded-full bg-linear-to-tr from-sky-200/50 via-cyan-200/35 to-indigo-200/25 blur-3xl dark:from-sky-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10" />
      </div>

      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-sky-600 to-cyan-500 text-white shadow-sm">
              <span className="text-sm font-semibold tracking-tight">AB</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">AB Bank Rwanda</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">Personal • Business • Digital</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200 md:flex">
            <SmoothScrollLink className="nav-underline hover:text-zinc-950 focus-visible:outline-none dark:hover:text-white" href="#products">
              Products
            </SmoothScrollLink>
            <SmoothScrollLink className="nav-underline hover:text-zinc-950 focus-visible:outline-none dark:hover:text-white" href="#security">
              Security
            </SmoothScrollLink>
            <SmoothScrollLink className="nav-underline hover:text-zinc-950 focus-visible:outline-none dark:hover:text-white" href="#pricing">
              Fees
            </SmoothScrollLink>
            <SmoothScrollLink className="nav-underline hover:text-zinc-950 focus-visible:outline-none dark:hover:text-white" href="#support">
              Support
            </SmoothScrollLink>
          </nav>

          <div className="flex items-center gap-3">
            <MobileNav
              links={[
                { href: "#products", label: "Products" },
                { href: "#security", label: "Security" },
                { href: "#pricing", label: "Fees" },
                { href: "#support", label: "Support" },
              ]}
            />
            <ThemeToggle />
            <a
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-flex"
              href="#"
            >
              Sign in
            </a>
            <a
              className="hidden items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:ring-offset-zinc-950 sm:inline-flex"
              href="#"
            >
              Open an account
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="" delayMs={0}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  Banking built for Rwanda — fast, secure, and human.
                </div>

                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  A modern bank for everyday life and growing businesses.
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Open accounts in minutes, pay bills instantly, save smarter, and access credit you can trust.
                  Built with security-first technology and local support.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:ring-offset-zinc-950"
                    href="#"
                  >
                    Get started
                  </a>
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/60 px-6 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    href="#products"
                  >
                    Explore products
                  </a>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className="text-sm font-semibold">Instant transfers</div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Send money in seconds</div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className="text-sm font-semibold">Mobile-first</div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Bank from anywhere</div>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:col-span-1 dark:border-white/10 dark:bg-white/5">
                    <div className="text-sm font-semibold">Transparent fees</div>
                    <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Clear pricing, no surprises</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="" delayMs={120}>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-b from-sky-600/10 to-transparent blur-2xl" />
                <div className="float-slow rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Total balance</div>
                      <div className="mt-1 text-2xl font-semibold tracking-tight">RWF 3,245,900</div>
                    </div>
                    <div className="rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                      +2.4% this month
                    </div>
                  </div>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <div>
                      <div className="text-sm font-semibold">Salary • Incoming</div>
                      <div className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">Today</div>
                    </div>
                    <div className="text-sm font-semibold text-sky-700 dark:text-sky-300">+ RWF 850,000</div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <div>
                      <div className="text-sm font-semibold">Electricity bill</div>
                      <div className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">2 min ago</div>
                    </div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">- RWF 38,500</div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <div>
                      <div className="text-sm font-semibold">Savings</div>
                      <div className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">Auto-save weekly</div>
                    </div>
                    <div className="text-sm font-semibold text-sky-700 dark:text-sky-300">+ RWF 25,000</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    href="#"
                  >
                    Download the app
                  </a>
                  <a
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white/60 px-5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    href="#"
                  >
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <Reveal delayMs={0}>
          <section className="border-y border-zinc-200/70 bg-white/50 dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-4">
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-2xl font-semibold tracking-tight">24/7</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Digital banking access</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-2xl font-semibold tracking-tight">Fast</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Instant payments & transfers</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-2xl font-semibold tracking-tight">Secure</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Fraud monitoring & alerts</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-2xl font-semibold tracking-tight">Local</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Support that understands you</div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section id="products" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              Products
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to manage money.</h2>
            <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Designed for individuals, families, entrepreneurs, and teams — with tools that scale as you grow.
            </p>
            </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="group rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">Everyday Accounts</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Salary and current accounts with instant transfers, bill payments, and smart statements.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-600/10 p-3 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M4 10.5V7.8c0-.66.54-1.2 1.2-1.2h13.6c.66 0 1.2.54 1.2 1.2v2.7M4 10.5h16M4 10.5v5.7c0 .66.54 1.2 1.2 1.2h13.6c.66 0 1.2-.54 1.2-1.2v-5.7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path d="M7 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Instant alerts
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Bill pay
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Smart statements
                </span>
              </div>
            </div>

            <div className="group rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">Savings & Goals</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Create goals, automate deposits, and track progress with clear, transparent growth.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-600/10 p-3 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 7v5l3 2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Auto-save
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Goals
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Insights
                </span>
              </div>
            </div>

            <div className="group rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">Loans for Growth</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Flexible personal and business loans with clear terms and supportive guidance.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-600/10 p-3 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M7 10.5V8.7c0-1 .8-1.8 1.8-1.8h6.4c1 0 1.8.8 1.8 1.8v1.8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 10.5h12c.6 0 1 .4 1 1v5.5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V11.5c0-.6.4-1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 13v2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Clear terms
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Fast review
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Local advisors
                </span>
              </div>
            </div>

            <div className="group rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-lg font-semibold">Cards & Payments</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Shop confidently with secure cards, spend controls, and real-time notifications.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-600/10 p-3 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M4 9.5h16M6 7h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path d="M7 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Spend controls
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Fraud alerts
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-white/10 dark:text-zinc-200">
                  Contactless
                </span>
              </div>
            </div>
          </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section id="security" className="border-y border-zinc-200/70 bg-white/50 dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    Security
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Protecting your money is our first job.
                  </h2>
                  <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    Security features are built into every transfer, login, and payment — with clear controls and proactive alerts.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                      <div className="text-sm font-semibold">Two‑step verification</div>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Extra protection for sign‑ins</div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                      <div className="text-sm font-semibold">Real‑time alerts</div>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Know what happens instantly</div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                      <div className="text-sm font-semibold">Card controls</div>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Freeze, limits, and merchant blocks</div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                      <div className="text-sm font-semibold">Privacy by design</div>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Data minimization & encryption</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Security status</div>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">All systems active</div>
                    </div>
                    <div className="rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                      Protected
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        <span>Login protection</span>
                        <span>Enabled</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10">
                        <div className="h-2 w-[88%] rounded-full bg-sky-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        <span>Transaction monitoring</span>
                        <span>Active</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10">
                        <div className="h-2 w-[94%] rounded-full bg-sky-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                        <span>Device trust</span>
                        <span>High</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-zinc-200 dark:bg-white/10">
                        <div className="h-2 w-[80%] rounded-full bg-sky-600" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl border border-zinc-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="text-sm font-semibold">Need help?</div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Our team can help secure your account and recover access.
                    </div>
                    <a
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      href="#support"
                    >
                      Contact support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section id="pricing" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">Fees</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Simple pricing that’s easy to understand.
                </h2>
                <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Clear fees, clear value. Choose a plan that fits your daily banking and business needs.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold">Everyday</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">RWF 0</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">per month</div>
                  <div className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <div>Transfers & bill pay</div>
                    <div>Instant alerts</div>
                    <div>Digital statements</div>
                  </div>
                  <a
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700"
                    href="#"
                  >
                    Open account
                  </a>
                </div>

                <div className="rounded-3xl border border-sky-600/30 bg-linear-to-b from-sky-600/10 to-white/60 p-6 shadow-sm backdrop-blur dark:border-sky-500/20 dark:from-sky-500/10 dark:to-white/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Business</div>
                    <div className="rounded-full bg-sky-600/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                      Popular
                    </div>
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">RWF 7,500</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">per month</div>
                  <div className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <div>Team access</div>
                    <div>Bulk payments</div>
                    <div>Priority support</div>
                  </div>
                  <a
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    href="#"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section className="border-y border-zinc-200/70 bg-white/50 dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                    Trusted by customers
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Experience that feels calm and confident.
                  </h2>
                  <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    People choose AB Bank Rwanda for reliability, speed, and support — and recommend it to family and teams.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <figure className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <blockquote className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                      “Opening an account was quick, and the app makes it easy to pay bills and send money.”
                    </blockquote>
                    <figcaption className="mt-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      Retail customer • Kigali
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <blockquote className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                      “Our business payments are smoother now — and support is responsive when we need help.”
                    </blockquote>
                    <figcaption className="mt-4 text-xs font-semibold text-zinc-600 dark:text-zinc-400">SME owner • Huye</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section id="support" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">Support</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Questions? We’re here to help.</h2>
                <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                  Find quick answers, or contact our team for account help, card issues, or business onboarding.
                </p>
              </div>

              <div className="space-y-4">
                <details className="group rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur open:bg-white dark:border-white/10 dark:bg-white/5 dark:open:bg-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    How long does it take to open an account?
                  </summary>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Most customers complete onboarding in minutes. Some cases may require additional verification.
                  </div>
                </details>
                <details className="group rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur open:bg-white dark:border-white/10 dark:bg-white/5 dark:open:bg-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold">What if I lose my card?</summary>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    You can freeze your card instantly and request a replacement through support.
                  </div>
                </details>
                <details className="group rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur open:bg-white dark:border-white/10 dark:bg-white/5 dark:open:bg-white/10">
                  <summary className="cursor-pointer list-none text-sm font-semibold">Can businesses get multiple users?</summary>
                  <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Yes. Business accounts support team access with roles and approval workflows depending on your plan.
                  </div>
                </details>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={0}>
          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
            <div className="rounded-3xl border border-sky-600/20 bg-linear-to-br from-sky-600 to-cyan-500 p-8 text-white shadow-sm sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to bank with confidence?</h2>
                  <p className="mt-3 text-lg leading-8 text-white/90">
                    Open an account today and get access to fast payments, savings goals, and local support.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-sky-800 transition hover:bg-white/90"
                    href="#"
                  >
                    Open an account
                  </a>
                  <a
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
                    href="#"
                  >
                    Book a consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="border-t border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-sky-600 to-cyan-500 text-white">
                <span className="text-sm font-semibold tracking-tight">AB</span>
              </div>
              <div>
                <div className="text-sm font-semibold">AB Bank Rwanda</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">Banking for people and progress.</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              This is a demo landing page layout. Replace copy, fees, and product details with your official content.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Company</div>
            <div className="mt-3 grid gap-2 text-zinc-600 dark:text-zinc-400">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#products">
                Products
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#security">
                Security
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#pricing">
                Fees
              </a>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Support</div>
            <div className="mt-3 grid gap-2 text-zinc-600 dark:text-zinc-400">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#support">
                Help center
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Contact
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Branches
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200/70 dark:border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-zinc-600 dark:text-zinc-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} AB Bank Rwanda. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Privacy
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
