const mono = "[font-family:var(--font-geist-mono)]";

const ACCENT = "#FF4A1B";

const services = [
  {
    id: "automation",
    num: "01",
    title: "Automation engineering",
    blurb:
      "We replace fragile Zapier stacks and overnight cron scripts with typed, observable, version-controlled workflows your ops team will actually defend.",
    deliverables: [
      "Workflow design & rebuild",
      "Internal tools & dashboards",
      "Vendor evaluation & migration",
    ],
  },
  {
    id: "agents",
    num: "02",
    title: "Agent development",
    blurb:
      "Custom agents with real tool access, real evals, and real guardrails. Built on Claude. Deployed where your data lives. Owned by you on day one.",
    deliverables: [
      "Domain-specific agents",
      "Eval & observability suites",
      "Self-hosted deployments",
    ],
  },
  {
    id: "strategy",
    num: "03",
    title: "Strategy & audit",
    blurb:
      "Two-week sprint. Honest read on what's worth building, what's worth buying, and what's worth killing — delivered in plain language, with numbers.",
    deliverables: [
      "Capability mapping",
      "Risk & compliance review",
      "12-month roadmap",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    duration: "2 weeks",
    blurb:
      "We sit beside your team, read your code, interview the operators, and ship a short opinionated brief on where AI moves the needle.",
  },
  {
    num: "02",
    title: "Prototype",
    duration: "3 weeks",
    blurb:
      "A working prototype against your real data. No toy datasets, no demo slides pretending to be software.",
  },
  {
    num: "03",
    title: "Ship",
    duration: "6–10 weeks",
    blurb:
      "We build, instrument, and harden the system end-to-end. Your engineers ship alongside us so nothing is a black box.",
  },
  {
    num: "04",
    title: "Operate",
    duration: "Ongoing",
    blurb:
      "We stay on call, run the evals, tune the prompts. Or hand it off cleanly — your call, every quarter.",
  },
];

const clients = ["Northwind", "Lattice", "Meridian", "Keel", "Cipher", "Novabase"];

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-white text-zinc-950">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-medium tracking-tight">
              Cognaitiv<span className="text-zinc-400">/AI</span>
            </span>
            <span
              className={`${mono} ml-2 hidden rounded-md border border-zinc-200 px-1.5 py-0.5 text-[10px] tracking-tight text-zinc-500 sm:inline-block`}
            >
              v2.4
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {[
              ["Platform", "#services"],
              ["Approach", "#approach"],
              ["Customers", "#work"],
              ["Docs", "#"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-950 sm:inline-block"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-md bg-zinc-950 px-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* faint engineered grid backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-white [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          />
          <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-24 sm:px-8 sm:pt-24 lg:pt-28 lg:pb-32">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pr-3 pl-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  New
                </span>
                <span className={`${mono} text-[11px] tracking-tight text-zinc-700`}>
                  Cognaitiv Agents v2.4 — now in GA
                </span>
                <ArrowSmall className="text-zinc-400" />
              </div>

              <h1 className="text-[2.75rem] leading-[1.03] font-medium tracking-[-0.035em] text-zinc-950 sm:text-6xl lg:text-[4.4rem] lg:tracking-[-0.04em]">
                AI systems that survive&nbsp;contact with&nbsp;production.
              </h1>

              <p className="mt-7 max-w-xl text-[17px] leading-[1.55] text-zinc-600">
                Cognaitiv AI is an automation and consulting studio for teams
                shipping serious software. We design, build, and operate
                agents and workflows end-to-end — on your stack, owned by your
                engineers, with the evals to prove it works.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Book a discovery call
                </a>
                <a
                  href="#approach"
                  className="group inline-flex h-11 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 text-[15px] font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  See how we work
                  <ArrowSmall className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-x-8 gap-y-1 border-t border-zinc-200 pt-7">
                {[
                  ["38", "production systems shipped"],
                  ["41%", "median ticket auto-resolve"],
                  ["99.94%", "agent uptime, p90"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="text-3xl font-medium tracking-[-0.03em] text-zinc-950">
                      {k}
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-zinc-500">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-9 sm:px-8">
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-12">
              <p
                className={`${mono} text-[11px] whitespace-nowrap text-zinc-500`}
              >
                Trusted by engineering teams at —
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
                {clients.map((name) => (
                  <span
                    key={name}
                    className="text-[15px] font-medium tracking-tight text-zinc-500"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
          <SectionLabel label="Platform" />
          <div className="mt-5 grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              One studio. Three<br />things, done properly.
            </h2>
            <p className="self-end text-[17px] leading-[1.55] text-zinc-600">
              We&apos;re a small studio on purpose. Every engagement is staffed
              with senior engineers who have shipped this work before — no
              account-management theatre, no offshore handoff, no PowerPoints
              pretending to be deliverables.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.id}
                className="group relative flex flex-col gap-5 bg-white p-7 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`${mono} text-[11px] text-zinc-400`}
                  >
                    /{s.id}
                  </span>
                  <span
                    className={`${mono} text-[11px] text-zinc-400`}
                  >
                    {s.num}
                  </span>
                </div>
                <h3 className="text-lg font-medium tracking-tight text-zinc-950">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-zinc-600">
                  {s.blurb}
                </p>
                <ul className="mt-auto space-y-2 border-t border-zinc-200 pt-4">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className={`${mono} flex items-center gap-2 text-[12px] text-zinc-600`}
                    >
                      <span
                        className="inline-block h-1 w-1 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
            <SectionLabel label="Approach" />
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              A four-step cadence we&apos;ve run 38 times and counting.
            </h2>

            <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-4">
              {steps.map((step) => (
                <li
                  key={step.num}
                  className="relative flex flex-col gap-5 bg-white p-7 lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`${mono} text-[11px] text-zinc-400`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`${mono} rounded border border-zinc-200 px-1.5 py-0.5 text-[10px] text-zinc-500`}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-zinc-950">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-zinc-600">
                    {step.blurb}
                  </p>
                  <div
                    className="h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CASE STUDY */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
          <SectionLabel label="Customer story" />
          <div className="mt-5 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div className="flex flex-col">
              <div className={`${mono} text-[11px] text-zinc-500`}>
                northwind · series&nbsp;b saas · 2026
              </div>
              <h3 className="mt-6 text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-zinc-950 sm:text-4xl">
                A 12-person support team, suddenly answering tickets at the speed of a 30-person one.
              </h3>
              <p className="mt-6 text-[15.5px] leading-[1.6] text-zinc-600">
                Northwind&apos;s 12-person support team was buried under 4,200
                weekly tickets. We built a triage agent against their Zendesk
                instance, wired it into their internal knowledge base, and
                shipped an eval harness their team owns end-to-end. Three months
                in, the agent resolves 41% of tickets without human touch — and
                everything it doesn&apos;t is categorised, prioritised, and
                routed to the right person.
              </p>
              <figure className="mt-9 rounded-lg border border-zinc-200 bg-zinc-50/60 p-6">
                <blockquote className="text-[16px] leading-[1.55] text-zinc-900">
                  &ldquo;Cognaitiv shipped in eight weeks what our previous
                  vendor promised in six months and never delivered. We own the
                  code, we own the prompts, and the thing actually works.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="inline-block h-8 w-8 rounded-full bg-zinc-200" />
                  <div className="text-[13px]">
                    <div className="font-medium text-zinc-950">Priya Mehta</div>
                    <div className={`${mono} text-[11px] text-zinc-500`}>
                      vp operations · northwind
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200">
              {[
                ["73%", "Faster median response time"],
                ["41%", "Tickets auto-resolved end-to-end"],
                ["8 wk", "Kickoff to production"],
                ["0", "Vendor lock-in. Code shipped on day one."],
              ].map(([metric, label]) => (
                <div key={label as string} className="flex flex-col bg-white p-7 lg:p-9">
                  <div className="text-5xl font-medium tracking-[-0.035em] text-zinc-950 lg:text-6xl">
                    {metric}
                  </div>
                  <div className="mt-5 text-[13px] leading-snug text-zinc-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-zinc-200 bg-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-32">
            <div className="max-w-3xl">
              <SectionLabel label="Get started" />
              <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-6xl">
                Let&apos;s build something that actually&nbsp;ships.
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.55] text-zinc-600">
                30-minute call, no pitch deck. Bring a problem. We&apos;ll bring
                an opinion on whether AI is the right tool for it.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-950 px-6 text-[15px] font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Book a discovery call
              </a>
              <a
                href="mailto:studio@cognaitiv.ai"
                className={`${mono} text-[12px] text-zinc-500 hover:text-zinc-900`}
              >
                studio@cognaitiv.ai
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-2.5">
                <Logo />
                <span className="text-[15px] font-medium tracking-tight">
                  Cognaitiv<span className="text-zinc-400">/AI</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-zinc-600">
                AI systems that survive contact with production. A studio of
                senior engineers, distributed across three timezones.
              </p>
              <div
                className={`${mono} mt-6 flex items-center gap-2 text-[10px] text-zinc-400`}
              >
                <span className="inline-flex items-center gap-1.5 rounded border border-zinc-200 px-1.5 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  All systems operational
                </span>
                <span className="rounded border border-zinc-200 px-1.5 py-0.5">
                  SOC 2 · Type II
                </span>
              </div>
            </div>
            <FooterCol
              heading="Platform"
              links={["Automation", "Agents", "Strategy & audit", "Retainers"]}
            />
            <FooterCol
              heading="Studio"
              links={["About", "Careers", "Press kit", "Manifesto"]}
            />
            <FooterCol
              heading="Contact"
              links={["studio@cognaitiv.ai", "Book a call", "LinkedIn", "GitHub"]}
            />
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-zinc-200 pt-6 md:flex-row md:items-center">
            <p className={`${mono} text-[11px] text-zinc-500`}>
              © 2026 Cognaitiv AI — Studio. All rights reserved.
            </p>
            <p className={`${mono} text-[11px] text-zinc-500`}>
              v2.4.0 · build a7f3e2c
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <span
      className="flex h-6 w-6 items-center justify-center rounded-md"
      style={{ backgroundColor: ACCENT }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <path d="M3 5v6" />
        <path d="M8 3v10" />
        <path d="M13 5v6" />
      </svg>
    </span>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className={`${mono} flex items-center gap-2.5 text-[11px] text-zinc-500`}>
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
      {label.toLowerCase()}
    </div>
  );
}

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className={`${mono} text-[11px] text-zinc-500`}>
        {heading.toLowerCase()}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[13.5px] text-zinc-800 transition-colors hover:text-zinc-950"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowSmall({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 ${className}`}
      aria-hidden="true"
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

