const serif = "[font-family:var(--font-instrument-serif)]";
const mono = "[font-family:var(--font-geist-mono)]";

const services = [
  {
    num: "01",
    title: "Automation Engineering",
    blurb:
      "We replace the spreadsheet spaghetti, the 11 PM Zapier alerts, and the duct-taped Make.com flows with systems your ops team will actually defend.",
    items: ["Workflow design & rebuild", "Internal tools & dashboards", "Vendor evaluation & migration"],
  },
  {
    num: "02",
    title: "Agent Development",
    blurb:
      "Custom agents with real tool access, real evals, and real guardrails. Built on Claude, deployed where your data lives, owned by you on day one.",
    items: ["Domain-specific agents", "Eval & observability suites", "Self-hosted deployments"],
  },
  {
    num: "03",
    title: "AI Strategy & Audit",
    blurb:
      "An honest read on what's worth building, what's worth buying, and what's worth killing. Delivered in two weeks, in plain language, with numbers.",
    items: ["Capability mapping", "Risk & compliance review", "12-month roadmap"],
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    blurb:
      "Two weeks. We sit beside your team, read your code, and write you a short, opinionated brief on where AI actually moves the needle.",
  },
  {
    num: "02",
    title: "Prototype",
    blurb:
      "Three weeks. A working prototype against your real data. No demos with toy datasets, no slides pretending to be software.",
  },
  {
    num: "03",
    title: "Ship",
    blurb:
      "Six to ten weeks. We build, instrument, and harden the system end-to-end. Your engineers ship alongside us so nothing is a black box.",
  },
  {
    num: "04",
    title: "Operate",
    blurb:
      "Ongoing. We stay on call, run the evals, and tune the prompts. Or we hand it off cleanly — your call, every quarter.",
  },
];

