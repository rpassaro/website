"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Personal Website (2025)",
        description:
            "Built with Next.js (App Router) + React + TypeScript; styled with Tailwind and animated with Framer Motion. Includes a custom canvas parallax stars background and theme switching via next-themes; deployed on Vercel.",
        href: "https://github.com/rpassaro/website",
    }
    {
        title: "Machine Learning Sports Forecasting (2024)",
        description:
            "Trained XGBoost model with temporal backtesting, boosting accuracy by 20%. Automated ingestion/maintenance for 2M+ records (Python, SQLite, REST APIs).",
        href: "https://github.com/rpassaro/MLB-AI-MODEL",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-10 text-3xl font-bold text-[var(--accent)]">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}


