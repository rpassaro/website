"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

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
            Hi, I&apos;m <span className="text-[var(--accent)]">Ryan Passaro</span>.
            <br />
            I build <span className="text-[var(--accent)]">low-latency</span> systems
            that ship reliably at scale.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Flask/React SaaS, broker orchestration, JWT Auth, OCR pipelines, and
            GCP workloads — with measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="glow rounded-xl bg-[var(--accent)] px-4 py-2 font-medium text-black transition hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-white/15 px-4 py-2 font-medium text-white/90 hover:border-white/25"
            >
              Download Résumé (PDF) <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
            <a
              href="mailto:passaroryan@gmail.com"
              className="rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:border-white/25 inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4 text-[var(--accent)]" /> Email
            </a>
            <a
              href="https://github.com/rpassaro/website"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:border-white/25 inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4 text-[var(--accent)]" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-passaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:border-white/25 inline-flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 text-[var(--accent)]" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
      <Timeline />
      <Education />
      <Projects />
    </>
  );
}