const clients = ["Northwind", "Lattice", "Meridian", "Keel", "Cipher", "Novabase"];

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-white text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-black/[0.06] bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
          <a href="#" className="flex items-baseline gap-1.5">
            <span className={`${serif} text-2xl leading-none italic`}>Cognaitiv</span>
            <span className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
              AI
            </span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {["Work", "Services", "Approach", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm text-zinc-700 transition-colors hover:text-zinc-950"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-zinc-950 pr-2 pl-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Book a call
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5A1F] text-zinc-950 transition-transform group-hover:translate-x-0.5">
              <Arrow />
            </span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:px-10 sm:pt-24 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div className="flex flex-col items-start">
              <div className={`${mono} mb-8 flex items-center gap-3 text-[11px] tracking-[0.22em] text-zinc-500 uppercase`}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
                AI automation studio · Est. 2026
              </div>
              <h1 className="text-[2.6rem] leading-[1.02] tracking-tight text-zinc-950 sm:text-6xl lg:text-[4.4rem]">
                We build AI that{" "}
                <span className={`${serif} italic`}>actually&nbsp;ships</span>{" "}
                <span className="block">— and keeps running.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600">
                Cognaitiv AI is an automation &amp; consulting studio for serious teams.
                We design, build, and operate AI systems that survive contact with
                production — so your software stops being a museum of half-finished
                pilots.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-base font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Book a discovery call
                </a>
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center gap-2 text-base font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-[6px] transition-colors hover:decoration-zinc-900"
                >
                  See recent work
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <dl className="mt-14 grid w-full max-w-md grid-cols-3 gap-6 border-t border-black/[0.08] pt-8">
                {[
                  ["38", "production systems"],
                  ["12", "industries served"],
                  ["6 wk", "median ship time"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className={`${serif} text-3xl text-zinc-950 italic`}>{k}</dt>
                    <dd className={`${mono} mt-1 text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CHARACTER PLACEHOLDER */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-dashed border-black/15 bg-zinc-50">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-zinc-400">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-20 w-20"
                    aria-hidden="true"
                  >
                    <rect x="14" y="20" width="36" height="30" rx="8" />
                    <circle cx="24" cy="33" r="2.4" fill="currentColor" stroke="none" />
                    <circle cx="40" cy="33" r="2.4" fill="currentColor" stroke="none" />
                    <path d="M25 42c2 2 5 3 7 3s5-1 7-3" />
                    <path d="M32 14v6" />
                    <circle cx="32" cy="12" r="2.5" />
                  </svg>
                  <div className={`${mono} text-center text-[10px] tracking-[0.22em] uppercase`}>
                    Character placeholder
                    <div className="mt-1 text-zinc-300">1024 × 1024 · PNG</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 rotate-[-4deg] rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
                <span className={`${mono} text-[10px] tracking-[0.18em] text-zinc-700 uppercase`}>
                  Mascot · v0.1
                </span>
              </div>
              <div className="absolute -right-4 -bottom-4 rotate-[3deg] rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <div className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
                  Generated by
                </div>
                <div className="mt-0.5 text-sm font-medium text-zinc-900">
                  Higgsfield · GPT Image 2
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="border-y border-black/[0.06] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
              <p className={`${mono} text-[11px] tracking-[0.22em] whitespace-nowrap text-zinc-500 uppercase`}>
                Trusted by ambitious teams —
              </p>
              <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
                {clients.map((name, i) => (
                  <span
                    key={name}
                    className={`${
                      i % 2 === 0 ? serif + " text-2xl italic" : "text-lg font-semibold tracking-tight"
                    } text-zinc-700`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionLabel index="§ 01" label="Services" />
          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h2 className="text-4xl leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl">
              Three things, done <span className={`${serif} italic`}>properly</span>.
            </h2>
            <p className="self-end text-lg leading-relaxed text-zinc-600">
              We're a small studio on purpose. Every engagement is staffed with
              senior engineers who have shipped this work before — no
              account-management theatre, no offshore handoff.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.06] md:grid-cols-3">
            {services.map((s) => (
              <article key={s.num} className="flex flex-col gap-6 bg-white p-8 lg:p-10">
                <div className="flex items-baseline justify-between">
                  <span className={`${serif} text-5xl text-zinc-950 italic`}>{s.num}</span>
                  <span className={`${mono} text-[10px] tracking-[0.22em] text-zinc-400 uppercase`}>
                    Service
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-zinc-600">{s.blurb}</p>
                <ul className="mt-auto space-y-2 border-t border-black/[0.08] pt-5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-zinc-700"
                    >
                      <span className="mt-[7px] inline-block h-1 w-3 bg-[#FF5A1F]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <SectionLabel index="§ 02" label="Approach" />
            <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl">
              A four-step cadence we&apos;ve run{" "}
              <span className={`${serif} italic`}>38 times</span> and counting.
            </h2>

            <div className="mt-16 grid gap-px overflow-hidden border-t border-b border-black/[0.08] bg-black/[0.06] md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col gap-6 bg-white p-8 lg:p-10">
                  <div className={`${serif} text-7xl leading-none text-zinc-950 italic`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionLabel index="§ 03" label="Selected work" />
          <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="flex flex-col">
              <div className={`${mono} text-[11px] tracking-[0.22em] text-zinc-500 uppercase`}>
                Northwind · Series&nbsp;B SaaS · 2026
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-zinc-700">
                Northwind&apos;s 12-person support team was buried under 4,200
                weekly tickets. We built a triage agent against their Zendesk
                instance, wired it into their internal knowledge base, and
                shipped an eval harness their team owns end-to-end. Three months
                in, the agent resolves 41% of tickets without human touch — and
                everything it doesn&apos;t is now categorised, prioritised, and
                routed to the right person.
              </p>
              <figure className="mt-10 border-l-2 border-[#FF5A1F] pl-6">
                <blockquote className={`${serif} text-2xl leading-snug text-zinc-900 italic`}>
                  &ldquo;Cognaitiv shipped in eight weeks what our previous vendor
                  promised in six months and never delivered. We own the code,
                  we own the prompts, and the thing actually works.&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="inline-block h-9 w-9 rounded-full bg-zinc-200" />
                  <div>
                    <div className="text-sm font-medium text-zinc-950">
                      Priya Mehta
                    </div>
                    <div className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
                      VP Operations · Northwind
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.06]">
              {[
                ["73%", "Faster response"],
                ["41%", "Fully auto-resolved"],
                ["8 wk", "From kickoff to live"],
                ["$0", "Vendor lock-in"],
              ].map(([metric, label]) => (
                <div key={label} className="bg-white p-8 lg:p-10">
                  <div className={`${serif} text-5xl leading-none text-zinc-950 italic lg:text-6xl`}>
                    {metric}
                  </div>
                  <div className={`${mono} mt-4 text-[10px] tracking-[0.22em] text-zinc-500 uppercase`}>
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
          className="border-t border-black/[0.08] bg-white"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-24 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:py-32">
            <h2 className={`${serif} max-w-3xl text-5xl leading-[1.04] text-zinc-950 italic sm:text-6xl lg:text-7xl`}>
              Let&apos;s build something that actually&nbsp;ships.
            </h2>
            <div className="flex flex-col items-start gap-4">
              <a
                href="#"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-zinc-950 pr-3 pl-7 text-base font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Book a discovery call
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5A1F] text-zinc-950 transition-transform group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </a>
              <a
                href="mailto:studio@cognaitiv.ai"
                className={`${mono} text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-[6px] hover:text-zinc-900 hover:decoration-zinc-900`}
              >
                studio@cognaitiv.ai
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-baseline gap-1.5">
                <span className={`${serif} text-2xl text-zinc-950 italic`}>Cognaitiv</span>
                <span className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
                  AI
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
                AI systems that survive contact with production. A small studio
                based between Cape Town and Lisbon.
              </p>
            </div>
            <FooterCol
              heading="Studio"
              links={["About", "Careers", "Press kit", "Manifesto"]}
            />
            <FooterCol
              heading="Services"
              links={["Automation", "Agents", "Strategy & audit", "Retainers"]}
            />
            <FooterCol
              heading="Contact"
              links={["studio@cognaitiv.ai", "Book a call", "LinkedIn", "GitHub"]}
            />
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-black/[0.08] pt-6 md:flex-row md:items-center">
            <p className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
              © 2026 Cognaitiv AI Studio · All rights reserved
            </p>
            <p className={`${mono} text-[10px] tracking-[0.18em] text-zinc-500 uppercase`}>
              Crafted in Cape Town · Operating worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className={`${mono} flex items-center gap-4 text-[11px] tracking-[0.22em] text-zinc-500 uppercase`}>
      <span>{index}</span>
      <span className="h-px w-12 bg-black/15" />
      <span className="text-zinc-700">{label}</span>
    </div>
  );
}

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h4 className={`${mono} text-[10px] tracking-[0.22em] text-zinc-500 uppercase`}>
        {heading}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-zinc-800 transition-colors hover:text-zinc-950"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
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
