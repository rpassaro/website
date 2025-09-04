"use client";
import { motion } from "framer-motion";

const items = [
    {
        role: "Software Engineer",
        company: "Proprietary Trading Firm",
        period: "2023 – Present",
        highlights: [
            "Shipped low-latency trading infra with sub-second execution",
            "Broker orchestration + risk systems",
            "SOC-2 ready authentication",
        ],
    },
    {
        role: "Software Engineer",
        company: "ScraperAPI",
        period: "2022 – 2023",
        highlights: [
            "Scaled SaaS from thousands to millions of API requests/day",
            "OCR pipelines with Tesseract & Python",
            "Forecasting models with ML",
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


