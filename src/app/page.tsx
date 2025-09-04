"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Timeline from "@/components/Timeline";

export default function Page() {
  return (
    <>
      <section className="mx-auto flex min-h-dvh max-w-5xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-[var(--surface)]/60 p-8 backdrop-blur"
        >
          <span className="inline-flex items-center gap-2 text-sm text-white/70">
            <Terminal className="h-4 w-4 text-[var(--accent)]" />
            Software Engineer — Trading Infra & ML
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            I build <span className="text-[var(--accent)]">low-latency</span> systems
            that ship reliably at scale.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Flask/React SaaS, broker orchestration, SOC-2-ready auth, OCR pipelines, and
            GCP workloads — with measurable impact.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/work"
              className="glow rounded-xl bg-[var(--accent)] px-4 py-2 font-medium text-black transition hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="/resume"
              className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white/90 hover:border-white/25"
            >
              Resume <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
      <Timeline />
    </>
  );
}
