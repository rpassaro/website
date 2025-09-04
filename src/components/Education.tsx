"use client";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="mb-10 inline-flex items-center gap-2 text-3xl font-bold text-[var(--accent)]">
                <GraduationCap className="h-7 w-7" /> Education
            </h2>
            <div className="rounded-xl border border-white/10 bg-[var(--surface)] p-6 backdrop-blur">
                <h3 className="text-xl font-semibold">University of Texas at Austin</h3>
                <p className="text-white/70">B.S. Computer Science & B.S. Economics — Expected May 2026</p>
                <p className="mt-2 text-white/80">GPA: 3.3/4.0</p>
            </div>
        </section>
    );
}


