"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Machine Learning Sports Forecasting (2024)",
        description:
            "Trained XGBoost model with temporal backtesting, boosting accuracy by 20%. Automated ingestion/maintenance for 2M+ records (Python, SQLite, REST APIs).",
        href: "https://github.com/rpassaro/MLB-AI-MODEL",
    },
    {
        title: "Personal Website (2025)",
        description:
            "Built a personal website using Next.js and React.js.",
        href: "https://github.com/rpassaro/website",
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


