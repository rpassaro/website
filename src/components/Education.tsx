"use client";
import { GraduationCap } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Education() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="mb-10 inline-flex items-center gap-2 text-3xl font-bold text-[var(--accent)]">
                <GraduationCap className="h-7 w-7" /> Education
            </h2>
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                    className="rounded-xl border border-white/10 bg-[var(--surface)] p-6 backdrop-blur transform-gpu will-change-transform"
                >
                    <h3 className="text-xl font-semibold">University of Texas at Austin</h3>
                    <p className="text-white/70">B.S. Computer Science & B.S. Economics — Expected May 2026</p>
                    {/* GPA removed per request */}
                </m.div>
            </LazyMotion>
        </section>
    );
}


