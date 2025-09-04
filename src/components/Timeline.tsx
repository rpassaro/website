"use client";
import { motion } from "framer-motion";

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
        <section className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="mb-10 text-3xl font-bold text-[var(--accent)]">Experience</h2>
            <div className="relative border-l border-white/10">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-10 ml-6"
                    >
                        <div className="absolute -left-2 mt-2 h-4 w-4 rounded-full border border-[var(--accent)] bg-[var(--bg)]" />
                        <h3 className="text-xl font-semibold">
                            {item.role} · <span className="text-white/70">{item.company}</span>
                        </h3>
                        <span className="text-sm text-white/50">{item.period}</span>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                            {item.highlights.map((h, j) => (
                                <li key={j}>{h}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


