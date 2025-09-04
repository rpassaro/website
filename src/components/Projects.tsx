"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Machine Learning Sports Forecasting (2024)",
        description:
            "Trained XGBoost model with temporal backtesting, boosting accuracy by 20%. Automated ingestion/maintenance for 2M+ records (Python, SQLite, REST APIs).",
        href: "/projects/ml-sports-forecasting",
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


