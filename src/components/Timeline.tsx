"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";

const items = [
    {
        role: "Co-Founder & CTO",
        company: "Taking Prophets",
        period: "Jan 2025 – Present",
        highlights: [
            "Engineered Flask REST API to execute broker orders with sub-second latency.",
            "Built secure PostgreSQL backend (AES-256, JWT Auth), zero incidents.",
            "Parallelized orchestration with Python multiprocessing to reduce latency.",
            "Developed real-time broker sync scripts cutting reconciliation work by 90%.",
            "Scaled SaaS to 500+ subscribers, growing new user adoption 254% in 3 months.",
        ],
    },
    {
        role: "Software Engineering Intern",
        company: "Archaide",
        period: "Dec 2024 – May 2025",
        highlights: [
            "Deployed trading algorithms (Python, C++, JavaScript) with Interactive Brokers & Alpaca APIs, sustaining 99% uptime.",
            "Designed order-management pipelines with error handling & reconciliation.",
            "Integrated risk safeguards (position limits, kill-switches, rollbacks).",
            "Automated onboarding workflows (Zapier + CRM), reducing manual work by 80%.",
        ],
    },
    {
        role: "Software Engineering Intern",
        company: "Quiver Quantitative",
        period: "Mar 2024 – Aug 2024",
        highlights: [
            "Built OCR pipeline (Python + Tesseract) parsing thousands of filings at 95%+ accuracy.",
            "Optimized preprocessing to reduce latency 30% and error rates.",
            "Migrated workloads to GCP (Cloud Functions, BigQuery), boosting throughput 4× with auto-scaling.",
        ],
    },
];

export default function Timeline() {
    return (
        <section id="experience" className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="mb-10 text-3xl font-bold text-[var(--accent)]">Experience</h2>
            <div className="relative border-l border-white/10" style={{ contentVisibility: "auto", containIntrinsicSize: "1px 800px" }}>
                <LazyMotion features={domAnimation}>
                    {items.map((item, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="relative mb-10 ml-6 transform-gpu will-change-transform"
                        >
                            <div className="absolute -left-5 top-3 h-3.5 w-3.5 rounded-full border border-[var(--accent)] bg-[var(--bg)]" />
                            <h3 className="text-xl font-semibold">
                                {item.role} · <span className="text-white/70">{item.company}</span>
                            </h3>
                            <span className="text-sm text-white/50">{item.period}</span>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                                {item.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                                {items[0] === item && (
                                    <li>
                                        <a
                                            href="/takingprophets"
                                            className="mt-2 inline-block rounded-md border border-white/15 px-3 py-1 text-sm text-white/90 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                        >
                                            Taking Prophets case study →
                                        </a>
                                    </li>
                                )}
                                {items[1] === item && (
                                    <li>
                                        <a
                                            href="/archaide"
                                            className="mt-2 inline-block rounded-md border border-white/15 px-3 py-1 text-sm text-white/90 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                        >
                                            Archaide case study →
                                        </a>
                                    </li>
                                )}
                                {items[2] === item && (
                                    <li>
                                        <a
                                            href="/quiver"
                                            className="mt-2 inline-block rounded-md border border-white/15 px-3 py-1 text-sm text-white/90 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                        >
                                            Quiver case study →
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </m.div>
                    ))}
                </LazyMotion>
            </div>
        </section>
    );
}


