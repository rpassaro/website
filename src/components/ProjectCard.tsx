"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    href: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-[var(--surface)] p-6 backdrop-blur hover:border-[var(--accent)] transition"
        >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-white/80">{project.description}</p>
            <Link
                href={project.href}
                className="mt-4 inline-block text-[var(--accent)] hover:underline"
            >
                View project →
            </Link>
        </motion.div>
    );
}


