"use client";

import { useEffect, useRef, useState } from "react";

const PROMPTS = [
  "build something impressive",
  "improve my workflow",
  "optimise my business processes",
  "automate the boring stuff",
  "ship faster with fewer hands",
  "cut a process in half",
  "wire claude into our stack",
  "replace this zapier mess",
  "triage support tickets for me",
  "summarise yesterday's standup",
  "draft an internal RFC",
  "monitor my error budget",
  "tag onboarding tickets automatically",
  "build an eval harness for our agent",
  "spin up a customer-success agent",
  "rewrite our cron jobs as workflows",
  "surface anomalies in our metrics",
  "predict next month's churn",
  "clean up our knowledge base",
  "write release notes from this sprint",
  "answer ops questions from logs",
  "find duplicate records across CRMs",
  "generate this week's investor update",
  "design a smarter pipeline",
  "untangle our reporting stack",
];

export function AgentPrompt() {
  const [text, setText] = useState("");
  const lastIndex = useRef(-1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const pickNext = () => {
      let next: number;
      do {
        next = Math.floor(Math.random() * PROMPTS.length);
      } while (next === lastIndex.current && PROMPTS.length > 1);
      lastIndex.current = next;
      return PROMPTS[next];
    };

    const run = async () => {
      while (!cancelled) {
        const target = pickNext();

        for (let i = 1; i <= target.length; i++) {
          if (cancelled) return;
          setText(target.slice(0, i));
          await wait(55 + Math.random() * 40);
        }

        await wait(1800);
        if (cancelled) return;

        for (let i = target.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setText(target.slice(0, i));
          await wait(28 + Math.random() * 20);
        }

        await wait(380);
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2">
      <span className="text-zinc-500">{">"}</span>
      <span className="truncate text-zinc-700">{text}</span>
      <span
        className="inline-block h-3 w-[1.5px] shrink-0 animate-pulse bg-zinc-700"
        aria-hidden="true"
      />
    </div>
  );
}
