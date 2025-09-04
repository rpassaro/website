"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Trading Infra Platform",
        description: "Low-latency execution pipeline using Flask, TCP, and GCP.",
        href: "/projects/trading-infra",
    },
    {
        title: "OCR Pipeline & Forecasting",
        description: "End-to-end OCR pipelines + ML forecasting with Python.",
        href: "/projects/ocr-forecast",
    },
];

export default function Projects() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-10 text-3xl font-bold text-[var(--accent)]">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}


