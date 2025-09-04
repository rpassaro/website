"use client";

import Link from "next/link";
import { memo } from "react";
import { m } from "framer-motion";

type Project = {
    title: string;
    description: string;
    href: string;
};

function ProjectCardImpl({ project }: { project: Project }) {
    return (
        <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-[var(--surface)] p-6 backdrop-blur hover:border-[var(--accent)] transition transform-gpu will-change-transform"
        >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-white/80">{project.description}</p>
            <Link
                href={project.href}
                className="mt-4 inline-block text-[var(--accent)] hover:underline"
            >
                View project →
            </Link>
        </m.div>
    );
}

const ProjectCard = memo(ProjectCardImpl);
export default ProjectCard;


